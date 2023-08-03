/** @type {import('next').NextConfig} */
// const output = process.env.NEXTCONFIG_OUTPUT

// GuHub Pages specail
const githubBasePath = process.env.GITHUB_REPOSITORY?.split('/')[1];

const basePath = githubBasePath ?? process.env.NEXTCONFIG_BASEPATH ?? '';
exports.basePath = basePath;

console.log(`*** basePath=${basePath}`);

const nextConfig = {
  output: 'export',
  basePath
};

module.exports = nextConfig;
