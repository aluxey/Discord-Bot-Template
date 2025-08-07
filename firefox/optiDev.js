// Dans prefs.js - Spécial développement web
user_pref('devtools.webconsole.timestampMessages', true);
user_pref('devtools.editor.tabsize', 2); // Cohérent avec ton setup VS Code
user_pref('devtools.editor.expandtab', true);
user_pref('devtools.theme', 'dark');
user_pref('devtools.toolbox.zoomValue', '1.2'); // Plus lisible sur laptop

// Network debugging
user_pref('devtools.netmonitor.persistlog', true);
user_pref('devtools.webconsole.persistlog', true);

// React debugging
user_pref('devtools.chrome.enabled', true);
user_pref('devtools.debugger.remote-enabled', true);
