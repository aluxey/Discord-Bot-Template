// == Vie privée & sécurité ==
user_pref('privacy.donottrackheader.enabled', true); // DNT activé
user_pref('privacy.trackingprotection.enabled', true); // Protection anti-traqueurs
user_pref('privacy.trackingprotection.socialtracking.enabled', true);
user_pref('privacy.trackingprotection.cryptomining.enabled', true);
user_pref('privacy.trackingprotection.fingerprinting.enabled', true);
user_pref('network.cookie.cookieBehavior', 1); // Accepter les cookies uniquement du site visité
user_pref('browser.safebrowsing.malware.enabled', true); // Protection malware
user_pref('browser.safebrowsing.phishing.enabled', true); // Protection phishing
user_pref('media.peerconnection.enabled', false); // Désactive WebRTC (IP leak)

// == Interface utilisateur ==
user_pref('browser.uidensity', 1); // Mode compact (nécessite userChrome.css)
user_pref('toolkit.legacyUserProfileCustomizations.stylesheets', true); // Active userChrome.css
user_pref('browser.tabs.drawInTitlebar', true); // Intégrer les onglets dans la barre de titre
user_pref('browser.compactmode.show', true); // Afficher option compact dans les réglages
user_pref('browser.urlbar.trimURLs', false); // Affiche toujours http:// dans la barre

// == Performances ==
user_pref('browser.sessionstore.interval', 30000); // Sauvegarde de session toutes les 30s
user_pref('browser.tabs.warnOnClose', false); // Pas d’alerte fermeture multi-onglets
user_pref('browser.startup.page', 3); // Rouvrir la session précédente

// == Suggestions inutiles désactivées ==
user_pref('browser.urlbar.suggest.history', true);
user_pref('browser.urlbar.suggest.bookmark', true);
user_pref('browser.urlbar.suggest.openpage', true);
user_pref('browser.urlbar.suggest.searches', false);
user_pref('browser.urlbar.suggest.topsites', false);
user_pref('browser.formfill.enable', false); // Désactive l’auto-complétion de formulaire

// == DNS over HTTPS (optionnel) ==
user_pref('network.trr.mode', 2); // Mode TRR (DoH d’abord)
user_pref('network.trr.uri', 'https://mozilla.cloudflare-dns.com/dns-query');

// == Dev ==
user_pref('devtools.toolbox.host', 'bottom'); // DevTools en bas
user_pref('devtools.theme', 'dark');
user_pref('devtools.inspector.showUserAgentStyles', true);
user_pref('layout.css.grid-template-masonry-value.enabled', true); // CSS expérimental pour grid masonry
