import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function IntroSequence({ onComplete, onTransitionStart }: { onComplete: () => void, onTransitionStart?: () => void }) {
  const [phase, setPhase] = useState<'idle' | 'playing' | 'done'>('idle');
  const [videoSrc, setVideoSrc] = useState("/intro.mp4");
  const onCompleteRef = useRef(onComplete);
  const onTransitionStartRef = useRef(onTransitionStart);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    onCompleteRef.current = onComplete;
    onTransitionStartRef.current = onTransitionStart;
  }, [onComplete, onTransitionStart]);

  const startVideo = () => {
    setPhase('playing');
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Play prevented:", err);
        handleVideoEnded();
      });
    }
  };

  const handleVideoEnded = () => {
    setPhase('done');
    if (onTransitionStartRef.current) onTransitionStartRef.current();
    setTimeout(() => {
      onCompleteRef.current();
    }, 1500); // Wait for exit animation
  };

  const handleError = () => {
    console.warn("intro.mp4 not found. Skipping video intro.");
    handleVideoEnded();
  };

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            clipPath: 'circle(0% at 50% 50%)',
            opacity: 0,
            transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
          <video
            ref={videoRef}
            src={videoSrc}
            playsInline
            onEnded={handleVideoEnded}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${phase === 'playing' ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'}`}
          />
          
          {phase === 'idle' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
              <button 
                onClick={startVideo}
                className="group flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/20 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <span className="text-lg font-mono tracking-widest uppercase font-bold">Start Presentation</span>
              </button>
            </div>
          )}

          {phase === 'playing' && (
            <button 
              onClick={handleVideoEnded}
              className="absolute bottom-8 right-8 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-md border border-white/20 transition-all z-50 text-sm font-mono tracking-widest uppercase"
            >
              Skip Intro
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
