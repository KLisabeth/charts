import { defineConfig } from "@vue/cli-service";
export default defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/charts/" : "/",
  transpileDependencies: true,
  devServer: {
    proxy: "http://localhost:4000",
    overlay: {
      warnings: true,
      errors: true,
    },
  },
});
