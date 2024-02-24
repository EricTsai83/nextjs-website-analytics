import { Redis } from '@upstash/redis';

export const redis = new Redis({
  url: 'https://apn1-square-spider-34261.upstash.io',
  token: process.env.REDIS_KEY!, // 後面加 ! 可告訴 typescript 這個東西確定存在
});
