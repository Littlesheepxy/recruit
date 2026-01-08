'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CodeWindowProps {
  filename?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function CodeWindow({ 
  filename = 'untitled.tsx', 
  children, 
  className = '',
  delay = 0
}: CodeWindowProps) {
  return (
    <motion.div
      className={`code-window w-full max-w-4xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* 窗口头部 */}
      <div className="code-window-header">
        <div className="window-controls">
          <span className="window-dot close" />
          <span className="window-dot minimize" />
          <span className="window-dot maximize" />
        </div>
        <span className="text-[var(--text-secondary)] text-sm font-mono ml-4">
          {filename}
        </span>
      </div>
      
      {/* 代码内容 */}
      <div className="code-content">
        {children}
      </div>
    </motion.div>
  );
}

