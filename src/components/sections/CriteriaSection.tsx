'use client';

import { motion } from 'framer-motion';
import CodeWindow from '../CodeWindow';
import CodeLine, { Comment, Keyword, String, Variable, Property, Num } from '../CodeLine';

export default function CriteriaSection() {
  const notLookingFor = [
    "只等需求的人",
    "把 AI 当玩具的人",
    "只关心写代码、不关心结果的人",
  ];

  const lookingFor = [
    "对系统负责的人",
    "能用 AI 提升确定性的人",
    "享受把复杂问题跑通的人",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-[var(--bg-secondary)]">
      <div className="w-full max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          我们在找什么样的人
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 不找 */}
          <CodeWindow filename="not-looking-for.ts" delay={0.2}>
            <CodeLine lineNumber={1} delay={0.3}>
              <Comment>// 我们不在找：</Comment>
            </CodeLine>
            <CodeLine lineNumber={2} delay={0.4}>
              <span className="opacity-0">.</span>
            </CodeLine>
            <CodeLine lineNumber={3} delay={0.5}>
              <Keyword>const</Keyword> <Variable>exclude</Variable> = [
            </CodeLine>
            {notLookingFor.map((item, index) => (
              <CodeLine key={item} lineNumber={4 + index} delay={0.6 + index * 0.1} indent={1}>
                <span className="text-[var(--syntax-keyword)]">❌</span> <String>"{item}"</String>,
              </CodeLine>
            ))}
            <CodeLine lineNumber={7} delay={0.9}>
              ];
            </CodeLine>
          </CodeWindow>

          {/* 在找 */}
          <CodeWindow filename="looking-for.ts" delay={0.4}>
            <CodeLine lineNumber={1} delay={0.5}>
              <Comment>// 我们在找：</Comment>
            </CodeLine>
            <CodeLine lineNumber={2} delay={0.6}>
              <span className="opacity-0">.</span>
            </CodeLine>
            <CodeLine lineNumber={3} delay={0.7}>
              <Keyword>const</Keyword> <Variable>include</Variable> = [
            </CodeLine>
            {lookingFor.map((item, index) => (
              <CodeLine key={item} lineNumber={4 + index} delay={0.8 + index * 0.1} indent={1}>
                <span className="text-[var(--accent-green)]">✓</span> <String>"{item}"</String>,
              </CodeLine>
            ))}
            <CodeLine lineNumber={7} delay={1.1}>
              ];
            </CodeLine>
          </CodeWindow>
        </div>
      </div>
    </section>
  );
}

