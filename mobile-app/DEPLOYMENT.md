# App Deployment Guide - xDev Asia Mobile

## Quick Start Checklist

### Pre-Deployment

- [ ] Test app thoroughly on both iOS and Android
- [ ] Update version numbers in `app.json`
- [ ] Update app icons and splash screens
- [ ] Configure Firebase credentials in `.env`
- [ ] Setup backend API endpoints
- [ ] Prepare app store assets (screenshots, descriptions)
- [ ] Create privacy policy page
- [ ] Get Apple Developer account ($99/year)
- [ ] Get Google Play Developer account ($25 one-time)

### iOS Submission

1. **Build for TestFlight:**
```bash
eas build --platform ios --profile production
```

2. **Submit to App Store:**
```bash
eas submit --platform ios
```

3. **App Store Connect Setup:**
   - Login: https://appstoreconnect.apple.com
   - Create new app
   - Fill in app information
   - Upload screenshots (minimum 3)
   - Set pricing (Free)
   - Add privacy policy URL
   - Submit for review

4. **Review Process:**
   - Usually takes 1-3 days
   - Be ready to respond to review feedback
   - Common rejection reasons:
     * Missing privacy policy
     * Incomplete functionality
     * Crashes or bugs
     * Misleading content

### Android Submission

1. **Build for Play Store:**
```bash
eas build --platform android --profile production
```

2. **Submit to Play Store:**
```bash
eas submit --platform android
```

3. **Google Play Console Setup:**
   - Login: https://play.google.com/console
   - Create new app
   - Fill in app details
   - Upload screenshots (minimum 2)
   - Complete content rating questionnaire
   - Set up pricing & distribution
   - Submit for review

4. **Review Process:**
   - Usually takes 1-7 days
   - May need to go through testing tracks first:
     * Internal testing (instant)
     * Closed testing (hours)
     * Open testing (1-3 days)
     * Production (1-7 days)

## Version Management

### Updating App Version:

In `app.json`:
```json
{
  "expo": {
    "version": "1.0.1",  // User-visible version
    "ios": {
      "buildNumber": "2"  // Increment for each build
    },
    "android": {
      "versionCode": 2  // Increment for each build
    }
  }
}
```

**Rules:**
- Increment `version` for feature updates (1.0.0 → 1.1.0)
- Increment `buildNumber`/`versionCode` for every submission
- Can't submit same build number twice

## App Store Optimization (ASO)

### App Name & Description:

**iOS (App Store):**
- App Name: "xDev Asia" (max 30 chars)
- Subtitle: "Blog Công Nghệ & Lập Trình" (max 30 chars)
- Keywords: "lap trinh,AI,DevOps,tech blog,hoc lap trinh"

**Android (Play Store):**
- App Name: "xDev Asia - Blog Công Nghệ"
- Short description: "Blog về lập trình, AI, DevOps và công nghệ"
- Full description: (Use Vietnamese, highlight features)

### Categories:

- **iOS:** Education or News
- **Android:** Education or News & Magazines

## Monitoring & Analytics

### Setup Crash Reporting:

Using expo-updates:
```bash
npm install expo-updates
```

### Firebase Analytics (Optional):
Already configured in `lib/firebase.ts`. Track:
- Screen views
- Post reads
- Bookmarks
- Searches

### App Store Metrics:

Monitor in respective consoles:
- Downloads
- Ratings & Reviews
- Crashes
- Revenue (if applicable)

## Post-Launch

### Responding to Reviews:

**iOS:**
- Can respond to reviews in App Store Connect
- Be professional and helpful
- Ask users to update rating if issue fixed

**Android:**
- Can respond to reviews in Play Console
- Encourage positive users to rate
- Address negative feedback quickly

### Push Notifications (Future):

To add push notifications:
1. Install: `expo install expo-notifications`
2. Configure FCM (Firebase) for Android
3. Configure APNs for iOS
4. Request permissions in app
5. Handle notification events

### Over-The-Air (OTA) Updates:

For non-native code changes:
```bash
eas update --branch production --message "Bug fixes"
```

Users get updates without App Store approval!

**Limitations:**
- Can't change native code
- Can't update JS bundle structure significantly

## Troubleshooting

### iOS Build Fails:

```bash
# Clear EAS cache
eas build --platform ios --clear-cache

# Reset credentials
eas credentials
```

### Android Build Fails:

```bash
# Check logs
eas build:view

# Common issues:
# - Out of memory: Increase memory in eas.json
# - Gradle timeout: Retry build
```

### App Crashes on Launch:

1. Check Error Logs:
   - iOS: Xcode → Window → Devices and Simulators
   - Android: `adb logcat`

2. Common causes:
   - Missing environment variables
   - Firebase misconfiguration
   - Network errors on API calls

### Rejected by App Store:

Common fixes:
1. **2.1 - Performance: App Completeness**
   - Ensure all features work
   - Provide test account if needed

2. **4.3 - Spam**
   - Make app unique from website
   - Add native features (offline, push, etc.)

3. **5.1.1 - Privacy: Data Collection**
   - Add privacy policy
   - Declare data collection in app privacy section

## Scaling & Growth

### Performance Optimization:

- Use Hermes engine (enabled by default)
- Lazy load screens
- Cache images
- Optimize bundle size

### Internationalization (i18n):

For multi-language support:
```bash
npm install i18next react-i18next
```

### Backend Scaling:

As users grow:
- Use CDN for images
- Cache API responses
- Implement pagination
- Add rate limiting

## Costs

### Development:
- Free: Expo Free plan
  * 30 builds/month
  * Basic support

- $29/month: Expo Production plan
  * Unlimited builds
  * Priority support

### App Stores:
- iOS: $99/year (Apple Developer)
- Android: $25 one-time (Google Play)

### Infrastructure:
- Firebase: Free tier (good for start)
- Backend hosting: (your existing setup)

## Next Steps

1. **Start with TestFlight/Internal Testing**
   - Get feedback from real users
   - Fix bugs before public release

2. **Soft Launch**
   - Release in smaller markets first
   - Monitor metrics and reviews

3. **Full Launch**
   - Submit to both stores
   - Promote on social media
   - Add download links to website

4. **Iterate**
   - Monitor user feedback
   - Add requested features
   - Fix bugs promptly
   - Release updates regularly

## Resources

- [Expo EAS Build Docs](https://docs.expo.dev/build/setup/)
- [App Store Connect](https://developer.apple.com/app-store-connect/)
- [Google Play Console](https://developer.android.com/distribute/console)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Google Play Policies](https://play.google.com/about/developer-content-policy/)

Good luck with your app launch! 🚀
