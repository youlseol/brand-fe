/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  ignoredRouteFiles: ["**/.*"],
  publicPath: "/build/",
  cacheDirectory: "./node_modules/.cache/remix",
  serverBuildPath: "build/index.js",
  serverBuildTarget: "node-cjs"
};
