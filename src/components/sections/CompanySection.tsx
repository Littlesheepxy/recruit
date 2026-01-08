'use client';

import { motion } from 'framer-motion';
import CodeWindow from '../CodeWindow';
import CodeLine, { Comment, Keyword, String, Variable, Property } from '../CodeLine';

export default function CompanySection() {
  const tags = [ "AI 应用", "具身智能","智能硬件","算力"];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-5xl mx-auto">
        <CodeWindow filename="company.json" delay={0.1}>
          <CodeLine lineNumber={1} delay={0.2}>
            {'{'}
          </CodeLine>
          <CodeLine lineNumber={2} delay={0.3} indent={1}>
            <Property>"name"</Property>: <String>"锦秋基金"</String>,
          </CodeLine>
          <CodeLine lineNumber={3} delay={0.4} indent={1}>
            <Property>"type"</Property>: <String>"AI-native 投资机构"</String>,
          </CodeLine>
          <CodeLine lineNumber={4} delay={0.5} indent={1}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={5} delay={0.6} indent={1}>
            <Comment>// 我们不仅投资 AI，</Comment>
          </CodeLine>
          <CodeLine lineNumber={6} delay={0.7} indent={1}>
            <Comment>// 也在内部和被投企业中，</Comment>
          </CodeLine>
          <CodeLine lineNumber={7} delay={0.8} indent={1}>
            <Comment>// 真正用 AI 构建系统与产品。</Comment>
          </CodeLine>
          <CodeLine lineNumber={8} delay={0.9} indent={1}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={9} delay={1.0} indent={1}>
            <Property>"focus"</Property>: [
          </CodeLine>
          <CodeLine lineNumber={10} delay={1.1} indent={2}>
            , <String>"AI 应用"</String>, <String>"具身智能"</String><String>"智能硬件"</String>, <String>"算力"</String>
          </CodeLine>
          <CodeLine lineNumber={11} delay={1.2} indent={1}>
            ]
          </CodeLine>
          <CodeLine lineNumber={12} delay={1.3}>
            {'}'}
          </CodeLine>
        </CodeWindow>

        {/* 标签 */}
        <motion.div 
          className="mt-12 flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
        >
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              className="px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg text-[var(--text-secondary)] text-sm font-mono"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 + index * 0.1 }}
              whileHover={{ 
                borderColor: 'var(--accent-cyan)',
                color: 'var(--text-primary)'
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

