import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

const VIEW_KEY = 'recruit_page_views';

export async function GET() {
  try {
    // 检查是否配置了 KV
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      // 开发环境没有 KV，返回模拟数据
      return NextResponse.json({ 
        views: Math.floor(Math.random() * 100) + 2800,
        mock: true 
      });
    }

    // 原子性递增并获取新值
    const views = await kv.incr(VIEW_KEY);
    
    return NextResponse.json({ views });
  } catch (error) {
    console.error('KV Error:', error);
    // 出错时返回模拟数据
    return NextResponse.json({ 
      views: 2847,
      error: true 
    });
  }
}

// 可选：获取当前值而不递增
export async function POST() {
  try {
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      return NextResponse.json({ views: 2847, mock: true });
    }

    const views = await kv.get<number>(VIEW_KEY) || 0;
    return NextResponse.json({ views });
  } catch (error) {
    return NextResponse.json({ views: 2847, error: true });
  }
}

