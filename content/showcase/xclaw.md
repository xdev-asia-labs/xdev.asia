---
featured_image: null
---

## Giới thiệu

**xClaw** là ứng dụng chat AI đa mô hình, được xây dựng bằng Swift và SwiftUI với thiết kế Liquid Glass hiện đại. Hỗ trợ nhiều AI provider khác nhau trong một giao diện thống nhất, đẹp mắt.

## Tính năng chính

- 🤖 **Multi-model AI**: Hỗ trợ GPT-4, Claude, Gemini, Llama và nhiều mô hình khác
- 💬 **Quản lý cuộc hội thoại**: Tạo, sửa, xóa và tổ chức các cuộc trò chuyện
- 🎨 **Liquid Glass Design**: Giao diện trong suốt, hiệu ứng kính mờ premium
- 📋 **Markdown rendering**: Hiển thị code blocks, bảng, danh sách với syntax highlighting
- 🔒 **Bảo mật**: API keys được lưu trữ an toàn trong Keychain
- 🌙 **Dark/Light mode**: Tự động theo hệ thống hoặc tuỳ chỉnh

## Yêu cầu hệ thống

| Yêu cầu | Phiên bản |
|----------|-----------|
| macOS | 14.0+ (Sonoma) |
| Xcode | 16.0+ |
| Swift | 5.9+ |

## Cài đặt & Chạy

### Clone repository

```bash
git clone https://github.com/tdduydev/xclaw.git
cd xclaw
```

### Mở trong Xcode

```bash
open xClaw.xcodeproj
```

### Cấu hình API Keys

1. Mở ứng dụng và vào **Settings** (⌘,)
2. Nhập API key cho từng provider (OpenAI, Anthropic, Google...)
3. Chọn model mặc định

### Build & Run

Nhấn `⌘R` trong Xcode hoặc:

```bash
xcodebuild -scheme xClaw -configuration Debug build
```

## Kiến trúc

```
xClaw/
├── App/              # Entry point, App lifecycle
├── Views/            # SwiftUI views
│   ├── Chat/         # Chat interface
│   ├── Settings/     # Settings panel
│   └── Sidebar/      # Conversation sidebar
├── ViewModels/       # MVVM view models
├── Models/           # Data models
├── Services/         # AI provider services
│   ├── OpenAI/
│   ├── Anthropic/
│   └── Google/
├── Storage/          # Core Data persistence
└── Utils/            # Utilities & extensions
```

## Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo Pull Request hoặc mở Issue trên GitHub.

## License

MIT License — xem file [LICENSE](https://github.com/tdduydev/xclaw/blob/main/LICENSE) để biết thêm chi tiết.
