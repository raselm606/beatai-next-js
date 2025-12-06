/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  
  reactCompiler: true,
  images: { 

    remotePatterns: [
    { protocol: "https", hostname: "beatai.io" },
    { protocol: "https", hostname: "beatbind.io" },
    { protocol: "https", hostname: "beatbuy.io" },
    { protocol: "https", hostname: "openai.com" },
    { protocol: "https", hostname: "gemini.google.com" },
    { protocol: "https", hostname: "www.google.com" },
    { protocol: "https", hostname: "qwenlm.github.io" },
    { protocol: "https", hostname: "grok.com" },
    { protocol: "https", hostname: "claude.ai" },
    { protocol: "https", hostname: "www.deepseek.com" },
    { protocol: "https", hostname: "chatgpt.com" },
  ],
  },
};

export default nextConfig;
