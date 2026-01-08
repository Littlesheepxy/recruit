'use client';

import { motion } from 'framer-motion';
import CodeWindow from '../CodeWindow';
import CodeLine, { Comment, Keyword, String, Variable, Property, Num } from '../CodeLine';

export default function BenefitsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-[var(--bg-secondary)]">
      <div className="w-full max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          工具与自由度
        </motion.h2>
        
        <motion.p
          className="text-[var(--text-secondary)] text-center mb-12 font-mono text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          你可以毫无心理负担地使用 AI
        </motion.p>

        <CodeWindow filename="benefits.ts" delay={0.2}>
          <CodeLine lineNumber={1} delay={0.3}>
            <Keyword>const</Keyword> <Variable>benefits</Variable> = {'{'}
          </CodeLine>
          <CodeLine lineNumber={2} delay={0.4} indent={1}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={3} delay={0.5} indent={1}>
            <Comment>// 每月 AI 编程工具额度</Comment>
          </CodeLine>
          <CodeLine lineNumber={4} delay={0.6} indent={1}>
            <Property>aiToolsBudget</Property>: <String>"$200-400/month"</String>,
          </CodeLine>
          <CodeLine lineNumber={5} delay={0.7} indent={1}>
            <Comment>// Cursor / Claude / Codex / Gemini CLI 等</Comment>
          </CodeLine>
          <CodeLine lineNumber={6} delay={0.8} indent={1}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={7} delay={0.9} indent={1}>
            <Comment>// 任意 AI 产品探索额度</Comment>
          </CodeLine>
          <CodeLine lineNumber={8} delay={1.0} indent={1}>
            <Property>explorationBudget</Property>: <String>"$100/month"</String>,
          </CodeLine>
          <CodeLine lineNumber={9} delay={1.1} indent={1}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={10} delay={1.2} indent={1}>
            <Comment>// 探索新工具，不需要层层申请</Comment>
          </CodeLine>
          <CodeLine lineNumber={11} delay={1.3} indent={1}>
            <Property>approvalRequired</Property>: <Num>false</Num>,
          </CodeLine>
          <CodeLine lineNumber={12} delay={1.4}>
            {'}'};
          </CodeLine>
          <CodeLine lineNumber={13} delay={1.5}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={14} delay={1.6}>
            <Comment>// 探索权，本身就是工作的一部分。</Comment>
          </CodeLine>
        </CodeWindow>

        {/* 额度卡片 */}
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.7 }}
        >
          <motion.div
            className="p-6 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-xl"
            whileHover={{ borderColor: 'var(--accent-green)' }}
          >
            <div className="text-[var(--accent-green)] text-3xl font-bold font-mono mb-2">
              $200-400
            </div>
            <div className="text-[var(--text-secondary)] text-sm font-mono">
              /月 AI 编程工具
            </div>
            <div className="mt-3 text-[var(--text-muted)] text-xs font-mono">
              Cursor / Claude / Codex / Gemini CLI
            </div>
          </motion.div>
          
          <motion.div
            className="p-6 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-xl"
            whileHover={{ borderColor: 'var(--accent-cyan)' }}
          >
            <div className="text-[var(--accent-cyan)] text-3xl font-bold font-mono mb-2">
              $100
            </div>
            <div className="text-[var(--text-secondary)] text-sm font-mono">
              /月 任意 AI 产品
            </div>
            <div className="mt-3 text-[var(--text-muted)] text-xs font-mono">
              无需审批，自由探索
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

