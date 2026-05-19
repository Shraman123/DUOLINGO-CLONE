<div align="center">

# 🦜 Duolingo Clone

**A full-featured language learning app built with React Native & Expo**

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Zustand](https://img.shields.io/badge/Zustand-FF9600?style=for-the-badge)](https://zustand-demo.pmnd.rs/)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🗺️ **Course Map** | 4 units × 5 lessons each, snake path layout |
| ❓ **Quiz Engine** | Multiple choice + translate question types |
| ❤️ **Hearts System** | Lose hearts on wrong answers |
| ⚡ **XP & Streaks** | Earn XP, track daily streaks |
| 🏆 **Leaderboard** | Ranked players with animated podium |
| 🛡️ **Quests** | Daily and weekly quest tracking |
| 👤 **Profile** | Stats, achievements, settings |
| ✅ **Completion Screen** | Celebration screen with score summary |

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/Shraman123/DUOLINGO-CLONE.git
cd DUOLINGO-CLONE

# 2. Install dependencies
npx expo install expo-router react-native-safe-area-context react-native-screens @expo/vector-icons expo-linear-gradient
npm install zustand

# 3. Start the dev server
npx expo start
```

Then open **Expo Go** on your Android phone and scan the QR code.

---

## 🗂️ Project Structure

```
duolingo-clone/
├── app/
│   ├── _layout.tsx              ← Root navigation
│   ├── (tabs)/
│   │   ├── _layout.tsx          ← Bottom tab bar
│   │   ├── index.tsx            ← 🗺️  Course map screen
│   │   ├── leaderboard.tsx      ← 🏆  Leaderboard
│   │   ├── quests.tsx           ← 🛡️  Daily & weekly quests
│   │   └── profile.tsx          ← 👤  Profile & achievements
│   └── lesson/
│       ├── [id].tsx             ← ❓  Quiz gameplay screen
│       └── complete.tsx         ← ✅  Lesson complete screen
├── store/
│   └── gameStore.ts             ← XP · hearts · streaks (Zustand)
├── data/
│   └── lessons.ts               ← 4 units · 20 questions
├── app.json
├── babel.config.js
└── package.json
```

---

## 🛠️ Tech Stack

| Tech | Purpose |
|---|---|
| **React Native** | Core UI framework |
| **Expo 52** | Build & development tooling |
| **expo-router** | File-based navigation |
| **TypeScript** | Type safety |
| **Zustand** | Global state management |
| **@expo/vector-icons** | Ionicons icon set |

---

## 📱 Screenshots

| Home | Lesson | Leaderboard | Profile |
|---|---|---|---|
| Course map with units | Quiz gameplay | Ranked podium | Stats & achievements |

---

## ➕ Adding More Questions

Open `data/lessons.ts` and add to any unit's `lessons` array:

```ts
{
  id: "1-6",
  type: "multipleChoice",
  title: "Choose the translation",
  question: "What does 'Adiós' mean?",
  options: ["Hello", "Please", "Goodbye", "Sorry"],
  correctAnswer: "Goodbye",
}
```

---

## 🐛 Troubleshooting

| Error | Fix |
|---|---|
| Module not found | `npx expo install <module-name>` |
| Blank white screen | Check `"main": "expo-router/entry"` in `package.json` |
| Metro bundler crash | `npx expo start --clear` |
| Can't scan QR code | Make sure phone & PC are on the **same WiFi** |

---

<div align="center">

Built with 💚 using **Practical Vibe Coding** · MIT License

**Made by [Shraman123](https://github.com/Shraman123)**

</div>
