import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Tv, Cpu, Wifi, Cloud, Lock, Globe, Zap, Server, Shield, Eye, Layers, Activity, Radio, Database, Fingerprint, Code, Hexagon, Play, Monitor, Smartphone } from 'lucide-react';

export function Visuals({ type }: { type: string }) {
  const containerStyle = "relative w-full h-full min-h-[400px] flex items-center justify-center perspective-[2000px] transform-gpu";

  switch (type) {
    case 'smart-tv-concept':
      return (
        <div className={containerStyle}>
          <motion.div 
            initial={{ rotateY: -15, rotateX: 5, scale: 0.9 }}
            animate={{ rotateY: [-15, 15, -15], rotateX: [5, -5, 5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[400px] h-[240px] bg-slate-900 rounded-xl border-4 border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(59,130,246,0.3)] p-2 flex flex-col"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Screen */}
            <div className="flex-1 bg-gradient-to-br from-blue-900 to-black rounded-lg overflow-hidden relative border border-blue-500/30" style={{ transform: 'translateZ(20px)' }}>
              {/* UI Grid */}
              <div className="absolute inset-0 p-4 grid grid-cols-3 gap-3">
                {[...Array(6)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-white/10 rounded-lg backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                  >
                    {i === 0 && <Play className="w-8 h-8 text-red-500" />}
                    {i === 1 && <Globe className="w-8 h-8 text-blue-400" />}
                    {i === 2 && <Cloud className="w-8 h-8 text-cyan-400" />}
                    {i > 2 && <div className="w-8 h-8 rounded-full bg-white/20" />}
                  </motion.div>
                ))}
              </div>
              {/* Screen Glow */}
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-screen pointer-events-none" />
            </div>
            {/* Stand */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 bg-slate-800 rounded-b-xl" style={{ transform: 'translateZ(10px)' }} />
          </motion.div>

          {/* Floating App Icons around TV */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`float-${i}`}
              className="absolute w-12 h-12 bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-blue-400/50 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              initial={{ 
                x: Math.cos(i * (Math.PI * 2) / 5) * 250, 
                y: Math.sin(i * (Math.PI * 2) / 5) * 200,
                z: Math.random() * 100 - 50
              }}
              animate={{ 
                y: [null, Math.sin(i * (Math.PI * 2) / 5) * 200 - 30, Math.sin(i * (Math.PI * 2) / 5) * 200],
                rotateY: [0, 360]
              }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {i % 2 === 0 ? <Smartphone className="w-6 h-6 text-blue-400" /> : <Monitor className="w-6 h-6 text-cyan-400" />}
            </motion.div>
          ))}
        </div>
      );

    case 'smart-tv-flow':
      return (
        <div className={containerStyle}>
          {/* Central TV */}
          <motion.div 
            className="relative w-64 h-40 bg-slate-900 rounded-xl border-2 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.4)] flex items-center justify-center z-20"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Tv className="w-16 h-16 text-blue-400" />
            <motion.div 
              className="absolute inset-0 bg-blue-500/20 rounded-xl"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Data Flow Lines & Nodes */}
          <svg className="absolute inset-0 w-full h-full z-10" style={{ transform: 'translateZ(-20px)' }}>
            <g stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="4 4" opacity="0.5">
              <path d="M 100,200 Q 200,100 300,200" />
              <path d="M 100,200 Q 200,300 300,200" />
              <path d="M 300,200 L 500,200" />
            </g>
          </svg>

          {/* Flowing Data Packets */}
          <motion.div 
            className="absolute w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)] z-30"
            animate={{ 
              x: [-200, 0, 200],
              y: [0, -100, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)] z-30"
            animate={{ 
              x: [-200, 0, 200],
              y: [0, 100, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
          />

          {/* Floating Labels */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
            <div className="p-3 bg-slate-800 rounded-full border border-slate-600"><Globe className="w-6 h-6 text-slate-300" /></div>
            <span className="text-xs font-mono text-slate-400">INTERNET</span>
          </div>
          <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
            <div className="p-3 bg-slate-800 rounded-full border border-slate-600"><Eye className="w-6 h-6 text-slate-300" /></div>
            <span className="text-xs font-mono text-slate-400">DISPLAY</span>
          </div>
        </div>
      );

    case 'crt-static':
      return (
        <div className={containerStyle}>
          <motion.div 
            initial={{ rotateY: -20, rotateX: 10, scale: 0.8 }}
            animate={{ rotateY: [-20, 20, -20], rotateX: [10, -10, 10] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-96 h-72 bg-stone-900 rounded-3xl border-[12px] border-stone-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-4 flex flex-col"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Curved Screen Bezel */}
            <div className="flex-1 bg-black rounded-2xl overflow-hidden relative border-8 border-stone-950 shadow-[inset_0_0_50px_rgba(255,255,255,0.1)]" style={{ transform: 'translateZ(20px)' }}>
              
              {/* RGB Split Glitch Effect */}
              <motion.div 
                animate={{ x: [-2, 2, -1, 3, 0], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 0.1, repeat: Infinity, repeatType: "mirror" }}
                className="absolute inset-0 flex items-center justify-center mix-blend-screen text-red-500 font-mono text-3xl font-black tracking-widest ml-1"
              >
                NO SIGNAL
              </motion.div>
              <motion.div 
                animate={{ x: [2, -2, 1, -3, 0], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 0.15, repeat: Infinity, repeatType: "mirror" }}
                className="absolute inset-0 flex items-center justify-center mix-blend-screen text-blue-500 font-mono text-3xl font-black tracking-widest -ml-1"
              >
                NO SIGNAL
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center text-green-400 font-mono text-3xl font-black tracking-widest drop-shadow-[0_0_10px_rgba(74,222,128,1)]">
                NO SIGNAL
              </div>

              {/* Heavy Scanlines */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-10" />
              
              {/* CRT Phosphor Glow */}
              <div className="absolute inset-0 bg-green-900/20 mix-blend-screen pointer-events-none" />
              
              {/* Screen Curvature Shadow */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)] pointer-events-none z-20" />
            </div>

            {/* Old TV Controls */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4" style={{ transform: 'translateZ(15px)' }}>
              <div className="w-8 h-8 rounded-full bg-stone-800 border-2 border-stone-700 shadow-md" />
              <div className="w-8 h-8 rounded-full bg-stone-800 border-2 border-stone-700 shadow-md" />
            </div>
            
            {/* Antenna */}
            <div className="absolute -top-16 left-1/2 w-1 h-20 bg-stone-500 origin-bottom -rotate-45" style={{ transform: 'translateZ(-10px)' }} />
            <div className="absolute -top-16 left-1/2 w-1 h-20 bg-stone-500 origin-bottom rotate-12" style={{ transform: 'translateZ(-10px)' }} />
          </motion.div>
        </div>
      );

    case 'tv-transition':
      return (
        <div className={containerStyle}>
          <TransitionAnimation />
        </div>
      );

    case 'title':
      return (
        <div className={containerStyle}>
          {/* 3D Quantum Core */}
          <motion.div 
            className="relative w-64 h-64"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-[3px] border-blue-500/40"
                style={{ 
                  transformStyle: 'preserve-3d',
                  rotateX: i * 30,
                  rotateY: i * 30,
                  boxShadow: '0 0 20px rgba(59,130,246,0.2) inset, 0 0 20px rgba(59,130,246,0.2)'
                }}
              >
                {/* Orbiting Energy Nodes */}
                <motion.div 
                  className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-300 rounded-full shadow-[0_0_15px_rgba(103,232,249,1)]"
                  style={{ x: '-50%', y: '-50%' }}
                  animate={{ rotateZ: [0, 360] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ))}
            
            {/* Core Glow */}
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-1/4 bg-[radial-gradient(circle,rgba(96,165,250,0.8)_0%,rgba(79,70,229,0.5)_50%,transparent_100%)] rounded-full opacity-80"
            />
            
            {/* Central Sparkle */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ transform: 'translateZ(50px)' }}
            >
              <div className="relative p-6 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                <Sparkles className="w-16 h-16 text-blue-400" />
                <motion.div 
                  className="absolute inset-0 rounded-3xl border border-cyan-300/50"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      );

    case 'crt':
      return (
        <div className={containerStyle}>
          <motion.div 
            initial={{ rotateY: -20, rotateX: 10, scale: 0.8 }}
            animate={{ rotateY: [-20, 20, -20], rotateX: [10, -10, 10] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-96 h-72 bg-stone-900 rounded-3xl border-[12px] border-stone-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-4 flex flex-col"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Curved Screen Bezel */}
            <div className="flex-1 bg-black rounded-2xl overflow-hidden relative border-8 border-stone-950 shadow-[inset_0_0_50px_rgba(255,255,255,0.1)]" style={{ transform: 'translateZ(20px)' }}>
              
              {/* RGB Split Glitch Effect */}
              <motion.div 
                animate={{ x: [-2, 2, -1, 3, 0], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 0.1, repeat: Infinity, repeatType: "mirror" }}
                className="absolute inset-0 flex items-center justify-center mix-blend-screen text-red-500 font-mono text-3xl font-black tracking-widest ml-1"
              >
                NO SIGNAL
              </motion.div>
              <motion.div 
                animate={{ x: [2, -2, 1, -3, 0], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 0.15, repeat: Infinity, repeatType: "mirror" }}
                className="absolute inset-0 flex items-center justify-center mix-blend-screen text-blue-500 font-mono text-3xl font-black tracking-widest -ml-1"
              >
                NO SIGNAL
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center text-green-400 font-mono text-3xl font-black tracking-widest drop-shadow-[0_0_10px_rgba(74,222,128,1)]">
                NO SIGNAL
              </div>

              {/* Heavy Scanlines */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-10" />
              
              {/* CRT Phosphor Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-20" />
              
              {/* Rolling Sync Bar */}
              <motion.div 
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-32 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.05)_50%,transparent)] z-30"
              />
            </div>
            
            {/* Hardware Details */}
            <div className="h-6 mt-4 flex justify-between items-center px-4" style={{ transform: 'translateZ(10px)' }}>
              <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-2 bg-stone-800 rounded-full shadow-inner" />
                ))}
              </div>
              <motion.div 
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 0.1, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,1)]" 
              />
            </div>
          </motion.div>
        </div>
      );

    case 'smart-tv':
      return (
        <div className={containerStyle}>
          {/* Exploded 3D View */}
          <motion.div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateX: [10, -10, 10], rotateY: [-20, 20, -20] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Back Panel */}
            <div className="absolute w-80 h-48 bg-slate-900 rounded-xl border border-slate-700 shadow-2xl" style={{ transform: 'translateZ(-100px)' }}>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
            </div>

            {/* Motherboard Layer */}
            <div className="absolute w-72 h-40 bg-emerald-900/80 rounded-lg border border-emerald-500/50 flex items-center justify-center" style={{ transform: 'translateZ(-50px)' }}>
              <Cpu className="w-12 h-12 text-emerald-400" />
              {/* Data Lines connecting to screen */}
              <svg className="absolute inset-0 w-full h-full overflow-visible" style={{ transform: 'translateZ(25px)' }}>
                {[...Array(6)].map((_, i) => (
                  <motion.line
                    key={i}
                    x1={144} y1={80}
                    x2={144 + (i - 2.5) * 40} y2={80}
                    stroke="#34d399" strokeWidth="2" strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ))}
              </svg>
            </div>

            {/* Display Panel */}
            <div className="absolute w-96 h-56 bg-slate-950/80 backdrop-blur-md rounded-xl border-2 border-slate-600 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden" style={{ transform: 'translateZ(50px)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30" />
              <Tv className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-white/20" />
              
              {/* Floating UI Elements on Screen */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-16 h-12 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20"
                  style={{ 
                    left: `${20 + i * 20}%`, 
                    top: '60%',
                    transformStyle: 'preserve-3d'
                  }}
                  animate={{ 
                    y: [0, -10, 0],
                    translateZ: [0, 20, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      );

    case 'architecture':
      return (
        <div className={containerStyle}>
          <motion.div 
            animate={{ rotateX: [60, 60], rotateZ: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="relative w-80 h-80"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Holographic Grid Base */}
            <div className="absolute inset-[-50%] bg-[linear-gradient(to_right,#3b82f633_2px,transparent_2px),linear-gradient(to_bottom,#3b82f633_2px,transparent_2px)] bg-[size:40px_40px]" style={{ transform: 'translateZ(-100px)' }}>
              <motion.div 
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f6_0%,transparent_50%)] mix-blend-screen"
              />
            </div>

            {/* Multi-layered PCB */}
            {[...Array(3)].map((_, layerIndex) => (
              <div 
                key={layerIndex}
                className="absolute inset-0 rounded-3xl border border-blue-500/30"
                style={{ 
                  transform: `translateZ(${layerIndex * -20}px)`,
                  backgroundColor: `rgba(15, 23, 42, ${0.8 - layerIndex * 0.2})`
                }}
              >
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 320 320">
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 + layerIndex * 15) * Math.PI / 180;
                    return (
                      <motion.path
                        key={i}
                        d={`M 160 160 L ${160 + Math.cos(angle) * 140} ${160 + Math.sin(angle) * 140}`}
                        stroke={layerIndex === 0 ? "#60a5fa" : "#3b82f6"}
                        strokeWidth={layerIndex === 0 ? "3" : "1"}
                        strokeDasharray={layerIndex === 0 ? "none" : "4 4"}
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 + layerIndex }}
                      />
                    );
                  })}
                </svg>
              </div>
            ))}

            {/* Floating SoC Core */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(60px)' }}>
              <motion.div 
                animate={{ z: [0, 30, 0], rotateZ: [0, -90] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-32 bg-slate-900 rounded-2xl border-2 border-blue-400 shadow-[0_0_50px_rgba(59,130,246,0.6)] flex items-center justify-center relative overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Core Inner Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.4)_0%,transparent_70%)]" />
                <Hexagon className="w-16 h-16 text-blue-300 relative z-10" />
                
                {/* Processing Nodes */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]"
                    style={{
                      top: i < 2 ? '10%' : '80%',
                      left: i % 2 === 0 ? '10%' : '80%'
                    }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.25 }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      );

    case 'os':
      return (
        <div className={containerStyle}>
          {/* 3D Carousel */}
          <motion.div 
            className="relative w-full h-full flex items-center justify-center" 
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: [0, -360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {['webOS', 'Tizen', 'Android TV', 'Roku OS', 'Fire OS'].map((os, i, arr) => {
              const angle = (i * 360) / arr.length;
              const radius = 200;
              return (
                <div
                  key={os}
                  className="absolute w-48 h-64"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <motion.div
                    className="w-full h-full bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center gap-6 relative overflow-hidden"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(96,165,250,0.8)' }}
                  >
                    {/* Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                    
                    <Layers className={`w-16 h-16 ${['text-red-400', 'text-blue-400', 'text-green-400', 'text-purple-400', 'text-orange-400'][i]}`} />
                    <span className="font-space font-bold text-xl text-white tracking-widest">{os}</span>
                    
                    {/* Activity Bar */}
                    <div className="w-24 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <motion.div 
                        className={`h-full ${['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'][i]}`}
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      );

    case 'connectivity':
      return (
        <div className={containerStyle}>
          <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
            
            {/* Central Globe */}
            <motion.div 
              animate={{ rotateY: 360, rotateX: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-32 h-32"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-[-50%] bg-[radial-gradient(circle,rgba(37,99,235,0.2)_0%,transparent_70%)] rounded-full" />
              <Globe className="w-full h-full text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
              
              {/* Ping Waves */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-blue-400/50"
                  animate={{ scale: [1, 4], opacity: [1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
                />
              ))}
            </motion.div>

            {/* Orbiting Nodes */}
            {[Wifi, Cloud, Radio, Zap, Database].map((Icon, i, arr) => {
              const angle = (i * 360) / arr.length;
              return (
                <motion.div
                  key={i}
                  className="absolute w-16 h-16 bg-slate-800/90 backdrop-blur-md rounded-2xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center"
                  animate={{
                    rotateZ: [angle, angle + 360],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  style={{
                    originX: 0.5,
                    originY: 0.5,
                    x: Math.cos(angle * Math.PI / 180) * 180,
                    y: Math.sin(angle * Math.PI / 180) * 180,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <motion.div
                    animate={{ rotateZ: [-angle, -(angle + 360)] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                  
                  {/* Connecting Line to Center */}
                  <svg className="absolute top-1/2 left-1/2 w-[180px] h-[2px] overflow-visible pointer-events-none" style={{ transformOrigin: '0 0', transform: 'rotate(180deg)' }}>
                    <motion.line 
                      x1="0" y1="0" x2="180" y2="0" 
                      stroke="rgba(56, 189, 248, 0.3)" strokeWidth="2" strokeDasharray="4 4"
                      animate={{ strokeDashoffset: [0, 20] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
                </motion.div>
              );
            })}
          </div>
        </div>
      );

    case 'data-flow':
      return (
        <div className={containerStyle}>
          <div className="flex w-full max-w-2xl items-center justify-between relative" style={{ transformStyle: 'preserve-3d' }}>
            
            {/* Source Node */}
            <motion.div 
              animate={{ z: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-4 z-20"
            >
              <div className="w-24 h-32 bg-slate-900 rounded-2xl border-2 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.4)] flex flex-col justify-evenly p-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent" />
                <Server className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-indigo-400"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-space font-bold text-indigo-300 tracking-widest">CDN EDGE</span>
            </motion.div>

            {/* Complex 3D Data Stream */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10" style={{ transform: 'translateZ(10px)' }}>
              <svg className="w-full h-64 overflow-visible" viewBox="0 0 600 200">
                <defs>
                  <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(99, 102, 241, 0.1)" />
                    <stop offset="50%" stopColor="rgba(56, 189, 248, 0.5)" />
                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
                  </linearGradient>
                </defs>
                
                {/* Multiple Paths */}
                {[
                  "M 100 100 C 250 20, 350 180, 500 100",
                  "M 100 100 C 250 180, 350 20, 500 100",
                  "M 100 100 L 500 100"
                ].map((d, pathIndex) => (
                  <g key={pathIndex}>
                    <path d={d} stroke="url(#streamGrad)" strokeWidth="4" fill="none" opacity="0.5" />
                    {/* Packets */}
                    {[...Array(4)].map((_, i) => (
                      <motion.circle
                        key={i}
                        r="6"
                        fill={pathIndex === 0 ? "#6366f1" : pathIndex === 1 ? "#38bdf8" : "#10b981"}
                        initial={{ offsetDistance: "0%" }}
                        animate={{ offsetDistance: "100%" }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: (i * 0.75) + (pathIndex * 0.2) }}
                        style={{ filter: 'drop-shadow(0 0 10px currentColor)', offsetPath: `path('${d}')` } as any}
                      />
                    ))}
                  </g>
                ))}
              </svg>
            </div>

            {/* Destination Node */}
            <motion.div 
              animate={{ z: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="flex flex-col items-center gap-4 z-20"
            >
              <div className="w-32 h-24 bg-slate-900 rounded-2xl border-2 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent" />
                <Tv className="w-12 h-12 text-emerald-400 relative z-10" />
                
                {/* Decoding Rings */}
                <motion.div 
                  className="absolute inset-0 border-[4px] border-emerald-400/30 rounded-2xl"
                  animate={{ scale: [1, 1.2], opacity: [1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
              <span className="text-sm font-space font-bold text-emerald-300 tracking-widest">FRAME BUFFER</span>
            </motion.div>
          </div>
        </div>
      );

    case 'interaction':
      return (
        <div className={containerStyle}>
          <motion.div 
            className="relative flex items-center justify-center w-full h-full"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: [-15, 15, -15], rotateX: [5, -5, 5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* 3D Remote */}
            <div className="absolute left-1/4 w-16 h-48 bg-slate-800 rounded-full border-4 border-slate-600 shadow-[20px_20px_50px_rgba(0,0,0,0.8)] flex flex-col items-center py-6 gap-4" style={{ transform: 'translateZ(50px)' }}>
              <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-500 flex items-center justify-center shadow-inner">
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,1)]" 
                />
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-500" />
              <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-500" />
              
              {/* Emission Point */}
              <div className="absolute top-0 w-4 h-2 bg-blue-400 rounded-t-full shadow-[0_-10px_20px_rgba(96,165,250,0.8)]" />
            </div>

            {/* Sound Waves / NLP Processing */}
            <div className="absolute right-1/4 flex items-center gap-2" style={{ transform: 'translateZ(0px)' }}>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 rounded-full"
                  style={{ 
                    backgroundColor: `hsl(${200 + i * 5}, 100%, 60%)`,
                    boxShadow: `0 0 10px hsl(${200 + i * 5}, 100%, 60%)`
                  }}
                  animate={{ 
                    height: [10, Math.random() * 120 + 20, 10],
                    scaleY: [1, 1.5, 1]
                  }}
                  transition={{ 
                    duration: 0.5 + Math.random() * 0.5, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    delay: i * 0.05
                  }}
                />
              ))}
            </div>

            {/* Connecting Particles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  initial={{ x: -100, y: 0, opacity: 0 }}
                  animate={{ 
                    x: [ -100, 100 ],
                    y: [ 0, Math.sin(i) * 50 ],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      );

    case 'security':
      return (
        <div className={containerStyle}>
          <motion.div 
            className="relative w-80 h-80 flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateX: [20, 20], rotateY: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            {/* Spherical Code Shield */}
            {[...Array(12)].map((_, ringIndex) => (
              <motion.div
                key={ringIndex}
                className="absolute inset-0 rounded-full border border-red-500/20"
                style={{ 
                  transform: `rotateX(${ringIndex * 15}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {[...Array(8)].map((_, nodeIndex) => (
                  <div 
                    key={nodeIndex}
                    className="absolute text-[10px] font-mono font-bold"
                    style={{ 
                      transform: `rotateY(${nodeIndex * 45}deg) translateZ(160px)`,
                      color: Math.random() > 0.8 ? '#4ade80' : '#ef4444',
                      textShadow: '0 0 5px currentColor'
                    }}
                  >
                    {Math.random() > 0.5 ? '1' : '0'}
                  </div>
                ))}
              </motion.div>
            ))}

            {/* Central Lock */}
            <motion.div 
              className="relative z-10 w-32 h-32 bg-slate-900 rounded-3xl border-2 border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden"
              style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}
              animate={{ rotateY: [-360, 0] }} // Counter-rotate to face front
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950" />
              <Lock className="w-16 h-16 text-slate-300 relative z-10" />
              
              {/* Scanning Laser */}
              <motion.div 
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-2 bg-green-500/80 shadow-[0_0_20px_rgba(74,222,128,1)] z-20"
              />
              
              {/* Fingerprint Overlay */}
              <motion.div 
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <Fingerprint className="w-24 h-24 text-green-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      );

    case 'ai-processing':
      return (
        <div className={containerStyle}>
          <motion.div 
            className="relative w-80 h-80 flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateX: [10, -10, 10], rotateY: [-15, 15, -15] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Central AI Brain */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(0px)' }}>
              <motion.div 
                className="w-32 h-32 bg-slate-900 rounded-3xl border-2 border-indigo-500/50 shadow-[0_0_50px_rgba(99,102,241,0.6)] flex items-center justify-center relative overflow-hidden"
                animate={{ boxShadow: ["0 0 50px rgba(99,102,241,0.6)", "0 0 80px rgba(99,102,241,0.9)", "0 0 50px rgba(99,102,241,0.6)"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.4)_0%,transparent_70%)]" />
                <Cpu className="w-16 h-16 text-indigo-400 relative z-10" />
                
                {/* Neural Network Nodes inside Brain */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`node-${i}`}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`
                    }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: Math.random() * 2 }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Processing Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`ring-${i}`}
                className="absolute inset-0 rounded-full border border-indigo-500/30"
                style={{ 
                  transform: `rotateX(${70}deg) translateZ(${i * 40 - 40}px)`,
                  transformStyle: 'preserve-3d'
                }}
                animate={{ rotateZ: [0, 360] }}
                transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear", direction: i % 2 === 0 ? "normal" : "reverse" }}
              >
                {/* Data Packets on Rings */}
                {[...Array(4)].map((_, j) => (
                  <div 
                    key={`packet-${i}-${j}`}
                    className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]"
                    style={{ 
                      top: '0', left: '50%', transform: `translateX(-50%) rotate(${j * 90}deg)`, transformOrigin: '50% 160px'
                    }}
                  />
                ))}
              </motion.div>
            ))}

            {/* Input/Output Streams */}
            <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 flex flex-col gap-2" style={{ transform: 'translateZ(20px)' }}>
               <div className="text-[10px] font-mono text-slate-400">RAW_DATA</div>
               <div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
                 <motion.div className="h-full bg-slate-500" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
               </div>
            </div>
            <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 flex flex-col gap-2 items-end" style={{ transform: 'translateZ(20px)' }}>
               <div className="text-[10px] font-mono text-indigo-400">ENHANCED_4K</div>
               <div className="w-16 h-1 bg-indigo-900/50 rounded-full overflow-hidden">
                 <motion.div className="h-full bg-indigo-400" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }} />
               </div>
            </div>

          </motion.div>
        </div>
      );

    case 'display-tech':
      return (
        <div className={containerStyle}>
          <motion.div 
            className="relative w-[500px] h-[300px] flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: [-20, 20, -20], rotateX: [10, -10, 10] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Exploded Display Layers */}
            
            {/* Backlight (LED/MiniLED) */}
            <div className="absolute w-64 h-40 bg-slate-900 rounded-xl border border-slate-700 shadow-[0_0_30px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden" style={{ transform: 'translateZ(-80px)' }}>
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-5 gap-1 p-2">
                {[...Array(40)].map((_, i) => (
                  <motion.div 
                    key={`led-${i}`}
                    className="bg-white rounded-sm"
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                    style={{ boxShadow: '0 0 10px rgba(255,255,255,0.8)' }}
                  />
                ))}
              </div>
              <span className="absolute -bottom-6 text-[10px] font-mono text-slate-400">BACKLIGHT LAYER</span>
            </div>

            {/* Quantum Dot / Color Filter Layer */}
            <div className="absolute w-72 h-48 bg-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-600 flex items-center justify-center overflow-hidden" style={{ transform: 'translateZ(0px)' }}>
               <div className="absolute inset-0 flex">
                 <div className="flex-1 bg-red-500/20 mix-blend-screen" />
                 <div className="flex-1 bg-green-500/20 mix-blend-screen" />
                 <div className="flex-1 bg-blue-500/20 mix-blend-screen" />
               </div>
               <span className="absolute -bottom-6 text-[10px] font-mono text-slate-300">COLOR FILTER / QUANTUM DOTS</span>
            </div>

            {/* LCD/OLED Pixel Layer */}
            <div className="absolute w-80 h-56 bg-slate-950/60 backdrop-blur-md rounded-xl border-2 border-slate-500 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden" style={{ transform: 'translateZ(80px)' }}>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjYiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjYiIGZpbGw9IiNmZjAwMDAiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PHJlY3QgeD0iMiIgd2lkdGg9IjIiIGhlaWdodD0iNiIgZmlsbD0iIzAwZmYwMCIgZmlsbC1vcGFjaXR5PSIwLjIiLz48cmVjdCB4PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI2IiBmaWxsPSIjMDAwMGZmIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-30" />
              
              {/* Vibrant Image on Screen */}
              <div className="absolute inset-4 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-lg opacity-80 mix-blend-overlay" />
              <Tv className="w-16 h-16 text-white/50 relative z-10" />
              <span className="absolute -bottom-6 text-[10px] font-mono text-white">PIXEL / DISPLAY LAYER</span>
            </div>

            {/* Connecting Lines between layers */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: 'translateZ(0px) rotateY(90deg)' }}>
               <line x1="50%" y1="50%" x2="50%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2" />
            </svg>

          </motion.div>
        </div>
      );

    case 'future':
      return (
        <div className={containerStyle}>
          <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
            
            {/* Projector Base */}
            <div className="absolute bottom-0 w-64 h-16 bg-slate-900 rounded-[100%] border-t-4 border-cyan-500 shadow-[0_-20px_50px_rgba(6,182,212,0.5)] flex items-center justify-center" style={{ transform: 'translateZ(0px)' }}>
              <div className="w-32 h-8 bg-[radial-gradient(ellipse,rgba(34,211,238,0.2)_0%,transparent_70%)] rounded-[100%]" />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-16 h-4 bg-cyan-300 rounded-[100%] shadow-[0_0_30px_rgba(103,232,249,1)]"
              />
            </div>

            {/* Volumetric Light Cone */}
            <div className="absolute bottom-8 w-64 h-80 bg-gradient-to-t from-cyan-500/30 via-cyan-400/5 to-transparent" style={{ clipPath: 'polygon(40% 100%, 60% 100%, 100% 0, 0 0)', transform: 'translateZ(-10px)' }} />

            {/* 3D Holographic Construct */}
            <motion.div 
              className="absolute bottom-32 w-48 h-48"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {/* Complex Geometry */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-[3px] border-cyan-300/60"
                  style={{ 
                    borderRadius: i === 0 ? '50%' : i === 1 ? '10%' : '30%',
                    transform: `rotateX(${i * 45}deg) rotateY(${i * 45}deg)`,
                    boxShadow: '0 0 20px rgba(103,232,249,0.4) inset, 0 0 20px rgba(103,232,249,0.4)'
                  }}
                />
              ))}
              
              {/* Floating Data Nodes inside Hologram */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`node-${i}`}
                  className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"
                  style={{
                    top: '50%', left: '50%',
                    transformStyle: 'preserve-3d'
                  }}
                  animate={{
                    x: [0, Math.cos(i * 45 * Math.PI / 180) * 80, 0],
                    y: [0, Math.sin(i * 45 * Math.PI / 180) * 80, 0],
                    z: [0, Math.sin(i * 90 * Math.PI / 180) * 80, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      );

    case 'conclusion':
      return (
        <div className={containerStyle}>
          {/* Massive Singularity / Convergence */}
          <motion.div 
            className="relative w-96 h-96 flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateZ: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {/* Event Horizon Glow */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-10 bg-[radial-gradient(circle,rgba(37,99,235,0.8)_0%,rgba(147,51,234,0.6)_40%,rgba(16,185,129,0)_80%)] rounded-full mix-blend-screen"
            />

            {/* Spiraling Matter */}
            <svg className="absolute inset-0 w-full h-full overflow-visible">
              {[...Array(36)].map((_, i) => {
                const angle = i * 10;
                return (
                  <motion.path
                    key={i}
                    d={`M 192 192 Q ${192 + Math.cos(angle * Math.PI / 180) * 300} ${192 + Math.sin(angle * Math.PI / 180) * 300} ${192 + Math.cos((angle + 90) * Math.PI / 180) * 400} ${192 + Math.sin((angle + 90) * Math.PI / 180) * 400}`}
                    stroke={`hsl(${200 + i * 2}, 100%, 60%)`}
                    strokeWidth="2"
                    fill="none"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0], strokeDasharray: ["0 100", "100 0", "0 100"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
                  />
                );
              })}
            </svg>

            {/* Central Core */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, type: "spring", bounce: 0.5 }}
              className="relative z-10 w-40 h-40 bg-slate-950 rounded-full border-4 border-white/20 shadow-[0_0_100px_rgba(255,255,255,0.5)] flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_100%)]" />
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Code className="w-20 h-20 text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      );

    case 'smart-tv-architecture':
      return (
        <div className={containerStyle}>
          <div className="flex flex-col items-center justify-center gap-6 relative w-full max-w-md">
            {/* Background glowing lines */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ transform: 'translateZ(-10px)' }}>
              <motion.path 
                d="M 200,50 L 200,350" 
                stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" fill="none"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {[
              { icon: Globe, label: "Internet", color: "text-blue-400", border: "border-blue-500/50" },
              { icon: Cpu, label: "Processor", color: "text-purple-400", border: "border-purple-500/50" },
              { icon: Layers, label: "Operating System", color: "text-cyan-400", border: "border-cyan-500/50" },
              { icon: Smartphone, label: "Applications", color: "text-green-400", border: "border-green-500/50" },
              { icon: Monitor, label: "Display", color: "text-amber-400", border: "border-amber-500/50" }
            ].map((item, i) => (
              <motion.div
                key={`arch-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3, duration: 0.5 }}
                className={`flex items-center gap-4 bg-slate-900/80 backdrop-blur-sm p-4 rounded-xl border ${item.border} w-64 shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10`}
              >
                <item.icon className={`w-8 h-8 ${item.color}`} />
                <span className="font-mono text-sm text-slate-200">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      );

    case 'data-flow-pipeline':
      return (
        <div className={containerStyle}>
          <div className="flex items-center justify-between w-full max-w-lg relative">
            {/* Pipeline SVG */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
              <path d="M 50,200 L 250,200 L 450,200" stroke="#3b82f6" strokeWidth="4" fill="none" strokeDasharray="8 8" opacity="0.3" />
              <motion.path 
                d="M 50,200 L 250,200 L 450,200" 
                stroke="#60a5fa" strokeWidth="4" fill="none" strokeDasharray="8 8"
                animate={{ strokeDashoffset: [0, -32] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* Cloud */}
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}
              className="z-10 bg-slate-800 p-6 rounded-2xl border-2 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              <Cloud className="w-12 h-12 text-blue-400" />
            </motion.div>

            {/* TV Processor */}
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.3 }}
              className="z-10 bg-slate-800 p-6 rounded-2xl border-2 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            >
              <Cpu className="w-12 h-12 text-purple-400" />
            </motion.div>

            {/* Display */}
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.6 }}
              className="z-10 bg-slate-800 p-6 rounded-2xl border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              <Monitor className="w-12 h-12 text-cyan-400" />
            </motion.div>

            {/* Data Packets */}
            <motion.div 
              className="absolute w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,1)] z-20"
              animate={{ x: [50, 250, 450], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ top: 'calc(50% - 8px)' }}
            />
          </div>
        </div>
      );

    case 'hardware-components':
      return (
        <div className={containerStyle}>
          <motion.div 
            initial={{ rotateY: 0, rotateX: 20 }}
            animate={{ rotateY: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-64 h-40"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Display Panel */}
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm border-2 border-cyan-500/50 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.2)]" style={{ transform: 'translateZ(60px)' }}>
              <Monitor className="w-12 h-12 text-cyan-400 opacity-50" />
              <span className="absolute bottom-2 text-[10px] font-mono text-cyan-400">DISPLAY PANEL</span>
            </div>

            {/* Motherboard / Processor */}
            <div className="absolute inset-4 bg-slate-800/80 backdrop-blur-sm border-2 border-purple-500/50 rounded-lg flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.2)]" style={{ transform: 'translateZ(0px)' }}>
              <Cpu className="w-10 h-10 text-purple-400 opacity-50" />
              <span className="absolute bottom-2 text-[10px] font-mono text-purple-400">PROCESSOR & MEMORY</span>
            </div>

            {/* Network / Power */}
            <div className="absolute inset-8 bg-slate-950/80 backdrop-blur-sm border-2 border-blue-500/50 rounded-md flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)]" style={{ transform: 'translateZ(-60px)' }}>
              <Wifi className="w-8 h-8 text-blue-400 opacity-50" />
              <span className="absolute bottom-1 text-[10px] font-mono text-blue-400">NETWORK</span>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: 'translateZ(0px) rotateY(90deg)' }}>
               <line x1="50%" y1="50%" x2="50%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            </svg>
          </motion.div>
        </div>
      );

    case 'software-apps':
      return (
        <div className={containerStyle}>
          <motion.div 
            initial={{ rotateY: -10, rotateX: 5 }}
            animate={{ rotateY: [-10, 10, -10], rotateX: [5, -5, 5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[480px] h-[280px] bg-slate-900 rounded-xl border-4 border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Header */}
            <div className="h-12 border-b border-slate-800 flex items-center px-4 justify-between bg-slate-950/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs font-mono text-slate-400">SMART_OS_v2.0</div>
            </div>
            
            {/* App Grid */}
            <div className="flex-1 p-6 grid grid-cols-4 gap-4 bg-gradient-to-br from-slate-900 to-black">
              {[
                { color: "bg-red-500", icon: Play },
                { color: "bg-blue-500", icon: Globe },
                { color: "bg-green-500", icon: Activity },
                { color: "bg-purple-500", icon: Monitor },
                { color: "bg-cyan-500", icon: Cloud },
                { color: "bg-yellow-500", icon: Zap },
                { color: "bg-pink-500", icon: Shield },
                { color: "bg-orange-500", icon: Database }
              ].map((app, i) => (
                <motion.div
                  key={`app-${i}`}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  className={`${app.color} rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden group cursor-pointer`}
                  style={{ transformStyle: 'preserve-3d', transform: 'translateZ(10px)' }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <app.icon className="w-8 h-8 text-white drop-shadow-md" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      );

    case 'smart-features':
      return (
        <div className={containerStyle}>
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Central AI Core */}
            <motion.div 
              className="absolute z-20 w-32 h-32 bg-slate-900 rounded-full border-4 border-cyan-500/50 shadow-[0_0_50px_rgba(34,211,238,0.4)] flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 50px rgba(34,211,238,0.4)", "0 0 80px rgba(34,211,238,0.8)", "0 0 50px rgba(34,211,238,0.4)"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Activity className="w-16 h-16 text-cyan-400" />
            </motion.div>

            {/* Voice Waves */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`wave-${i}`}
                className="absolute z-10 w-32 h-32 rounded-full border-2 border-cyan-400/30"
                animate={{ scale: [1, 3], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
              />
            ))}

            {/* Orbiting Smart Home Icons */}
            {[
              { icon: Smartphone, color: "text-blue-400", delay: 0 },
              { icon: Wifi, color: "text-green-400", delay: -3.33 },
              { icon: Shield, color: "text-purple-400", delay: -6.66 }
            ].map((item, i) => (
              <motion.div
                key={`orbit-${i}`}
                className="absolute z-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: item.delay }}
              >
                <div style={{ transform: 'translateX(120px)' }}>
                  <motion.div 
                    className="w-12 h-12 bg-slate-800 rounded-full border border-slate-600 flex items-center justify-center shadow-lg"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: item.delay }}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );

    case 'future-tv':
      return (
        <div className={containerStyle}>
          <motion.div 
            initial={{ rotateY: -20, rotateX: 10 }}
            animate={{ rotateY: [-20, 20, -20], rotateX: [10, -10, 10] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[400px] h-[240px] flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Holographic Base */}
            <div className="absolute bottom-0 w-48 h-12 bg-blue-900/40 rounded-full blur-xl" style={{ transform: 'translateZ(-50px) rotateX(70deg)' }} />
            <div className="absolute bottom-4 w-32 h-4 bg-cyan-400/80 rounded-full shadow-[0_0_30px_rgba(34,211,238,1)]" style={{ transform: 'translateZ(0px)' }} />

            {/* Holographic Screen */}
            <motion.div 
              className="absolute bottom-8 w-full h-full border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-sm rounded-lg overflow-hidden"
              style={{ transformOrigin: 'bottom', transform: 'translateZ(0px)' }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {/* Scanlines */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(34,211,238,0.1)_50%)] bg-[length:100%_4px]" />
              
              {/* Floating Data */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="text-cyan-400 font-mono text-xs">8K_QUANTUM_RENDER</div>
                  <Wifi className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="flex justify-center items-center h-full">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Hexagon className="w-24 h-24 text-cyan-300/50" strokeWidth={1} />
                  </motion.div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-32 h-1 bg-cyan-900/50 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-cyan-400" animate={{ width: ["0%", "100%", "0%"] }} transition={{ duration: 3, repeat: Infinity }} />
                  </div>
                  <div className="text-cyan-400 font-mono text-xs">AI_SYNC_ACTIVE</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      );

    case 'conclusion':
      return (
        <div className={containerStyle}>
          <div className="relative w-64 h-64 flex items-center justify-center">
            <motion.div 
              className="absolute inset-0 bg-[radial-gradient(circle,rgba(251,191,36,0.2)_0%,transparent_70%)] rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div
              className="relative z-10 w-32 h-32 bg-slate-900 rounded-2xl border-2 border-amber-500/50 shadow-[0_0_40px_rgba(251,191,36,0.4)] flex items-center justify-center"
              animate={{ rotateY: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Tv className="w-16 h-16 text-amber-400" style={{ transform: 'translateZ(20px)' }} />
              <div className="absolute inset-0 bg-amber-500/10 rounded-2xl" />
            </motion.div>

            {/* Orbiting Elements */}
            {[
              { icon: Globe, color: "text-blue-400", delay: 0 },
              { icon: Cpu, color: "text-purple-400", delay: -3.33 },
              { icon: Sparkles, color: "text-cyan-400", delay: -6.66 }
            ].map((item, i) => (
              <motion.div
                key={`orbit-concl-${i}`}
                className="absolute z-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: item.delay }}
              >
                <div style={{ transform: 'translateX(100px)' }}>
                  <motion.div 
                    className="w-10 h-10 bg-slate-800 rounded-full border border-slate-600 flex items-center justify-center shadow-lg"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: item.delay }}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

function TransitionAnimation() {
  const [isSmart, setIsSmart] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSmart(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-[2000px]">
      <AnimatePresence mode="wait">
        {!isSmart ? (
          <motion.div
            key="old-tv"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute w-80 h-64 bg-stone-800 rounded-3xl border-8 border-stone-700 p-4 flex flex-col shadow-2xl"
          >
            <div className="flex-1 bg-stone-900 rounded-xl flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50" />
              <span className="text-stone-500 font-mono font-bold tracking-widest z-10">STATIC</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="smart-tv"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute w-[400px] h-[240px] bg-slate-900 rounded-xl border-2 border-slate-700 shadow-[0_0_50px_rgba(59,130,246,0.5)] p-1 flex flex-col"
          >
            <div className="flex-1 bg-gradient-to-br from-blue-900 to-black rounded-lg flex items-center justify-center relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-blue-500/20"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="grid grid-cols-4 gap-4 z-10">
                {[...Array(8)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-10 h-10 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
