(function () {
  // Highlight active nav link based on pathname
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if ((path === "" && href.includes("index")) || href === path) a.classList.add("active");
  });

  // Add a simple “copy phone” helper if desired
  const copyBtn = document.querySelector("[data-copy-phone]");
  if (copyBtn) {
    copyBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText("(317) 408-8501");
        copyBtn.textContent = "Copied";
        setTimeout(() => (copyBtn.textContent = "Copy"), 1200);
      } catch {
        // ignore
      }
    });
  }
})();