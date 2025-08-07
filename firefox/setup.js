// PERFORMANCE - SSD optimized
user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.memory.capacity", 512000); // 512MB RAM cache
user_pref("browser.sessionstore.interval", 60000); // Save session every 60s

// NETWORK - Faster loading
user_pref("network.http.pipelining", true);
user_pref("network.http.pipelining.maxrequests", 8);
user_pref("network.http.max-connections", 96);
user_pref("network.http.max-persistent-connections-per-server", 6);
user_pref("network.dns.disablePrefetch", false); // Keep prefetch for dev

// GPU ACCELERATION
user_pref("layers.acceleration.force-enabled", true);
user_pref("gfx.webrender.all", true);
user_pref("media.ffmpeg.vaapi.enabled", true); // Linux hardware decode

// DEV TOOLS
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.debugger.remote-enabled", true);
user_pref("devtools.theme", "dark");
user_pref("devtools.toolbox.host", "bottom"); // Docked bottom

// PRIVACY (équilibré)
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("dom.security.https_only_mode", true);
user_pref("privacy.donottrackheader.enabled", true);

// Disable telemetry
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("datareporting.healthreport.uploadEnabled", false);

// CONTAINERS AUTO
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

// UI TWEAKS
user_pref("browser.tabs.tabMinWidth", 120); // Larger tabs
user_pref("browser.urlbar.suggest.searches", false); // No search suggestions in URL bar
user_pref("browser.newtabpage.activity-stream.enabled", false); // Clean new tab
user_pref("browser.compactmode.show", true); // Compact UI option

// SMOOTH SCROLLING (laptop-friendly)
user_pref("general.smoothScroll", true);
user_pref("mousewheel.default.delta_multiplier_y", 200);
