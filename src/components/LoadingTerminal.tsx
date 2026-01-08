'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingTerminalProps {
  onComplete: () => void;
}

const INITIAL_LINES = [
  { text: '$ ./recruit.sh', delay: 300 },
  { text: '', delay: 200 },
  { text: '✓ Initializing AI-first environment...', delay: 600, color: 'green' },
  { text: '✓ Loading Cursor/Claude protocols...', delay: 500, color: 'green' },
  { text: '✓ Checking engineering mindset...', delay: 500, color: 'green' },
  { text: '', delay: 300 },
  { text: '⚠️  This position requires:', delay: 400, color: 'yellow' },
  { text: '   - AI as default collaborator', delay: 200, color: 'muted' },
  { text: '   - Ownership mentality', delay: 200, color: 'muted' },
  { text: '   - System-level thinking', delay: 200, color: 'muted' },
  { text: '', delay: 400 },
];

const AFTER_CONFIRM_LINES = [
  { text: '', delay: 100 },
  { text: '✓ Access granted.', delay: 400, color: 'green' },
  { text: '✓ Building recruit page...', delay: 500, color: 'green' },
  { text: '✓ Ready.', delay: 400, color: 'green' },
  { text: '', delay: 300 },
  { text: '$ Welcome to 锦秋基金 AI产品团队', delay: 500, color: 'cyan' },
  { text: '', delay: 800 },
];

export default function LoadingTerminal({ onComplete }: LoadingTerminalProps) {
  const [lines, setLines] = useState<{ text: string; color?: string }[]>([]);
  const [showPrompt, setShowPrompt] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // 逐行显示初始内容
  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const showNextLine = () => {
      if (currentIndex < INITIAL_LINES.length) {
        const line = INITIAL_LINES[currentIndex];
        setLines(prev => [...prev, { text: line.text, color: line.color }]);
        currentIndex++;
        timeoutId = setTimeout(showNextLine, line.delay);
      } else {
        setShowPrompt(true);
      }
    };

    timeoutId = setTimeout(showNextLine, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  // 处理确认
  const handleConfirm = useCallback((isYes: boolean) => {
    if (confirmed) return;
    
    setUserInput(isYes ? 'y' : 'n');
    setConfirmed(true);
    
    if (isYes) {
      let currentIndex = 0;
      const showAfterLine = () => {
        if (currentIndex < AFTER_CONFIRM_LINES.length) {
          const line = AFTER_CONFIRM_LINES[currentIndex];
          setLines(prev => [...prev, { text: line.text, color: line.color }]);
          currentIndex++;
          setTimeout(showAfterLine, line.delay);
        } else {
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 600);
          }, 300);
        }
      };
      
      setTimeout(showAfterLine, 200);
    } else {
      setLines(prev => [...prev, { text: '', color: undefined }]);
      setTimeout(() => {
        setLines(prev => [...prev, { text: 'See you next time. 👋', color: 'muted' }]);
        setTimeout(() => {
          setLines(prev => [...prev, { text: '', color: undefined }]);
          setLines(prev => [...prev, { text: '...just kidding, come on in anyway :)', color: 'green' }]);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 600);
          }, 1000);
        }, 800);
      }, 200);
    }
  }, [confirmed, onComplete]);

  // 处理键盘输入（桌面端）
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!showPrompt || confirmed) return;

    if (e.key === 'y' || e.key === 'Y' || e.key === 'Enter') {
      handleConfirm(true);
    } else if (e.key === 'n' || e.key === 'N') {
      handleConfirm(false);
    }
  }, [showPrompt, confirmed, handleConfirm]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // 处理输入框变化（移动端）
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // 检测输入的最后一个字符
    const lastChar = value.slice(-1).toLowerCase();
    if (lastChar === 'y') {
      handleConfirm(true);
    } else if (lastChar === 'n') {
      handleConfirm(false);
    }
  };

  // 点击终端区域聚焦输入框
  const handleTerminalClick = () => {
    if (showPrompt && !confirmed && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const getColorClass = (color?: string) => {
    switch (color) {
      case 'green': return 'text-[var(--accent-green)]';
      case 'yellow': return 'text-[var(--accent-orange)]';
      case 'cyan': return 'text-[var(--accent-cyan)]';
      case 'muted': return 'text-[var(--text-muted)]';
      default: return 'text-[var(--text-primary)]';
    }
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 bg-[var(--bg-primary)] flex items-center justify-center p-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          onClick={handleTerminalClick}
        >
          <motion.div
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* 终端窗口 */}
            <div className="code-window cursor-text">
              <div className="code-window-header">
                <div className="window-controls">
                  <span className="window-dot close" />
                  <span className="window-dot minimize" />
                  <span className="window-dot maximize" />
                </div>
                <span className="text-[var(--text-secondary)] text-sm font-mono ml-4">
                  terminal
                </span>
              </div>
              
              <div className="code-content min-h-[300px] font-mono text-sm leading-relaxed">
                {/* 已显示的行 */}
                {lines.map((line, index) => (
                  <div key={index} className={getColorClass(line.color)}>
                    {line.text || '\u00A0'}
                  </div>
                ))}
                
                {/* 输入提示 */}
                {showPrompt && !confirmed && (
                  <div className="flex items-center">
                    <span className="text-[var(--text-primary)]">Continue? [y/n] </span>
                    <span className="text-[var(--accent-green)]">{inputValue}</span>
                    <span className="cursor-blink text-[var(--accent-green)]">█</span>
                  </div>
                )}
                
                {/* 用户输入后显示 */}
                {confirmed && userInput && (
                  <div className="text-[var(--text-primary)]">
                    Continue? [y/n] {userInput}
                  </div>
                )}
              </div>
            </div>

            {/* 隐藏的输入框 */}
            {showPrompt && !confirmed && (
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="absolute -top-[9999px] left-0 opacity-0"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            )}

            {/* 提示文字 */}
            {showPrompt && !confirmed && (
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* 桌面端提示 */}
                <p className="text-[var(--text-muted)] text-sm font-mono hidden sm:block">
                  Press <span className="text-[var(--accent-green)]">y</span> or <span className="text-[var(--accent-green)]">Enter</span> to continue
                </p>
                {/* 移动端提示 */}
                <p className="text-[var(--text-muted)] text-sm font-mono sm:hidden">
                  Tap here, then type <span className="text-[var(--accent-green)]">y</span> to continue
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
