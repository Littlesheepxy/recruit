'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CodeLineProps {
  lineNumber?: number;
  children: ReactNode;
  delay?: number;
  indent?: number;
}

export default function CodeLine({ 
  lineNumber, 
  children, 
  delay = 0,
  indent = 0
}: CodeLineProps) {
  return (
    <motion.div
      className="flex"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
    >
      {lineNumber !== undefined && (
        <span className="line-number">{lineNumber}</span>
      )}
      <span style={{ marginLeft: `${indent * 16}px` }}>{children}</span>
    </motion.div>
  );
}

// 语法高亮辅助组件
export function Keyword({ children }: { children: ReactNode }) {
  return <span className="syntax-keyword">{children}</span>;
}

export function String({ children }: { children: ReactNode }) {
  return <span className="syntax-string">{children}</span>;
}

export function Func({ children }: { children: ReactNode }) {
  return <span className="syntax-function">{children}</span>;
}

export function Variable({ children }: { children: ReactNode }) {
  return <span className="syntax-variable">{children}</span>;
}

export function Comment({ children }: { children: ReactNode }) {
  return <span className="syntax-comment">{children}</span>;
}

export function Num({ children }: { children: ReactNode }) {
  return <span className="syntax-number">{children}</span>;
}

export function Property({ children }: { children: ReactNode }) {
  return <span className="syntax-property">{children}</span>;
}

