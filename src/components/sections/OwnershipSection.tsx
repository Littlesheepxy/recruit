'use client';

import { motion } from 'framer-motion';
import CodeWindow from '../CodeWindow';
import CodeLine, { Comment, Keyword, String, Variable, Func } from '../CodeLine';

export default function OwnershipSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-[var(--bg-secondary)]">
      <div className="w-full max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[var(--accent-orange)]">Ownership</span>
        </motion.h2>
        
        <motion.p
          className="text-[var(--text-secondary)] text-center mb-12 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          你来这里，不会被拆成零碎任务。
        </motion.p>

        <CodeWindow filename="your-role.ts" delay={0.2}>
          <CodeLine lineNumber={1} delay={0.3}>
            <Comment>// Ownership - 对结果负责，不是对任务负责</Comment>
          </CodeLine>
          <CodeLine lineNumber={2} delay={0.4}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={3} delay={0.5}>
            <Keyword>async function</Keyword> <Func>yourRole</Func>() {'{'}
          </CodeLine>
          <CodeLine lineNumber={4} delay={0.6} indent={1}>
            <Keyword>const</Keyword> <Variable>module</Variable> = <Keyword>await</Keyword> <Func>design</Func>();
          </CodeLine>
          <CodeLine lineNumber={5} delay={0.7} indent={1}>
            <Keyword>const</Keyword> <Variable>product</Variable> = <Keyword>await</Keyword> <Func>develop</Func>(<Variable>module</Variable>);
          </CodeLine>
          <CodeLine lineNumber={6} delay={0.8} indent={1}>
            <Keyword>await</Keyword> <Func>deploy</Func>(<Variable>product</Variable>);
          </CodeLine>
          <CodeLine lineNumber={7} delay={0.9} indent={1}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={8} delay={1.0} indent={1}>
            <Keyword>return</Keyword> <Variable>result</Variable>;
          </CodeLine>
          <CodeLine lineNumber={9} delay={1.1}>
            {'}'}
          </CodeLine>
          <CodeLine lineNumber={10} delay={1.2}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={11} delay={1.3}>
            <Comment>// 独立负责：设计 → 开发 → 上线</Comment>
          </CodeLine>
          <CodeLine lineNumber={12} delay={1.4}>
            <Comment>// 完整模块或产品，由你 own</Comment>
          </CodeLine>
        </CodeWindow>
      </div>
    </section>
  );
}

