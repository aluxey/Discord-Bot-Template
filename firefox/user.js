// ===== Vie privée & sécurité (équilibré) =====
user_pref('dom.security.https_only_mode', true);
user_pref('privacy.donottrackheader.enabled', true);
user_pref('privacy.globalprivacycontrol.enabled', true);
user_pref('privacy.query_stripping.enabled', true);
user_pref('privacy.trackingprotection.enabled', true);
user_pref('privacy.trackingprotection.emailtracking.enabled', true);
user_pref('privacy.partition.network_state', true);
user_pref('network.cookie.cookieBehavior', 1); // bloque cross-site trackers
user_pref('browser.safebrowsing.malware.enabled', true);
user_pref('browser.safebrowsing.phishing.enabled', true);

// WebRTC: si fuite IP problématique, laisse false ; sinon true pour appels web
user_pref('media.peerconnection.enabled', false);

// DoH + HTTP/3 + TLS post-quantum (si supporté)
user_pref('network.trr.mode', 2);
user_pref('network.trr.uri', 'https://mozilla.cloudflare-dns.com/dns-query');
user_pref('network.http.http3.enabled', true);
user_pref('security.tls.enable_kyber', true);

// ===== Télémétrie =====
user_pref('toolkit.telemetry.enabled', false);
user_pref('datareporting.healthreport.uploadEnabled', false);

// ===== Interface =====
user_pref('browser.compactmode.show', true);
user_pref('browser.uidensity', 1);
user_pref('toolkit.legacyUserProfileCustomizations.stylesheets', true);
user_pref('browser.tabs.drawInTitlebar', true);

// Suggestions URL bar (plus propres)
user_pref('browser.urlbar.suggest.searches', false);
user_pref('browser.urlbar.suggest.topsites', false);
user_pref('browser.formfill.enable', false);
user_pref('browser.urlbar.suggest.openpage', true);

// ===== Performances (Linux/Wayland/VA-API) =====
user_pref('gfx.webrender.all', true);
user_pref('layers.acceleration.force-enabled', true);
user_pref('media.ffmpeg.vaapi.enabled', true);
user_pref('dom.ipc.processCount', 8); // e10s: 8 process contenus
user_pref('general.smoothScroll', true);

// Cache/Session (sûr et simple — ne pas forcer la RAM, laisser auto)
user_pref('browser.cache.disk.enable', true);
user_pref('browser.sessionstore.interval', 60000);

// ===== Dev Tools =====
user_pref('devtools.theme', 'dark');
user_pref('devtools.toolbox.host', 'bottom');
user_pref('devtools.inspector.showUserAgentStyles', true);
user_pref('devtools.webconsole.timestampMessages', true);
user_pref('devtools.editor.tabsize', 2);
user_pref('devtools.editor.expandtab', true);
user_pref('devtools.toolbox.zoomValue', '1.2');
user_pref('devtools.netmonitor.persistlog', true);
user_pref('devtools.webconsole.persistlog', true);

// Debug avancé (sécurité: active uniquement sur profil Dev)
user_pref('devtools.chrome.enabled', true);
user_pref('devtools.debugger.remote-enabled', true);

// ===== Expérimental utile =====
user_pref('layout.css.grid-template-masonry-value.enabled', true);

// DevTools — profil DEV uniquement
user_pref("devtools.theme", "dark");
user_pref("devtools.toolbox.host", "bottom");
user_pref("devtools.webconsole.timestampMessages", true);
user_pref("devtools.editor.tabsize", 2);
user_pref("devtools.editor.expandtab", true);
user_pref("devtools.toolbox.zoomValue", "1.2");
user_pref("devtools.netmonitor.persistlog", true);
user_pref("devtools.webconsole.persistlog", true);

// Debug avancé (désactive sur profils non-dev)
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.debugger.remote-enabled", true);

// === Sécurité & réseau ===
user_pref("dom.security.https_only_mode", true);
user_pref("network.trr.mode", 2);
user_pref("network.trr.uri", "https://mozilla.cloudflare-dns.com/dns-query");
user_pref("network.http.http3.enabled", true);
user_pref("security.tls.enable_kyber", true);

// === Vie privée ===
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.emailtracking.enabled", true);
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("network.cookie.cookieBehavior", 1);

// === Télémétrie ===
user_pref("toolkit.telemetry.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);

// === Performances ===
user_pref("gfx.webrender.all", true);
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("dom.ipc.processCount", 8);

// === UI/Confort ===
user_pref("browser.compactmode.show", true);
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("general.smoothScroll", true);

// === Développement ===
user_pref("devtools.cache.disabled", true);
user_pref("devtools.debugger.source-maps-enabled", true);
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.debugger.remote-enabled", true);
