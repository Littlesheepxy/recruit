'use client';

import { motion } from 'framer-motion';
import CodeWindow from '../CodeWindow';
import CodeLine, { Comment, Keyword, String, Variable, Property, Func } from '../CodeLine';

export default function ChecklistSection() {
  const checks = [
    "重度使用 Cursor / Claude / Codex / Gemini CLI",
    "把 AI 当成默认协作者，而不是辅助工具",
    "关心「系统怎么跑起来」，而不是「我写了多少行代码」",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-[var(--bg-secondary)]">
      <div className="w-full max-w-5xl mx-auto">
        <motion.p
          className="text-[var(--text-secondary)] text-lg mb-8 font-mono"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Comment>// 如果你已经在日常开发中...</Comment>
        </motion.p>

        <CodeWindow filename="you.config.ts" delay={0.1}>
          <CodeLine lineNumber={1} delay={0.2}>
            <Keyword>const</Keyword> <Variable>you</Variable> = {'{'}
          </CodeLine>
          <CodeLine lineNumber={2} delay={0.3} indent={1}>
            <Property>tools</Property>: [
          </CodeLine>
          <CodeLine lineNumber={3} delay={0.4} indent={2}>
            <String>"Cursor"</String>, <String>"Claude"</String>, <String>"Codex"</String>, <String>"Gemini CLI"</String>
          </CodeLine>
          <CodeLine lineNumber={4} delay={0.5} indent={1}>
            ],
          </CodeLine>
          <CodeLine lineNumber={5} delay={0.6} indent={1}>
            <Property>mindset</Property>: <String>"AI 是默认协作者"</String>,
          </CodeLine>
          <CodeLine lineNumber={6} delay={0.7} indent={1}>
            <Property>focus</Property>: <String>"系统怎么跑起来"</String> <Comment>// 不是写了多少行</Comment>
          </CodeLine>
          <CodeLine lineNumber={7} delay={0.8}>
            {'}'};
          </CodeLine>
          <CodeLine lineNumber={8} delay={0.9}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={9} delay={1.0}>
            <Keyword>if</Keyword> (<Func>match</Func>(<Variable>you</Variable>)) {'{'}
          </CodeLine>
          <CodeLine lineNumber={10} delay={1.1} indent={1}>
            <Func>continue</Func>(); <Comment>// 往下看 ↓</Comment>
          </CodeLine>
          <CodeLine lineNumber={11} delay={1.2}>
            {'}'}
          </CodeLine>
        </CodeWindow>

        {/* 复选框视觉化 */}
        <motion.div 
          className="mt-12 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          {checks.map((check, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 text-[var(--text-secondary)]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 + index * 0.15 }}
            >
              <span className="text-[var(--accent-green)] text-xl">✓</span>
              <span className="font-mono text-sm">{check}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

