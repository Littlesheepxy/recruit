'use client';

import { motion } from 'framer-motion';
import CodeWindow from '../CodeWindow';
import CodeLine, { Comment, Keyword, String, Variable, Property, Func, Num } from '../CodeLine';

export default function EngineeringSection() {
  const highlights = [
    { text: "AI 是默认协作者", color: "var(--accent-cyan)" },
    { text: "内部 AI Coding 协作框架", color: "var(--accent-purple)" },
    { text: "Agent / Prompt 规范", color: "var(--accent-green)" },
    { text: "AI + Code Review", color: "var(--accent-orange)" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      {/* 高亮背景 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(163,113,247,0.1),transparent_60%)]" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          我们的工程方式
        </motion.h2>
        
        <motion.p
          className="text-[var(--text-secondary)] text-center mb-12 font-mono text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          不是"鼓励用 AI"，而是<span className="text-[var(--accent-cyan)]">系统性地用 AI</span>。
        </motion.p>

        <CodeWindow filename="engineering.config.ts" delay={0.2}>
          <CodeLine lineNumber={1} delay={0.3}>
            <Keyword>export const</Keyword> <Variable>engineeringConfig</Variable> = {'{'}
          </CodeLine>
          <CodeLine lineNumber={2} delay={0.4} indent={1}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={3} delay={0.5} indent={1}>
            <Comment>// AI 是默认协作者</Comment>
          </CodeLine>
          <CodeLine lineNumber={4} delay={0.6} indent={1}>
            <Property>aiCollaboration</Property>: <String>"default"</String>,
          </CodeLine>
          <CodeLine lineNumber={5} delay={0.7} indent={1}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={6} delay={0.8} indent={1}>
            <Comment>// 成熟的内部框架</Comment>
          </CodeLine>
          <CodeLine lineNumber={7} delay={0.9} indent={1}>
            <Property>framework</Property>: {'{'}
          </CodeLine>
          <CodeLine lineNumber={8} delay={1.0} indent={2}>
            <Property>agentSpec</Property>: <Num>true</Num>,
          </CodeLine>
          <CodeLine lineNumber={9} delay={1.1} indent={2}>
            <Property>promptStandard</Property>: <Num>true</Num>,
          </CodeLine>
          <CodeLine lineNumber={10} delay={1.2} indent={2}>
            <Property>aiCodeReview</Property>: <Num>true</Num>,
          </CodeLine>
          <CodeLine lineNumber={11} delay={1.3} indent={1}>
            {'},'}
          </CodeLine>
          <CodeLine lineNumber={12} delay={1.4} indent={1}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={13} delay={1.5} indent={1}>
            <Comment>// 人做判断，AI 负责加速</Comment>
          </CodeLine>
          <CodeLine lineNumber={14} delay={1.6} indent={1}>
            <Property>philosophy</Property>: <String>"Human judges, AI accelerates"</String>
          </CodeLine>
          <CodeLine lineNumber={15} delay={1.7}>
            {'}'};
          </CodeLine>
        </CodeWindow>

        {/* 高亮标签 */}
        <motion.div 
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.text}
              className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.9 + index * 0.1 }}
              whileHover={{ 
                borderColor: item.color,
                boxShadow: `0 0 20px ${item.color}20`
              }}
            >
              <span 
                className="font-mono text-sm"
                style={{ color: item.color }}
              >
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

