# BR-Fresh 🌿

BR-Fresh is a premium React Native mobile application built with **Expo (SDK 54)** and **Expo Router**. It's a harvest-inspired grocery and fresh produce delivery platform designed with a high-end aesthetic and seamless user experience.

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

### 📍 Logistics
- **Live Tracking:** Real-time order progress with status milestones and delivery partner info.
- **Native UI:** Optimized for modern edge-to-edge displays (iOS & Android) with custom system navigation area styling.

---

## 🛠️ Technology Stack

- **Framework:** [Expo SDK 54](https://expo.dev/)
- **Navigation:** [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
- **Icons:** Material Symbol Icons (Custom `IconSymbol` component)
- **Styling:** Vanilla `StyleSheet` with centralized design tokens.
- **Safe Areas:** `react-native-safe-area-context` for notch and gesture bar handling.

---

## 📂 Project Structure

```text
BR-Fresh/
├── app/                  # Expo Router - File-based navigation
│   ├── (auth)/           # Authentication flow (Login, OTP)
│   ├── (tabs)/           # Main application tabs
│   ├── product/          # Product detail dynamic routes
│   ├── store/            # Store detail dynamic routes
│   └── _layout.tsx       # Root layout provider
├── assets/               # Local images and fonts
├── components/           # Reusable UI components
├── constants/            # Design system (Theme, Colors, Typography)
├── hooks/                # Custom React hooks
└── app.json              # Expo configuration
```

---

## 🎯 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)
- [Expo Go](https://expo.dev/expo-go) app installed on your physical device.

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

3. **Start the development server:**
   ```bash
   npx expo start
   ```

4. **Launch the app:**
   - **On Android:** Scan the QR code using the **Expo Go** app.
   - **On iOS:** Scan the QR code using the **Camera** app.
   - **In Terminal:** Press `a` for Android emulator or `i` for iOS simulator.

---

## 🎨 Design System

The application uses a custom design system located in `constants/theme.ts`. It features:
- **Primary Colors:** Harvest Green and Natural Tones.
- **Typography:** Weighted headlines for readability.
- **Surfaces:** Integrated safe area insets for precise edge-to-edge rendering.

---

## 📝 Troubleshooting

If you encounter path resolution errors or UI overlap after a major update, clear the bundler cache:
```bash
npx expo start -c
```

---

*Built with ❤️ for the BR-Fresh Community.*
