/** @type {import('next').NextConfig} */
// const output = process.env.NEXTCONFIG_OUTPUT

const nextConfig = {
  output: 'export',
  basePath: process.env.NEXTCONFIG_BASEPATH
};

module.exports = nextConfig;
