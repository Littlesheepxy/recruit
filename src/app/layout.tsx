import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "锦秋基金 · AI-first 工程师招聘",
  description: "我们不是在招会写代码的人，而是在找已经在用 AI 重新定义开发方式的人。AI-first 全栈 / Agent 工程师",
  keywords: ["AI", "招聘", "工程师", "Cursor", "Claude", "全栈", "Agent", "锦秋基金"],
  authors: [{ name: "锦秋基金" }],
  openGraph: {
    title: "锦秋基金 · AI-first 工程师招聘",
    description: "我们不是在招会写代码的人，而是在找已经在用 AI 重新定义开发方式的人。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
