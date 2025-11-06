/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  
  reactCompiler: true,
  images: {
    domains: [
      'beatai.io', 
      'beatbind.io', 
      'beatbuy.io', 
      'openai.com', 
      'gemini.google.com', 
      'www.google.com', 
      'qwenlm.github.io',
      'grok.com',
      'claude.ai',
      'www.deepseek.com',
      'chatgpt.com',
    ],
  },
};

export default nextConfig;
