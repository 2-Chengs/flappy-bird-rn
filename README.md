<<<<<<< HEAD
# 🐦 Flappy Bird React Native

A modern Flappy Bird clone built with React Native and Expo, featuring smooth animations, physics-based gameplay, and cross-platform support.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (macOS) or Android Studio

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/2-Chengs/flappy-bird-rn.git
   cd flappy-bird-rn
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Run on your preferred platform:**
   ```bash
   # iOS Simulator
   npm run ios
   
   # Android Emulator
   npm run android
   
   # Web Browser
   npm run web
   ```

## 🎮 Game Features

### Core Gameplay
- ✅ Bird physics with gravity and jump mechanics
- ✅ Randomly generated pipe obstacles
- ✅ Collision detection system
- ✅ Score tracking and high score persistence
- ✅ Game state management (Menu, Playing, Game Over)

### Polish & UX
- ✅ Smooth animations using React Native Reanimated
- ✅ Sound effects for jump, score, and game over
- ✅ Responsive UI that scales across devices
- ✅ Visual effects and particle systems
- ✅ Settings screen with sound toggle

### Technical Features
- ✅ TypeScript for type safety
- ✅ Modular component architecture
- ✅ Performance optimized for 60fps gameplay
- ✅ Cross-platform compatibility (iOS, Android, Web)
- ✅ Persistent storage for high scores and settings

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Bird.tsx        # Bird character component
│   ├── Pipe.tsx        # Pipe obstacle component
│   ├── GameCanvas.tsx  # Main game rendering area
│   └── UI/             # UI components (buttons, menus)
├── screens/            # Screen components
│   ├── GameScreen.tsx  # Main game screen
│   ├── MenuScreen.tsx  # Main menu
│   └── GameOverScreen.tsx
├── hooks/              # Custom React hooks
│   ├── useGameLoop.ts  # Main game loop logic
│   └── useSound.ts     # Sound management
├── services/           # External services
│   └── SoundManager.ts # Audio service
├── utils/              # Utility functions
│   ├── constants.ts    # Game configuration
│   ├── physics.ts      # Physics calculations
│   └── storage.ts      # AsyncStorage helpers
├── types/              # TypeScript type definitions
│   └── game.ts         # Game-related types
└── assets/             # Game assets
    ├── images/         # Sprite images
    └── sounds/         # Audio files
```

## 🛠 Development

### Available Scripts

```bash
# Development
npm start              # Start Expo development server
npm run ios           # Run on iOS simulator
npm run android       # Run on Android emulator
npm run web           # Run in web browser

# Code Quality
npm run lint          # Lint and fix code
npm run lint:check    # Check linting without fixing
npm run format        # Format code with Prettier
npm run format:check  # Check formatting
npm run type-check    # TypeScript type checking

# Building
npm run build:android # Build Android APK
npm run build:ios     # Build iOS IPA
```

### Code Quality Tools

- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting
- **TypeScript**: Static type checking
- **Husky**: Git hooks for pre-commit checks (coming soon)

## 🎯 Game Configuration

Modify game settings in `src/utils/constants.ts`:

```typescript
export const GAME_CONFIG = {
  gravity: 0.8,        // Bird fall speed
  jumpForce: -12,      // Bird jump strength
  pipeSpeed: 3,        # Pipe movement speed
  pipeGap: 150,        // Gap between pipes
  pipeWidth: 60,       // Pipe width
  groundHeight: 100,   // Ground height
};
```

## 📱 Platform Support

- **iOS**: Native iOS app via Expo
- **Android**: Native Android app via Expo  
- **Web**: Progressive Web App

## 🔧 Troubleshooting

### Common Issues

1. **Metro bundler issues:**
   ```bash
   npm start -- --clear
   ```

2. **iOS Simulator not opening:**
   ```bash
   sudo xcode-select --install
   ```

3. **Android emulator issues:**
   - Ensure Android Studio is installed
   - Create an AVD in Android Studio
   - Start the emulator before running `npm run android`

### Performance Tips

- Use a physical device for best performance
- Enable Developer Mode on Android for better debugging
- Close unnecessary apps when testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original Flappy Bird game by Dong Nguyen
- React Native and Expo teams for the excellent development platform
- Community contributors and testers

---

**Happy Coding! 🚀**

For questions or support, please open an issue on GitHub.
=======
# flappy-bird-rn
A Flappy Bird clone built with React Native - MVP game development project
>>>>>>> 519e80e548155ed8f470fa974e2c75c69fd23954
