---
id: 019f5a01-d000-7001-his0-000000001802
title: "Bài 47: Mobile app cho bệnh nhân & bác sĩ"
slug: bai-47-mobile-app
description: >-
  Tính năng cốt lõi của app BV: đặt khám, hồ sơ của tôi, xem KQ, thanh
  toán; app bác sĩ để duyệt y lệnh / xem KQ ngoài giờ.
duration_minutes: 35
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-47-mobile-app-banner.png
video_url: null
sort_order: 2
section_title: "Phần 18: Tích hợp & Vận hành"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Mobile app cho bệnh nhân & bác sĩ](/storage/uploads/2026/05/his/bai-47-mobile-app-banner.png)

## App bệnh nhân

![BN dùng app, BS xem worklist trên điện thoại](/storage/uploads/2026/05/his/bai-47-mobile-app-workflow.png)


## Mục tiêu bài học

- Thiết kế 2 mobile app: **Patient app** (đặt khám, xem hồ sơ, đơn thuốc, thanh toán) và **Clinician app** (worklist, xem EMR, ký y lệnh).
- Tích hợp với **VNeID** cho xác thực BN; **MISA Sign / VNPT Sign / FPT.eSign** cho ký số BS.
- Tuân thủ thiết kế UX cho người cao tuổi (font lớn, accessibility) và NV y tế đang đeo găng (UI lớn, mật khẩu sinh trắc).
- Đảm bảo bảo mật: mã hoá local DB, không cache PII, MDM cho thiết bị BS.
- Đo lường adoption + KPI vận hành app.

## Bối cảnh

- 2026: 80% BN có smartphone; tải app BV thường thấp 10-20% — UX kém + không có incentive.
- BS đeo găng/khẩu trang khó dùng smartphone trong ICU/OR — cần UI tối ưu.
- Sự cố lộ thông tin BN qua app (cache, screenshot) đã xảy ra → cần security tốt.
- VNeID Health là "app mặc định" của Chính phủ — BV nên tích hợp thay vì cố cạnh tranh.

## Patient App — tính năng cốt lõi

| Tính năng | Mô tả | Tích hợp |
| --- | --- | --- |
| Đăng nhập VNeID | xác thực qua app VNeID | OIDC |
| Đặt khám online | chọn BS, ngày giờ | HIS scheduler |
| Check-in QR | đến BV quét QR thay vì xếp hàng | bài 6 kiosk |
| Xem hồ sơ KCB | encounter, kết quả CLS, chẩn đoán | EMR API |
| Đơn thuốc + nhắc uống | timer, hướng dẫn | MedicationRequest |
| Xem & thanh toán hoá đơn | QR / VietQR / thẻ | HĐĐT API |
| Sổ tiêm chủng cá nhân | trẻ em + người lớn | bài 28 |
| Tele-consult | video call với BS | TeleHealth |
| Khảo sát hài lòng | sau xuất viện | bài 43 |
| Phản ánh / khiếu nại | upload ảnh, video | bài 43 |
| Nhắc tái khám | push notification | scheduler |

## Clinician App — tính năng cốt lõi

| Tính năng | Mô tả |
| --- | --- |
| Worklist BN | filter theo khoa, theo trạng thái |
| Xem EMR rút gọn | timeline, kết quả CLS, đơn thuốc |
| Ký y lệnh số | sinh trắc + PIN, gắn với HSM remote |
| Cảnh báo realtime | crit lab, vital sign bất thường, sự cố |
| eMAR điều dưỡng | scan barcode BN + thuốc |
| Tele-consult | video call với BN/đồng nghiệp |
| Lịch trực + đổi ca | tích hợp HR |
| Báo cáo sự cố | nhanh + ẩn danh |

## Ký số trên mobile

Hai mô hình:
1. **Smart-card kết nối qua bluetooth/USB-C** — BS cắm vào điện thoại để ký.
2. **Remote signing với HSM tập trung + xác thực 2FA** (sinh trắc + OTP/VNeID) — phổ biến hơn.

Mỗi lần ký:
- App tạo content hash → gửi signing service.
- Service xác thực BS qua sinh trắc + push notification → BS confirm.
- HSM ký → trả signature về app + lưu vào HIS.

## Bảo mật mobile

- **No PII cache:** không lưu hồ sơ BN local; mỗi lần mở app phải fetch online.
- Mã hoá local DB (SQLCipher / iOS KeyChain).
- **Jailbreak/root detection:** chặn app nếu thiết bị không an toàn.
- **MDM** (Microsoft Intune / Jamf / VMware Workspace ONE) cho thiết bị BV cấp cho BS.
- **Screenshot blocking** trên các màn hình PII.
- Logout tự động sau 5 phút idle.
- Force update khi có security patch.

## Tích hợp VNeID

- BN đăng nhập app BV qua VNeID OIDC → app nhận access token + scope.
- App query VNeID Health API để lấy lịch sử KCB toàn quốc (nếu BN đồng ý).
- Lợi ích: không cần BN nhớ thêm tài khoản BV.

## Sai lầm thường gặp

1. Cache hồ sơ BN local "cho nhanh" → mất điện thoại = lộ data.
2. Không có jailbreak detection → app bị decompile, leak API.
3. UI quá phức tạp → BN cao tuổi bỏ.
4. Yêu cầu BN tự đăng ký account thay vì VNeID → adoption thấp.
5. Push notification chứa PII ("KQ XN HIV của ông Nguyễn A đã có") → vi phạm.
6. Không có quy trình thu hồi access khi BS nghỉ việc → cert vẫn ký được.

## Output / Deliverables

- 2 mobile app (iOS + Android) cho BN và BS.
- Backend API riêng cho mobile (BFF pattern).
- MDM policy cho thiết bị BS.
- Chính sách bảo mật + privacy policy theo NĐ 13/2023.
- Adoption analytics dashboard.

## UAT checklist

- [ ] Đăng nhập VNeID thành công, lấy CCCD đúng.
- [ ] Đặt khám → giữ slot → đẩy HIS scheduler.
- [ ] Ký y lệnh trên app: sinh trắc + push 2FA + HSM ký.
- [ ] Jailbroken device → app từ chối khởi động.
- [ ] Push notification không chứa PII.
- [ ] BS nghỉ việc → cert revoke, app force logout.

## KPI

| Chỉ số | Mục tiêu |
| --- | --- |
| % BN khám có dùng app | ≥ 30% |
| Tỉ lệ no-show (lịch hẹn online) | ≤ 10% |
| Crash rate | ≤ 1% |
| App store rating | ≥ 4.0 |
| % BS dùng app ký y lệnh | ≥ 70% |
| Sự cố lộ data từ mobile | 0 |

## Cơ sở pháp lý 2026

- **Quyết định 06/QĐ-TTg/2022** — Đề án 06, VNeID.
- **Luật An ninh mạng 24/2018/QH14** + **NĐ 53/2022**.
- **Luật Giao dịch điện tử 20/2023/QH15**.
- **Nghị định 13/2023/NĐ-CP** — bảo vệ DLCN trên mobile.
- **Nghị định 23/2025/NĐ-CP** — chữ ký số trong dịch vụ công (mobile signing).
- **Thông tư 46/2018/TT-BYT** — EMR phải có chữ ký số.
- **OWASP Mobile Top 10 2024** — tham chiếu bảo mật.
