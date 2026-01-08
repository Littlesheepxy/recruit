'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Check, Copy } from 'lucide-react';
import CodeWindow from '../CodeWindow';
import CodeLine, { Comment, Keyword, String, Variable, Func, Property } from '../CodeLine';
import WechatIcon from '../icons/WechatIcon';
import ViewCounter from '../ViewCounter';

// 配置微信号
const WECHAT_ID = 'xiaoyyes';

export default function CTASection() {
  const [copied, setCopied] = useState(false);

  const handleWechatClick = async () => {
    try {
      await navigator.clipboard.writeText(WECHAT_ID);
      setCopied(true);
      
      // 尝试打开微信（移动端有效）
      setTimeout(() => {
        window.location.href = 'weixin://';
      }, 500);
      
      // 3秒后重置复制状态
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(88,166,255,0.08),transparent_70%)]" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <CodeWindow filename="apply.ts" delay={0.2}>
          <CodeLine lineNumber={1} delay={0.3}>
            <Comment>// 如果你已经在用 AI 重新定义"怎么写代码"，</Comment>
          </CodeLine>
          <CodeLine lineNumber={2} delay={0.4}>
            <Comment>// 并希望独立把一个系统或产品做出来，</Comment>
          </CodeLine>
          <CodeLine lineNumber={3} delay={0.5}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={4} delay={0.6}>
            <Comment>// 我们很愿意认识你。</Comment>
          </CodeLine>
          <CodeLine lineNumber={5} delay={0.7}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={6} delay={0.8}>
            <Keyword>const</Keyword> <Variable>contact</Variable> = {'{'}
          </CodeLine>
          <CodeLine lineNumber={7} delay={0.9} indent={1}>
            <Property>wechat</Property>: <String>"{WECHAT_ID}"</String>
          </CodeLine>
          <CodeLine lineNumber={8} delay={1.0}>
            {'}'};
          </CodeLine>
          <CodeLine lineNumber={9} delay={1.1}>
            <span className="opacity-0">.</span>
          </CodeLine>
          <CodeLine lineNumber={10} delay={1.2}>
            <Keyword>await</Keyword> <Func>connect</Func>(<Variable>contact</Variable>);
            <span className="cursor-blink ml-1 text-[var(--accent-green)]">█</span>
          </CodeLine>
        </CodeWindow>

        {/* 联系方式按钮 - 只保留微信 */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={handleWechatClick}
            className="group flex items-center gap-3 px-10 py-5 bg-[#07C160] text-white font-mono font-semibold rounded-xl text-lg relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {copied ? (
              <>
                <Check size={24} />
                <span>已复制，正在跳转微信...</span>
              </>
            ) : (
              <>
                <WechatIcon size={24} />
                <span>添加微信：{WECHAT_ID}</span>
                <Copy size={16} className="opacity-60" />
              </>
            )}
          </motion.button>
        </motion.div>

        {/* 备注提示 */}
        <motion.p
          className="mt-6 text-center text-[var(--text-secondary)] text-sm font-mono max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.7 }}
        >
          也欢迎对 AI 产品感兴趣的朋友加我聊聊
          <br />
          <span className="text-[var(--text-muted)]">
            请备注来意，求职 / 建联 分开哦 :)
          </span>
        </motion.p>

        {/* 查看计数器 */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.9 }}
        >
          <ViewCounter />
        </motion.div>

        {/* 底部信息 */}
        <motion.div
          className="mt-16 text-center text-[var(--text-muted)] text-sm font-mono flex items-center justify-center gap-2 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.0 }}
        >
          <span>made with</span>
          <Heart size={14} className="text-red-500 fill-red-500" />
          <span>by 锦秋基金 AI产品团队</span>
          <span className="hidden sm:inline">·</span>
          <span>设计及开发用时 10 分钟</span>
        </motion.div>
      </div>
    </section>
  );
}
