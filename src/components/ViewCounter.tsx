'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';

interface ViewCounterProps {
  className?: string;
}

export default function ViewCounter({ className = '' }: ViewCounterProps) {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const hasIncremented = useRef(false);

  useEffect(() => {
    // 确保只递增一次
    if (hasIncremented.current) return;
    hasIncremented.current = true;

    const fetchViews = async () => {
      try {
        const res = await fetch('/api/views');
        const data = await res.json();
        setCount(data.views);
      } catch (error) {
        console.error('获取浏览数失败:', error);
        setCount(2847); // 失败时显示默认值
      } finally {
        setIsLoading(false);
      }
    };

    fetchViews();
  }, []);

  // 格式化数字，添加千位分隔符
  const formatNumber = (num: number) => {
    return num.toLocaleString('zh-CN');
  };

  return (
    <motion.div 
      className={`flex items-center gap-2 text-[var(--text-muted)] font-mono text-sm ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Eye size={16} />
      <span>已有</span>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.span
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[var(--accent-cyan)] font-semibold min-w-[60px] text-center"
          >
            ...
          </motion.span>
        ) : (
          <motion.span
            key="count"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-[var(--accent-cyan)] font-semibold min-w-[60px] text-center"
          >
            {count !== null ? formatNumber(count) : '---'}
          </motion.span>
        )}
      </AnimatePresence>
      <span>人浏览</span>
    </motion.div>
  );
}
