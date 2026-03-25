import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize, Activity, Sparkles } from 'lucide-react';
import { slides } from './data';
import { Visuals } from './Visuals';
import { IntroSequence } from './IntroSequence';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [introExiting, setIntroExiting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showIntro && containerRef.current) {
      containerRef.current.focus();
    }
  }, [showIntro]);

  // Mouse Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const containerRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [2, -2]);
  const containerRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-2, 2]);
  const bgTranslateX = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const bgTranslateY = useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const nextSlide = () => setCurrentSlide(p => Math.min(slides.length - 1, p + 1));
  const prevSlide = () => setCurrentSlide(p => Math.max(0, p - 1));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.log(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const slide = slides[currentSlide];
  const progress = (currentSlide + 1) / slides.length;
  
  // Deep cinematic background colors
  const bgColors = [
    'bg-[#030712]', 'bg-[#081326]', 'bg-[#0f0b29]', 'bg-[#14081c]', 
    'bg-[#1a0815]', 'bg-[#1c080d]', 'bg-[#1c0c08]', 'bg-[#1a1206]',
    'bg-[#0a1711]', 'bg-[#06171a]', 'bg-[#05111a]'
  ];

  return (
    <>
      {showIntro && <IntroSequence onComplete={() => setShowIntro(false)} onTransitionStart={() => setIntroExiting(true)} />}
      <motion.div 
        ref={containerRef}
        tabIndex={0}
        autoFocus
        className={`min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 font-sans overflow-hidden relative text-white transition-colors duration-1000 perspective-[2000px] outline-none ${bgColors[currentSlide % bgColors.length]}`}
      >
      
      {/* Cinematic Ambient Background Mesh with Parallax */}
      <motion.div 
        style={{ x: bgTranslateX, y: bgTranslateY }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1], 
            x: [0, 150, 0], 
            y: [0, 100, 0],
            rotate: [0, 90, 0]
          }} 
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] rounded-full mix-blend-screen" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 2, 1], 
            x: [0, -150, 0], 
            y: [0, -100, 0],
            rotate: [0, -90, 0]
          }} 
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_70%)] rounded-full mix-blend-screen" 
        />
        
        {/* Tech Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Continuous Electronics / Circuit Background */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              d="M 10%,80% L 20%,80% L 25%,75% L 40%,75% L 45%,80% L 60%,80%"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              d="M 80%,20% L 75%,25% L 75%,40% L 70%,45%"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
              d="M 0%,30% L 15%,30% L 20%,35% L 40%,35% L 45%,40% L 60%,40%"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              d="M 100%,60% L 85%,60% L 80%,55% L 60%,55% L 55%,50%"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              d="M 30%,10% L 30%,20% L 35%,25% L 50%,25%"
            />
            {/* Glowing Nodes */}
            <motion.circle cx="20%" cy="80%" r="3" fill="#fbbf24" animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 4, repeat: Infinity }} />
            <motion.circle cx="40%" cy="75%" r="3" fill="#fbbf24" animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
            <motion.circle cx="75%" cy="25%" r="3" fill="#fbbf24" animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 4.5, repeat: Infinity, delay: 2 }} />
            <motion.circle cx="20%" cy="35%" r="3" fill="#fbbf24" animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 6, repeat: Infinity, delay: 0.5 }} />
            <motion.circle cx="80%" cy="55%" r="3" fill="#fbbf24" animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 5.5, repeat: Infinity, delay: 1.5 }} />
            <motion.circle cx="35%" cy="25%" r="3" fill="#fbbf24" animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 4, repeat: Infinity, delay: 2.5 }} />
          </g>
        </svg>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/80 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.1,
              scale: Math.random() * 2,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Presentation Container Entrance Animation */}
      <motion.div
        initial={{ scale: 0.6, rotateX: 30, rotateY: -20, opacity: 0, z: -1000 }}
        animate={introExiting ? { scale: 1, rotateX: 0, rotateY: 0, opacity: 1, z: 0 } : { scale: 0.6, rotateX: 30, rotateY: -20, opacity: 0, z: -1000 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="w-full max-w-7xl relative z-10 pointer-events-auto"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Presentation Container with 3D Parallax */}
        <motion.div 
          style={{ rotateX: containerRotateX, rotateY: containerRotateY, transformStyle: "preserve-3d" }}
          className="relative w-full h-[85vh] min-h-[600px] bg-gradient-to-br from-slate-900/80 via-slate-950/60 to-black/80 backdrop-blur-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(255,255,255,0.05)] rounded-[2rem] overflow-hidden flex flex-col pointer-events-auto"
        >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gradient-to-r from-white/10 to-transparent relative z-20 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
              {/* Lion Icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-cyan-400">
                <path d="M14.5 9.5C14.5 8.67 15.17 8 16 8C16.83 8 17.5 8.67 17.5 9.5C17.5 10.33 16.83 11 16 11C15.17 11 14.5 10.33 14.5 9.5ZM8 11C8.83 11 9.5 10.33 9.5 9.5C9.5 8.67 8.83 8 8 8C7.17 8 6.5 8.67 6.5 9.5C6.5 10.33 7.17 11 8 11ZM12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 11.45 9.95 11 10.5 11C11.05 11 11.5 11.45 11.5 12C11.5 12.28 11.72 12.5 12 12.5C12.28 12.5 12.5 12.28 12.5 12C12.5 11.45 12.95 11 13.5 11C14.05 11 14.5 11.45 14.5 12C14.5 13.38 13.38 14.5 12 14.5ZM21 10.5C21 10.5 20.5 8.5 19 7.5C19 7.5 18 5 15 5C15 5 14.5 3 12 3C9.5 3 9 5 9 5C6 5 5 7.5 5 7.5C3.5 8.5 3 10.5 3 10.5C3 10.5 2.5 13 4 15C4 15 4.5 17.5 7 18.5C7 18.5 8 21 12 21C16 21 17 18.5 17 18.5C19.5 17.5 20 15 20 15C21.5 13 21 10.5 21 10.5Z" />
              </svg>
            </div>
            <motion.span 
              animate={{ backgroundPosition: ["200% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-200 to-blue-400 font-light tracking-[0.3em] text-sm uppercase font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
              style={{ backgroundSize: "200% auto" }}
            >
              TEAM SHADOW
            </motion.span>
          </div>
          <div className="flex items-center gap-6">
            
            {/* Circular Progress */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-white/10"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  className="text-blue-500"
                  strokeWidth="3"
                  strokeDasharray="100, 100"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 100 - (progress * 100) }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute text-[9px] font-bold text-slate-300 font-mono">{currentSlide + 1}</span>
            </div>

            <button onClick={toggleFullscreen} className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg no-print cursor-pointer relative z-50" title="Toggle Fullscreen">
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slide Content */}
        <div className="flex-1 relative overflow-hidden" style={{ transformStyle: "preserve-3d" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0, scale: 0.95 }}
              animate={{ clipPath: 'circle(150% at 50% 50%)', opacity: 1, scale: 1 }}
              exit={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 p-6 lg:p-10 overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Left Column: Text */}
              <div className="flex flex-col justify-start h-full z-10 py-4 lg:py-0 overflow-y-auto pr-2 custom-scrollbar" style={{ transform: "translateZ(30px)" }}>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit mb-4 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                  <span className="text-blue-300 font-mono text-[10px] tracking-widest uppercase font-bold">
                    Slide {String(currentSlide + 1).padStart(2, '0')}
                  </span>
                </motion.div>
                
                <div className="overflow-hidden mb-6">
                  <motion.h1 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="text-3xl lg:text-4xl xl:text-5xl font-space font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-300 leading-[1.1] tracking-tight drop-shadow-lg pb-2"
                  >
                    {slide.title}
                  </motion.h1>
                </div>

                <div className="space-y-3">
                  {slide.points.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                      whileHover="hover"
                      className="group flex items-start gap-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:from-white/10 hover:to-white/5 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30 transition-all cursor-default backdrop-blur-md"
                    >
                      <motion.div 
                        variants={{ hover: { scale: 1.5, backgroundColor: '#60a5fa', boxShadow: '0 0 10px rgba(96,165,250,0.8)' } }}
                        className="w-2 h-2 rounded-full bg-blue-500/50 mt-2 shrink-0 transition-all duration-300" 
                      />
                      <motion.p 
                        variants={{ hover: { color: '#ffffff' } }}
                        className="text-base text-slate-300 font-medium leading-relaxed transition-colors duration-300"
                      >
                        {point}
                      </motion.p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual */}
              <div className="h-full flex items-center justify-center relative z-0" style={{ transform: "translateZ(50px)" }}>
                <Visuals type={slide.visualType} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 p-2 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(59,130,246,0.2)] pointer-events-auto">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5 transition-all text-white active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="w-px h-8 bg-white/10 mx-2" />
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-3 rounded-xl bg-blue-600/80 text-white hover:bg-blue-500 disabled:opacity-30 disabled:hover:bg-blue-600/80 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        </motion.div>
      </motion.div>
    </motion.div>
    </>
  );
}
