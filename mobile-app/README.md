# xDev Asia Mobile App

Mobile application cho blog công nghệ xDev Asia, được xây dựng với React Native và Expo.

## Tính năng

- 📱 Đọc bài viết blog về lập trình, AI, DevOps
- 📚 Xem các series học tập và khóa học
- 🚀 Khám phá showcase các dự án thực tế
- 🔖 Lưu và quản lý bookmarks
- 🔍 Tìm kiếm nội dung
- 🌙 Hỗ trợ Dark Mode
- 📤 Chia sẻ nội dung

## Yêu cầu hệ thống

- Node.js 18+
- npm hoặc yarn
- iOS: macOS với Xcode 15+ (để build iOS app)
- Android: Android Studio với Android SDK (để build Android app)
- Expo CLI: `npm install -g expo-cli`
- EAS CLI: `npm install -g eas-cli` (để build và submit)

## Cài đặt

1. Navigate to mobile-app directory:
```bash
cd mobile-app
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Copy file môi trường:
```bash
cp .env.example .env
```

4. Cấu hình environment variables trong file `.env` với Firebase credentials của bạn.

## Development

### Run trên Expo Go (phát triển nhanh)

```bash
# Start development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android
```

Scan QR code với Expo Go app trên điện thoại để test trực tiếp.

### Run với Development Build (recommended)

```bash
# Build development client
npx expo run:ios
npx expo run:android

# Start with development build
npm start
```

## API Backend

Mobile app kết nối với backend API tại `https://xdev.asia/api`. Bạn cần implement các API endpoints sau:

### Required Endpoints:

**Blog Posts:**
- `GET /api/posts` - List blog posts (với pagination và filters)
- `GET /api/posts/:slug` - Get single post detail

**Series:**
- `GET /api/series` - List series
- `GET /api/series/:slug` - Get series detail

**Showcase:**
- `GET /api/showcase` - List showcase projects
- `GET /api/showcase/:slug` - Get showcase detail

**Categories & Tags:**
- `GET /api/categories` - List categories
- `GET /api/tags` - List tags

**Search:**
- `GET /api/search?q=keyword` - Search posts and series

Xem file `src/app/api/` trong Next.js project để implement các endpoints này.

## Build cho Production

### 1. Cấu hình EAS

```bash
# Login to Expo account
eas login

# Configure project
eas build:configure
```

Update `eas.json` với thông tin project của bạn.

### 2. Build Android APK/AAB

```bash
# Build APK for testing
eas build --platform android --profile preview

# Build AAB for Play Store
eas build --platform android --profile production
```

### 3. Build iOS

```bash
# Build for TestFlight
eas build --platform ios --profile preview

# Build for App Store
eas build --platform ios --profile production
```

**Lưu ý iOS:**
- Cần Apple Developer Account ($99/year)
- Cấu hình Bundle Identifier trong `app.json`
- Setup App Store Connect

### 4. Submit lên Stores

**Android (Google Play):**
```bash
# Submit to Play Store
eas submit --platform android

# Hoặc upload manually file AAB tại:
# https://play.google.com/console
```

**iOS (App Store):**
```bash
# Submit to App Store
eas submit --platform ios

# Hoặc sử dụng Transporter app để upload
```

## App Store Requirements

### iOS App Store Checklist:

1. **App Icons:**
   - icon.png (1024x1024)
   - Transparent background không được phép

2. **Screenshots:**
   - iPhone: 6.5" (1290 x 2796), 5.5" (1242 x 2208)
   - iPad: 12.9" (2048 x 2732)
   - Cần ít nhất 3-5 screenshots

3. **App Information:**
   - App name (max 30 characters)
   - Subtitle (max 30 characters)
   - Description
   - Keywords
   - Privacy Policy URL
   - Support URL

4. **Privacy:**
   - Privacy Policy (bắt buộc)
   - Data collection disclosure

### Android Play Store Checklist:

1. **App Icons:**
   - adaptive-icon.png (512x512)
   - Feature graphic (1024x500)

2. **Screenshots:**
   - Phone: ít nhất 2, tối đa 8 (16:9 ratio)
   - Tablet: ít nhất 2 (optional)
   - 7" tablet: 1024 x 600
   - 10" tablet: 1920 x 1200

3. **App Information:**
   - Short description (max 80 characters)
   - Full description (max 4000 characters)
   - Privacy Policy URL (bắt buộc)

4. **Content Rating:**
   - Complete questionnaire
   - Get rating certificate

5. **Release Management:**
   - Internal testing → Closed testing → Open testing → Production
   - Review có thể mất 1-7 ngày

## App Configuration

### Update App Info:

Sửa file `app.json`:
- `expo.name`: Tên app hiển thị
- `expo.slug`: URL slug
- `expo.version`: Version number
- `expo.ios.bundleIdentifier`: iOS bundle ID
- `expo.ios.buildNumber`: iOS build number  
- `expo.android.package`: Android package name
- `expo.android.versionCode`: Android version code

### App Icons:

Đặt icons vào:
- `assets/icon.png` (1024x1024) - Universal icon
- `assets/adaptive-icon.png` (1024x1024) - Android adaptive icon
- `assets/splash.png` - Splash screen

Hoặc sử dụng online tools để generate:
- https://www.appicon.co/
- https://easyappicon.com/

## Testing

### TestFlight (iOS):
```bash
eas build --platform ios --profile preview
eas submit --platform ios
```
Mời testers qua App Store Connect → TestFlight.

### Google Play Internal Testing (Android):
```bash
eas build --platform android --profile production
eas submit --platform android
```
Tạo internal testing track và mời testers qua email.

## Troubleshooting

### Common iOS Issues:

1. **Bundle identifier already exists:**
   - Change `expo.ios.bundleIdentifier` in app.json

2. **Provisioning profile errors:**
   - Run: `eas credentials`
   - Clear and regenerate credentials

3. **App rejected for missing features:**
   - Add required permissions in Info.plist
   - Provide test account if needed

### Common Android Issues:

1. **Package name already exists:**
   - Change `expo.android.package` in app.json

2. **Signing key issues:**
   - EAS handles this automatically
   - Or manually manage keystore

3. **Missing app bundle:**
   - Use `eas build --platform android --profile production`

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [EAS Build](https://docs.expo.dev/build/introduction/)
- [EAS Submit](https://docs.expo.dev/submit/introduction/)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Google Play Policy](https://play.google.com/about/developer-content-policy/)

## License

MIT

## Support

- Website: https://xdev.asia
- GitHub: https://github.com/xdev-asia-labs
