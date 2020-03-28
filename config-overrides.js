const {
  override,
  fixBabelImports,
  addLessLoader,
  overrideDevServer
} = require("customize-cra");

export const target = "http://18.162.36.206:8080";

const devServerConfig = () => config => {
  return {
    ...config,
    // 服务开启gzip
    compress: true,
    proxy: {
      "/new": {
        target,
        changeOrigin: true
      },
      "/derive": {
        target,
        changeOrigin: true
      },
      "/sign": {
        target,
        changeOrigin: true
      }
    }
  };
};

module.exports = {
  webpack: override(
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "#FF7023", "@link-color": "#2D2D2D" }
    })
  ),
  devServer: overrideDevServer(devServerConfig())
};
