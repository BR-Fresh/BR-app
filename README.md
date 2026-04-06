# BR-Fresh 🌿

BR-Fresh is a premium React Native mobile application built with the **React Native CLI (Bare Workflow)**. It's a harvest-inspired grocery and fresh produce delivery platform designed with a high-end aesthetic and seamless user experience.

---

## 🚀 Features

### 🔐 Authentication
- **Animated Splash Screen:** Smooth brand entry with micro-animations.
- **Phone Login:** Clean, focused interface for mobile number entry.
- **OTP Verification:** Auto-focusing OTP inputs with countdown timer and secure validation.

### 🏠 Main Navigation (Tabs)
- **Home:** Category-based discovery, featured stores, and fresh produce grids.
- **Search:** High-performance product and store search interface.
- **Orders:** Comprehensive order history and status tracking.
- **Profile:** User account management and settings.

### 📦 Shopping Experience
- **Store Discovery:** Detailed store pages with category filters and product listing.
- **Product Details:** Immersive product views with specs, quantity controls, and related items.
- **Cart & Review:** Full checkout flow with shipment summary, coupon application, and home delivery selection.
- **Payment:** Integrated payment interface for secure transactions.

### 📍 Logistics
- **Live Tracking:** Real-time order progress with status milestones and delivery partner info.
- **Native UI:** Optimized for modern edge-to-edge displays (Android & iOS) with custom system navigation area styling.

---

## 🛠️ Technology Stack

- **Framework:** [React Native 0.81.5](https://reactnative.dev/)
- **Navigation:** [React Navigation 7](https://reactnavigation.org/) (Stack & Bottom Tabs)
- **Animations:** [React Native Reanimated V4](https://docs.swmansion.com/react-native-reanimated/)
- **Icons:** Material Symbol Icons (Custom `IconSymbol` component)
- **Styling:** Vanilla `StyleSheet` with centralized design tokens.
- **Safe Areas:** `react-native-safe-area-context` for notch and gesture bar handling.

---

## 📂 Project Structure

```text
BR-Fresh/
├── src/                  # Main application source
│   ├── navigation/       # Stack and Tab navigators
│   ├── screens/          # All application screens
│   └── App.tsx           # Application entry point
├── components/           # Reusable UI components
├── constants/            # Design system (Theme, Colors, Typography)
├── context/              # React Context providers (Cart, etc.)
├── hooks/                # Custom React hooks
├── assets/               # Local images and fonts
├── android/              # Android native project files
└── index.js              # Root entry point for React Native
```

---

## 🎯 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)
- [Android Studio & SDK](https://developer.android.com/studio) (for Android development)
- [CocoaPods](https://cocoapods.org/) (for iOS development on macOS)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd BR-Fresh
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Metro Bundler:**
   ```bash
   npx react-native start
   ```

4. **Launch the app:**
   - **On Android:**
     ```bash
     npm run dev
     ```
     *(This will run `adb reverse` and `react-native run-android`)*
   - **On iOS (macOS only):**
     ```bash
     npx react-native run-ios
     ```

---

## 🎨 Design System

The application uses a custom design system located in `constants/theme.ts`. It features:
- **Primary Colors:** Harvest Green and Natural Tones.
- **Typography:** Weighted headlines for readability.
- **Surfaces:** Integrated safe area insets for precise edge-to-edge rendering.

---

## 📝 Troubleshooting

If you encounter issues during development:

- **Reset Metro Cache:**
  ```bash
  npx react-native start --reset-cache
  ```

- **ADB Reverse (for Android):**
  If the app cannot connect to the development server, run:
  ```bash
  adb reverse tcp:8081 tcp:8081
  ```

- **Clean Android Build:**
  ```bash
  cd android && ./gradlew clean && cd ..
  ```

---

*Built with ❤️ for the BR-Fresh Community.*
