'use client';

import { useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import LoadingTerminal from '@/components/LoadingTerminal';
import {
  HeroSection,
  ChecklistSection,
  CompanySection,
  OwnershipSection,
  EngineeringSection,
  BenefitsSection,
  BuilderSection,
  CriteriaSection,
  CTASection,
} from '@/components/sections';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {/* 终端加载动画 */}
      {!showContent && (
        <LoadingTerminal onComplete={() => setShowContent(true)} />
      )}

      {/* 主内容 */}
      {showContent && (
        <SmoothScroll>
          <main className="relative">
            {/* 导航指示器 */}
            <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
              {[...Array(9)].map((_, i) => (
                <a
                  key={i}
                  href={`#section-${i + 1}`}
                  className="w-2 h-2 rounded-full bg-[var(--border-color)] hover:bg-[var(--accent-cyan)] transition-colors"
                  aria-label={`跳转到第 ${i + 1} 屏`}
                />
              ))}
            </nav>

            {/* 第1屏 - 开场钩子 */}
            <div id="section-1">
              <HeroSection />
            </div>

            {/* 第2屏 - 点名你是谁 */}
            <div id="section-2">
              <ChecklistSection />
            </div>

            {/* 第3屏 - 公司介绍 */}
            <div id="section-3">
              <CompanySection />
            </div>

            {/* 第4屏 - Ownership */}
            <div id="section-4">
              <OwnershipSection />
            </div>

            {/* 第5屏 - 工程方式 */}
            <div id="section-5">
              <EngineeringSection />
            </div>

            {/* 第6屏 - 工具与自由度 */}
            <div id="section-6">
              <BenefitsSection />
            </div>

            {/* 第7屏 - Builder 氛围 */}
            <div id="section-7">
              <BuilderSection />
            </div>

            {/* 第8屏 - 找什么样的人 */}
            <div id="section-8">
              <CriteriaSection />
            </div>

            {/* 第9屏 - CTA */}
            <div id="section-9">
              <CTASection />
            </div>
          </main>
        </SmoothScroll>
      )}
    </>
  );
}
