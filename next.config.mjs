/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // to tell compiler to treat as internal package and to convert .ts file to .js file internally
  // you can skip this by adding "build":"vite build" but there is speed benefits to have as internal package
  // if we add this client to npm registry we dont need to add transpilePackages or "ui":"*"
  // after adding this two in next.config.ts and package.json you do npm install
  transpilePackages:["ui","db"]
};

export default nextConfig;
