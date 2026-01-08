'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import CodeWindow from '../CodeWindow';
import TypeWriter from '../TypeWriter';

export default function HeroSection() {
  const [line1Done, setLine1Done] = useState(false);
  const [line2Done, setLine2Done] = useState(false);
  const [line3Done, setLine3Done] = useState(false);
  const [line4Done, setLine4Done] = useState(false);
  const [line5Done, setLine5Done] = useState(false);
  const [allDone, setAllDone] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--bg-secondary)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(88,166,255,0.08),transparent_70%)]" />
      
      {/* 网格背景 */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--text-secondary) 1px, transparent 1px),
                           linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center">
        <CodeWindow filename="recruit.tsx" delay={0.2}>
          <div className="code-line flex">
            <span className="line-number">1</span>
            <span className="syntax-comment italic">
              <TypeWriter 
                text="// 我们不是在招&quot;会写代码的人&quot;" 
                delay={300} 
                speed={40}
                onComplete={() => setLine1Done(true)}
                showCursor={!line1Done}
              />
            </span>
          </div>
          
          {line1Done && (
            <div className="code-line flex">
              <span className="line-number">2</span>
              <span className="opacity-0">.</span>
            </div>
          )}
          
          {line1Done && (
            <div className="code-line flex">
              <span className="line-number">3</span>
              <span>
                <span className="syntax-keyword">const</span>{' '}
                <span className="syntax-variable">
                  <TypeWriter 
                    text="target" 
                    delay={0} 
                    speed={60}
                    showCursor={false}
                  />
                </span>
                <TypeWriter 
                  text=" = await find({" 
                  delay={300} 
                  speed={40}
                  onComplete={() => setLine2Done(true)}
                  showCursor={!line2Done}
                />
              </span>
            </div>
          )}
          
          {line2Done && (
            <div className="code-line flex">
              <span className="line-number">4</span>
              <span style={{ marginLeft: '16px' }}>
                <span className="syntax-variable">type</span>
                <span>: </span>
                <span className="syntax-string">
                  <TypeWriter 
                    text='"已经在用 AI 重新定义开发方式的人"' 
                    delay={0} 
                    speed={35}
                    onComplete={() => setLine3Done(true)}
                    showCursor={!line3Done}
                  />
                </span>
              </span>
            </div>
          )}
          
          {line3Done && (
            <div className="code-line flex">
              <span className="line-number">5</span>
              <TypeWriter 
                text="});" 
                delay={0} 
                speed={60}
                onComplete={() => setLine4Done(true)}
                showCursor={!line4Done}
              />
            </div>
          )}
          
          {line4Done && (
            <div className="code-line flex">
              <span className="line-number">6</span>
              <span className="opacity-0">.</span>
            </div>
          )}
          
          {line4Done && (
            <div className="code-line flex">
              <span className="line-number">7</span>
              <span>
                <span className="syntax-function">console</span>
                <span>.</span>
                <span className="syntax-function">
                  <TypeWriter 
                    text="log" 
                    delay={0} 
                    speed={80}
                    showCursor={false}
                  />
                </span>
                <TypeWriter 
                  text="(target);" 
                  delay={200} 
                  speed={50}
                  onComplete={() => {
                    setLine5Done(true);
                    setAllDone(true);
                  }}
                  showCursor={false}
                />
                {line5Done && (
                  <span className="cursor-blink ml-1 text-[var(--accent-green)]">█</span>
                )}
              </span>
            </div>
          )}
        </CodeWindow>

        {/* 角标 */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={allDone ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 border border-[var(--border-color)] rounded-full text-[var(--text-secondary)] text-sm font-mono">
            AI-first 全栈 / Agent 工程师
          </span>
        </motion.div>
      </div>

      {/* 向下滚动提示 - 固定在底部 */}
      <motion.div 
        className="relative z-10 pb-8"
        initial={{ opacity: 0 }}
        animate={allDone ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[var(--text-muted)]"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
