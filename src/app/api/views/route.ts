import { createClient } from 'redis';
import { NextResponse } from 'next/server';

const VIEW_KEY = 'recruit_page_views';

// 创建 Redis 客户端
const getRedisClient = async () => {
  const client = createClient({
    url: process.env.REDIS_URL
  });
  
  client.on('error', (err) => console.error('Redis Client Error', err));
  
  if (!client.isOpen) {
    await client.connect();
  }
  
  return client;
};

export async function GET() {
  try {
    // 检查是否配置了 Redis
    if (!process.env.REDIS_URL) {
      // 开发环境没有 Redis，返回模拟数据
      return NextResponse.json({ 
        views: Math.floor(Math.random() * 100) + 2800,
        mock: true 
      });
    }

    const redis = await getRedisClient();
    
    // 原子性递增并获取新值
    const views = await redis.incr(VIEW_KEY);
    
    return NextResponse.json({ views });
  } catch (error) {
    console.error('Redis Error:', error);
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
    if (!process.env.REDIS_URL) {
      return NextResponse.json({ views: 2847, mock: true });
    }

    const redis = await getRedisClient();
    const views = await redis.get(VIEW_KEY);
    
    return NextResponse.json({ views: parseInt(views || '0') });
  } catch (error) {
    return NextResponse.json({ views: 2847, error: true });
  }
}
