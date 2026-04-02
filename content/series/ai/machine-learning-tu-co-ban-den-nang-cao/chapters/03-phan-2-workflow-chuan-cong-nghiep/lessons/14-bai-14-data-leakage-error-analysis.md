---
id: 019d8b39-bb14-7014-c014-ee1400000014
title: 'Bài 14: Data Leakage & Error Analysis (bắt buộc)'
slug: bai-14-data-leakage-error-analysis
description: >-
  Nhận diện leakage phổ biến, điều tra mẫu dự đoán sai và lập kế hoạch cải thiện
  theo lỗi thực tế thay vì đoán mò.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: 'Phần 2: Workflow chuẩn công nghiệp'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---
## Giới thiệu

Nhiều model có điểm số đẹp nhưng không sống nổi ngoài môi trường thật vì một lý do rất cơ bản: data leakage. Bài này cực kỳ quan trọng, vì chỉ cần sai ở đây thì mọi metric đẹp trước đó gần như không còn giá trị.

## Mục tiêu bài học

- Nhận biết các dạng leakage phổ biến.
- Biết cách làm error analysis để hiểu model sai ở đâu.
- Xây tư duy kiểm tra mô hình trước khi tin vào điểm số.

## Data leakage là gì?

Leakage xảy ra khi mô hình vô tình nhìn thấy thông tin mà thực tế lúc dự đoán nó không được phép biết, ví dụ chuẩn hóa dữ liệu trước khi split hoặc tạo feature dùng dữ liệu sau thời điểm target xảy ra.

## Dấu hiệu nghi ngờ leakage

- Kết quả quá đẹp bất thường so với trực giác nghiệp vụ.
- Validation score rất cao nhưng triển khai thực tế kém.
- Một vài feature nghe có vẻ quá biết nhiều.

## Error analysis

Sau khi train model, hãy xem những mẫu nào bị dự đoán sai nhiều nhất, sai tập trung ở nhóm người dùng nào, và có pattern nào liên quan tới dữ liệu thiếu, outlier hay segment đặc biệt không.

## Quy trình kiểm tra nhanh

1. Kiểm tra feature nào chỉ xuất hiện sau sự kiện target.
2. Kiểm tra toàn bộ preprocessing có nằm trong pipeline không.
3. Xem top lỗi nặng nhất và các nhóm lỗi lặp lại.
4. Xác nhận cách chia dữ liệu có đúng logic thời gian hoặc logic người dùng hay không.

## Sai lầm thường gặp

- Nhìn leaderboard đẹp là tin ngay.
- Không đọc vài chục dòng dữ liệu lỗi thực tế.
- Bỏ qua yếu tố thời gian trong bài toán dự báo.

## Bài tập thực hành

- Tự tạo một ví dụ leakage nhỏ và quan sát điểm số tăng bất thường.
- Quay lại sửa pipeline cho đúng.
- Làm một bảng error analysis cho 20 mẫu dự đoán sai.

## Tiêu chí hoàn thành

- [ ] Phát hiện được ít nhất 3 kiểu leakage phổ biến.
- [ ] Có thói quen xem mẫu lỗi thật thay vì chỉ xem score.
- [ ] Biết nêu lý do vì sao một mô hình đẹp điểm số chưa chắc dùng được.

## Thực hành từng bước (nâng cao)

1. Lập timeline dữ liệu để đánh dấu thời điểm feature được tạo.
2. Kiểm tra toàn bộ feature có vi phạm thời điểm dự đoán không.
3. Huấn luyện lại mô hình sau khi loại feature nghi leakage.
4. So sánh metric trước/sau để lượng hóa tác động leakage.
5. Làm error analysis trên top 30 dự đoán sai nhất.

## Artifact nên nộp

- Bảng audit feature theo mốc thời gian.
- Báo cáo leakage findings và hành động sửa.
- Bảng nhóm lỗi chính kèm đề xuất cải thiện.

## Câu hỏi tự kiểm tra

- Leakage kiểu preprocessing khác leakage kiểu target leakage ra sao?
- Vì sao model quá đẹp có thể là tín hiệu nguy hiểm?
- Error analysis giúp chọn hướng cải thiện như thế nào?
