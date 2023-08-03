/** @type {import('next').NextConfig} */

// GuHub Pages specail
function s(s) {
  s = s?.split('/')[1];
  return s ? '/' + s : undefined;
}

const basePath = s(process.env.GITHUB_REPOSITORY) ?? process.env.NEXTCONFIG_BASEPATH ?? '';
exports.basePath = basePath;

console.log(`*** basePath=${basePath}`);

const nextConfig = {
  output: 'export', // process.env.NEXTCONFIG_OUTPUT
  basePath
};

module.exports = nextConfig;
