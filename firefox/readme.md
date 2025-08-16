# Struct de la conf Mozilla Firefox

```md
firefox/
├── profiles.ini
├── profile-template/
│   ├── prefs.js                 # about:config settings
│   ├── chrome/
│   │   └── userChrome.css       # UI customization
│   ├── extensions/              # Extension XPI files
│   └── containers.json          # Container configuration
```
## Prérequis
- Firefox ≥ 124
- Linux (Wayland conseillé) : `MOZ_ENABLE_WAYLAND=1`
- Activer : `toolkit.legacyUserProfileCustomizations.stylesheets = true`

## Installation manuelle
1. Localiser ton profil Firefox (`about:profiles`)
2. Copier `user.js` à la racine du profil.
3. Créer le dossier `chrome/` dans le profil et y placer `userChrome.css`.
4. Redémarrer Firefox.

## Rollback
- Sauvegarder `prefs.js`, `user.js`, `logins.json`, `key4.db`, et `chrome/`.
- Restaurer en remplaçant les fichiers par leur version de sauvegarde.

## Profils recommandés
- **Dev** : isolé, sans Sync, extensions dev.
- **Perso** : avec Sync et extensions quotidiennes.
- **Work** : pour le boulot, sandboxé.

## Extensions clés
- uBlock Origin
- Bitwarden
- Multi-Account Containers (+ Containerise si besoin)
- SponsorBlock (YouTube)
