// vite.config.cjs
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "NVXWallet",
      fileName: () => "nvx-wallet",
      formats: ["iife"]
    },
    rollupOptions: {
      output: { extend: true, inlineDynamicImports: true },
      treeshake: false
    },
    minify: false,
    sourcemap: true,
    target: "es2019",
    emptyOutDir: true
  }
});
