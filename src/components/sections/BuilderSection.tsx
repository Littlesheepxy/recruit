'use client';

import { motion } from 'framer-motion';
import { Bot, Zap, Wrench, Lightbulb } from 'lucide-react';
import CodeWindow from '../CodeWindow';
import CodeLine, { Comment, Keyword, String, Variable, Property } from '../CodeLine';

export default function BuilderSection() {
  const techs = [
    { icon: Bot, text: "Agent × 真实世界", color: "var(--accent-cyan)" },
    { icon: Zap, text: "自动化实验", color: "var(--accent-orange)" },
    { icon: Wrench, text: "3D 打印", color: "var(--accent-purple)" },
    { icon: Lightbulb, text: "想法 → 现实", color: "var(--accent-green)" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          前沿技术 & Builder 氛围
        </motion.h2>
        
        <motion.p
          className="text-[var(--text-secondary)] text-center mb-12 font-mono text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          我们关心的，不只是软件。
        </motion.p>

        <CodeWindow filename="builder.playground.ts" delay={0.2}>
          <CodeLine lineNumber={1} delay={0.3}>
            <Comment>// 把「想法」真的做出来</Comment>
          </CodeLine>
          <CodeLine lineNumber={2} delay={0.4}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={3} delay={0.5}>
            <Keyword>const</Keyword> <Variable>playground</Variable> = {'{'}
          </CodeLine>
          <CodeLine lineNumber={4} delay={0.6} indent={1}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={5} delay={0.7} indent={1}>
            <Property>agent</Property>: <String>"与真实世界系统交互"</String>,
          </CodeLine>
          <CodeLine lineNumber={6} delay={0.8} indent={1}>
            <Property>automation</Property>: <String>"自动化实验"</String>,
          </CodeLine>
          <CodeLine lineNumber={7} delay={0.9} indent={1}>
            <Property>hardware</Property>: <String>"3D 打印"</String>,
          </CodeLine>
          <CodeLine lineNumber={8} delay={1.0} indent={1}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={9} delay={1.1} indent={1}>
            <Property>philosophy</Property>: <String>"Build, not just code"</String>
          </CodeLine>
          <CodeLine lineNumber={10} delay={1.2}>
            {'}'};
          </CodeLine>
          <CodeLine lineNumber={11} delay={1.3}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={12} delay={1.4}>
            <Comment>// 如果你是 Builder，你会懂这意味着什么。</Comment>
          </CodeLine>
        </CodeWindow>

        {/* 技术卡片 */}
        <motion.div 
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          {techs.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.text}
                className="p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl text-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6 + index * 0.1 }}
                whileHover={{ 
                  y: -4,
                  borderColor: tech.color,
                  boxShadow: `0 10px 40px ${tech.color}20`
                }}
              >
                <div 
                  className="flex justify-center mb-3 group-hover:scale-110 transition-transform"
                  style={{ color: tech.color }}
                >
                  <IconComponent size={32} />
                </div>
                <div className="text-[var(--text-secondary)] text-sm font-mono">
                  {tech.text}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
