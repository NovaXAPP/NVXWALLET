    // src/index.ts
(() => {
  console.log("[NVXWallet] loaded:", new Date().toISOString());
  (window as any).NVXWallet = {
    render(opts: any = {}) {
      const mount =
        typeof opts.mount === "string"
          ? (document.querySelector(opts.mount) as HTMLElement)
          : (opts.mount as HTMLElement) || document.body;

      const div = document.createElement("div");
      div.textContent = "NVX Wallet ready (smoke test)";
      div.style.cssText =
        "padding:8px 10px;border-radius:8px;background:#222a3b;color:#eaf2ff;font:500 13px/1.2 Inter,system-ui,Arial";
      mount.appendChild(div);

      return { destroy() { div.remove(); } };
    }
  };
})();
export {};
