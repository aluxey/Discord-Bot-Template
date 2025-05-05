# 🎮 Discord Bot Starter

Ce repo est un template de bot Discord minimaliste et évolutif. Clone-le et démarre ton prochain projet rapidement !
This repo is a minimalist template of Discord Bot. Clone it and start your project asap !

## Start the project 

```
npx degit tonpseudo/discord-bot-template mon-nouveau-bot
cd mon-nouveau-bot
npm install
```

## 🚀 Architecture

```
discord-bot-template/
├── commands/
│   ├── slash/
│   │   └── ping.js
│   └── prefix/
│       └── help.js
├── events/
│   ├── interactionCreate.js
│   └── ready.js
├── handler/
│   ├── commandHandler.js
│   ├── eventHandler.js
│   └── client.js
├── config/
│   └── config.json
├── utils/
│   └── logger.js
├── .env.example
├── .gitignore
├── index.js
├── package.json
├── README.md
```
