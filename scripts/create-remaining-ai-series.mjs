import fs from 'fs';
import path from 'path';

const AUTHOR = {
  id: "019c9616-d2b4-713f-9b2c-40e2e92a05cf",
  name: "Duy Tran",
  avatar: "avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg",
};
const CATEGORY = {
  id: "019c9618-bb00-7000-b000-bb0000000001",
  name: "AI & Machine Learning",
  slug: "ai-machine-learning",
};

const SERIES_BASE = "content/series/ai";

// =====================================================
// SERIES 3: AI TRONG Y TẾ (Healthcare AI)
// =====================================================
const healthcareAI = {
  slug: "ai-trong-y-te-healthcare",
  index: {
    id: "019d8b33-aa01-7001-b001-ff0400000001",
    title: "AI trong Y tế & Healthcare: Ứng dụng Thực chiến",
    description: `Khóa học toàn diện về AI trong lĩnh vực Y tế — từ Medical Imaging với CNN,
  NLP cho hồ sơ bệnh án, Drug Discovery với GNN, đến triển khai AI tuân thủ
  HIPAA/FDA. Thực hành với Python, PyTorch, Hugging Face, và các bộ dữ liệu
  y tế chuẩn như MIMIC, CheXpert, PubMed.`,
    featured_image: "uploads/2026/03/ai-trong-y-te-healthcare-cover.png",
    level: "intermediate",
    duration_hours: 45,
    lesson_count: 15,
    tags: [
      { name: "Healthcare AI", slug: "healthcare-ai" },
      { name: "Medical Imaging", slug: "medical-imaging" },
      { name: "Drug Discovery", slug: "drug-discovery" },
      { name: "NLP Y tế", slug: "nlp-y-te" },
      { name: "HIPAA", slug: "hipaa" },
      { name: "Clinical NLP", slug: "clinical-nlp" },
      { name: "Deep Learning", slug: "deep-learning" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "Python", slug: "python" },
      { name: "AI", slug: "ai" },
    ],
    sections: [
      {
        id: "section-hc-01",
        title: "Phần 1: Nền tảng AI Y tế & Medical Data",
        description: "Hiểu đặc thù dữ liệu y tế, privacy, và các tiêu chuẩn",
        sort_order: 1,
        lessons: [
          { id: "019d8b33-bb01-7001-c001-ee0100000001", title: "Bài 1: AI trong Y tế — Tổng quan & Đạo đức", slug: "bai-1-ai-y-te-tong-quan", desc: "Landscape AI Healthcare. Các ứng dụng chính: chẩn đoán, thuốc, quản lý bệnh nhân. Đạo đức: bias, privacy, explainability. Regulatory landscape: FDA, CE Mark.", mins: 90, sort: 0 },
          { id: "019d8b33-bb02-7002-c002-ee0200000002", title: "Bài 2: Dữ liệu Y tế — DICOM, HL7 FHIR & Privacy", slug: "bai-2-du-lieu-y-te-dicom-fhir", desc: "Medical data formats: DICOM images, HL7 FHIR. EHR systems. De-identification. HIPAA compliance. Data pipeline cho medical AI.", mins: 120, sort: 1 },
          { id: "019d8b33-bb03-7003-c003-ee0300000003", title: "Bài 3: Medical Image Processing Fundamentals", slug: "bai-3-medical-image-processing", desc: "X-ray, CT, MRI fundamentals. DICOM processing với pydicom. Image preprocessing: windowing, normalization. Data augmentation cho medical images.", mins: 120, sort: 2 },
        ]
      },
      {
        id: "section-hc-02",
        title: "Phần 2: Medical Imaging AI — Computer Vision cho Y tế",
        description: "CNN, detection, segmentation cho ảnh y tế",
        sort_order: 2,
        lessons: [
          { id: "019d8b33-bb04-7004-c004-ee0400000004", title: "Bài 4: CNN cho Medical Image Classification", slug: "bai-4-cnn-medical-classification", desc: "Transfer learning ResNet/EfficientNet cho X-ray classification. CheXpert dataset. Multi-label classification. Grad-CAM explainability.", mins: 180, sort: 3 },
          { id: "019d8b33-bb05-7005-c005-ee0500000005", title: "Bài 5: Medical Image Segmentation — U-Net & Variants", slug: "bai-5-unet-segmentation", desc: "U-Net architecture. Attention U-Net, TransUNet. Organ/tumor segmentation. Dice loss, IoU metrics. 3D medical image segmentation.", mins: 180, sort: 4 },
          { id: "019d8b33-bb06-7006-c006-ee0600000006", title: "Bài 6: Object Detection & Pathology AI", slug: "bai-6-detection-pathology", desc: "YOLO/Faster R-CNN cho lesion detection. Whole Slide Image analysis. Digital pathology workflow. Cell counting, tissue classification.", mins: 150, sort: 5 },
        ]
      },
      {
        id: "section-hc-03",
        title: "Phần 3: Clinical NLP & Genomics AI",
        description: "NLP cho hồ sơ bệnh án, protein structure, drug discovery",
        sort_order: 3,
        lessons: [
          { id: "019d8b33-bb07-7007-c007-ee0700000007", title: "Bài 7: Clinical NLP — Phân tích Hồ sơ Bệnh án", slug: "bai-7-clinical-nlp", desc: "NER y tế: diseases, drugs, symptoms. BioBERT, PubMedBERT. Relation extraction. Clinical text classification. ICD coding automation.", mins: 150, sort: 6 },
          { id: "019d8b33-bb08-7008-c008-ee0800000008", title: "Bài 8: Medical Q&A & Chatbot Y tế", slug: "bai-8-medical-qa-chatbot", desc: "Medical question answering. RAG cho y tế: PubMed retrieval. Fine-tune LLM cho medical domain. Guardrails, safety cho medical chatbot.", mins: 150, sort: 7 },
          { id: "019d8b33-bb09-7009-c009-ee0900000009", title: "Bài 9: Drug Discovery với AI — GNN & Molecular Generation", slug: "bai-9-drug-discovery-gnn", desc: "Graph Neural Networks cho molecular property prediction. SMILES representation. Molecular generation. Virtual screening. ADMET prediction.", mins: 180, sort: 8 },
          { id: "019d8b33-bb10-7010-c010-ee1000000010", title: "Bài 10: Genomics & Protein Structure Prediction", slug: "bai-10-genomics-protein", desc: "DNA sequence analysis. Variant calling. AlphaFold overview. Protein structure prediction basics. Genomics data pipeline.", mins: 150, sort: 9 },
        ]
      },
      {
        id: "section-hc-04",
        title: "Phần 4: Production & Compliance",
        description: "Deploy AI y tế tuân thủ regulations, clinical trials",
        sort_order: 4,
        lessons: [
          { id: "019d8b33-bb11-7011-c011-ee1100000011", title: "Bài 11: Federated Learning cho Y tế", slug: "bai-11-federated-learning-y-te", desc: "Federated Learning: train mà không share data. Privacy-preserving AI. Flower framework. Multi-hospital collaboration.", mins: 120, sort: 10 },
          { id: "019d8b33-bb12-7012-c012-ee1200000012", title: "Bài 12: Explainable AI (XAI) trong Y tế", slug: "bai-12-xai-y-te", desc: "SHAP, LIME cho medical models. Grad-CAM visualization. Attention maps. Clinical validation. Building trust với clinicians.", mins: 120, sort: 11 },
          { id: "019d8b33-bb13-7013-c013-ee1300000013", title: "Bài 13: FDA & Regulatory Compliance cho AI Medical Devices", slug: "bai-13-fda-regulatory", desc: "FDA 510(k) và De Novo pathway. SaMD classification. Clinical validation requirements. Post-market surveillance. EU MDR/AI Act.", mins: 120, sort: 12 },
          { id: "019d8b33-bb14-7014-c014-ee1400000014", title: "Bài 14: Deploy Medical AI — MLOps cho Healthcare", slug: "bai-14-deploy-medical-ai", desc: "HIPAA-compliant infrastructure. Model monitoring cho clinical AI. A/B testing trong clinical trials. Docker, Kubernetes cho medical AI.", mins: 150, sort: 13 },
          { id: "019d8b33-bb15-7015-c015-ee1500000015", title: "Bài 15: Capstone — Xây dựng Medical AI Pipeline End-to-End", slug: "bai-15-capstone-medical-ai", desc: "Dự án tổng kết: X-ray classification system hoặc Clinical NLP pipeline. Từ data processing đến deploy tuân thủ regulations.", mins: 240, sort: 14 },
        ]
      }
    ]
  },
  lessons: [] // Will generate below
};

// =====================================================
// SERIES 4: SPEECH & AUDIO AI
// =====================================================
const speechAudioAI = {
  slug: "speech-audio-ai-xu-ly-giong-noi-am-thanh",
  index: {
    id: "019d8b34-aa01-7001-b001-ff0500000001",
    title: "Speech & Audio AI: Xử lý Giọng nói & Âm thanh",
    description: `Khóa học toàn diện về AI cho Speech & Audio — từ xử lý tín hiệu âm thanh,
  Speech Recognition (ASR) với Whisper, Text-to-Speech (TTS) với VITS,
  Voice Cloning, Speaker Verification, đến Music AI. Thực hành với Python,
  PyTorch, Hugging Face, librosa, và các model state-of-the-art.`,
    featured_image: "uploads/2026/03/speech-audio-ai-xu-ly-giong-noi-am-thanh-cover.png",
    level: "intermediate",
    duration_hours: 45,
    lesson_count: 15,
    tags: [
      { name: "Speech Recognition", slug: "speech-recognition" },
      { name: "Text-to-Speech", slug: "text-to-speech" },
      { name: "Voice Cloning", slug: "voice-cloning" },
      { name: "Audio Processing", slug: "audio-processing" },
      { name: "Whisper", slug: "whisper" },
      { name: "ASR", slug: "asr" },
      { name: "TTS", slug: "tts" },
      { name: "Deep Learning", slug: "deep-learning" },
      { name: "Python", slug: "python" },
      { name: "AI", slug: "ai" },
    ],
    sections: [
      {
        id: "section-sa-01",
        title: "Phần 1: Nền tảng Xử lý Âm thanh & Tín hiệu",
        description: "Digital audio, spectrogram, features extraction",
        sort_order: 1,
        lessons: [
          { id: "019d8b34-bb01-7001-c001-ee0100000001", title: "Bài 1: Digital Audio & Signal Processing Fundamentals", slug: "bai-1-digital-audio-signal-processing", desc: "Sampling rate, bit depth, waveforms. Fourier Transform. Spectrogram, Mel spectrogram. librosa cho audio processing. Audio I/O với Python.", mins: 120, sort: 0 },
          { id: "019d8b34-bb02-7002-c002-ee0200000002", title: "Bài 2: Audio Feature Extraction — MFCC, Mel & Chromagram", slug: "bai-2-audio-feature-extraction", desc: "MFCC features. Mel-frequency analysis. Chromagram, spectral features. Feature normalization. Data augmentation cho audio.", mins: 120, sort: 1 },
          { id: "019d8b34-bb03-7003-c003-ee0300000003", title: "Bài 3: Audio Classification & Sound Event Detection", slug: "bai-3-audio-classification", desc: "CNN cho audio classification. Environmental sound classification. Sound event detection. UrbanSound8K dataset. Transfer learning cho audio.", mins: 150, sort: 2 },
        ]
      },
      {
        id: "section-sa-02",
        title: "Phần 2: Speech Recognition (ASR) — Nhận dạng Giọng nói",
        description: "Từ CTC đến Whisper, end-to-end ASR",
        sort_order: 2,
        lessons: [
          { id: "019d8b34-bb04-7004-c004-ee0400000004", title: "Bài 4: ASR Architecture — CTC, Attention & Transducer", slug: "bai-4-asr-architecture", desc: "CTC loss. Encoder-Decoder ASR. Attention mechanism. RNN-Transducer. Beam search decoding. Language model integration.", mins: 150, sort: 3 },
          { id: "019d8b34-bb05-7005-c005-ee0500000005", title: "Bài 5: Whisper & Modern ASR — OpenAI Whisper Deep Dive", slug: "bai-5-whisper-modern-asr", desc: "Whisper architecture. Multi-task: transcribe, translate, timestamps. Fine-tune Whisper cho tiếng Việt. Faster Whisper, WhisperX.", mins: 180, sort: 4 },
          { id: "019d8b34-bb06-7006-c006-ee0600000006", title: "Bài 6: Real-time ASR & Streaming Speech Recognition", slug: "bai-6-realtime-asr-streaming", desc: "Streaming vs offline ASR. Voice Activity Detection (VAD). Real-time transcription pipeline. WebSocket streaming. Edge deployment.", mins: 150, sort: 5 },
        ]
      },
      {
        id: "section-sa-03",
        title: "Phần 3: Text-to-Speech & Voice Technologies",
        description: "TTS, Voice Cloning, Speaker Recognition",
        sort_order: 3,
        lessons: [
          { id: "019d8b34-bb07-7007-c007-ee0700000007", title: "Bài 7: Text-to-Speech — Tacotron2, VITS & Modern TTS", slug: "bai-7-tts-tacotron-vits", desc: "TTS pipeline: text → mel → waveform. Tacotron2 architecture. VITS end-to-end. Vocoder: HiFi-GAN. Coqui TTS, Bark.", mins: 180, sort: 6 },
          { id: "019d8b34-bb08-7008-c008-ee0800000008", title: "Bài 8: Voice Cloning & Zero-shot TTS", slug: "bai-8-voice-cloning", desc: "Speaker embedding. Zero-shot voice cloning. XTTS, Tortoise TTS. Ethical considerations. Voice conversion vs cloning.", mins: 150, sort: 7 },
          { id: "019d8b34-bb09-7009-c009-ee0900000009", title: "Bài 9: Speaker Verification & Diarization", slug: "bai-9-speaker-verification-diarization", desc: "Speaker embeddings: d-vector, x-vector. Speaker verification pipeline. Speaker diarization. SpeechBrain framework. ECAPA-TDNN.", mins: 150, sort: 8 },
        ]
      },
      {
        id: "section-sa-04",
        title: "Phần 4: Advanced Audio AI & Production",
        description: "Music AI, speech enhancement, production deployment",
        sort_order: 4,
        lessons: [
          { id: "019d8b34-bb10-7010-c010-ee1000000010", title: "Bài 10: Speech Enhancement & Source Separation", slug: "bai-10-speech-enhancement", desc: "Noise reduction. Speech enhancement. Source separation: Demucs. Beamforming basics. Audio super-resolution.", mins: 120, sort: 9 },
          { id: "019d8b34-bb11-7011-c011-ee1100000011", title: "Bài 11: Music AI — Generation, Analysis & Transcription", slug: "bai-11-music-ai", desc: "Music generation: MusicGen, Stable Audio. Music transcription: piano → MIDI. Genre classification. Beat tracking. Music information retrieval.", mins: 150, sort: 10 },
          { id: "019d8b34-bb12-7012-c012-ee1200000012", title: "Bài 12: Emotion Recognition & Sentiment from Speech", slug: "bai-12-emotion-recognition", desc: "Speech emotion recognition. Paralinguistic features. Multi-modal: audio + text. Wav2Vec2 cho emotion. Dataset: IEMOCAP, RAVDESS.", mins: 120, sort: 11 },
          { id: "019d8b34-bb13-7013-c013-ee1300000013", title: "Bài 13: Vietnamese Speech AI — ASR & TTS Tiếng Việt", slug: "bai-13-vietnamese-speech-ai", desc: "Đặc thù tiếng Việt: tonal language, diacritics. Fine-tune Whisper cho tiếng Việt. Vietnamese TTS. VLSP datasets. Viettel/FPT AI comparison.", mins: 180, sort: 12 },
          { id: "019d8b34-bb14-7014-c014-ee1400000014", title: "Bài 14: Deploy Speech AI — Production Pipeline", slug: "bai-14-deploy-speech-ai", desc: "Model optimization: ONNX, TensorRT. Real-time serving architecture. WebSocket API. Edge deployment. Cost optimization. Monitoring.", mins: 150, sort: 13 },
          { id: "019d8b34-bb15-7015-c015-ee1500000015", title: "Bài 15: Capstone — Voice Assistant End-to-End", slug: "bai-15-capstone-voice-assistant", desc: "Dự án tổng kết: Build voice assistant pipeline — ASR + NLU + TTS. Real-time streaming. Multi-language support. Edge deployment.", mins: 240, sort: 14 },
        ]
      }
    ]
  }
};

// =====================================================
// SERIES 5: MULTIMODAL AI
// =====================================================
const multimodalAI = {
  slug: "multimodal-ai-thi-giac-ngon-ngu",
  index: {
    id: "019d8b35-aa01-7001-b001-ff0600000001",
    title: "Multimodal AI: Kết hợp Thị giác, Ngôn ngữ & Hơn thế",
    description: `Khóa học toàn diện về Multimodal AI — từ Vision-Language Models (CLIP, LLaVA),
  Visual Question Answering, Image Captioning, đến Document AI, Video Understanding.
  Thực hành với Python, PyTorch, Hugging Face Transformers, và các model
  state-of-the-art như GPT-4V, Gemini, LLaVA.`,
    featured_image: "uploads/2026/03/multimodal-ai-thi-giac-ngon-ngu-cover.png",
    level: "intermediate",
    duration_hours: 42,
    lesson_count: 14,
    tags: [
      { name: "Multimodal AI", slug: "multimodal-ai" },
      { name: "CLIP", slug: "clip" },
      { name: "LLaVA", slug: "llava" },
      { name: "Vision-Language", slug: "vision-language" },
      { name: "VQA", slug: "vqa" },
      { name: "Image Captioning", slug: "image-captioning" },
      { name: "Document AI", slug: "document-ai" },
      { name: "Deep Learning", slug: "deep-learning" },
      { name: "Python", slug: "python" },
      { name: "AI", slug: "ai" },
    ],
    sections: [
      {
        id: "section-mm-01",
        title: "Phần 1: Nền tảng Multimodal Learning",
        description: "Cross-modal representation, contrastive learning",
        sort_order: 1,
        lessons: [
          { id: "019d8b35-bb01-7001-c001-ee0100000001", title: "Bài 1: Multimodal AI là gì? — Cross-modal Learning", slug: "bai-1-multimodal-ai-la-gi", desc: "Multimodal landscape. Vision, Language, Audio modalities. Cross-modal representations. Fusion strategies: early, late, cross-attention.", mins: 90, sort: 0 },
          { id: "019d8b35-bb02-7002-c002-ee0200000002", title: "Bài 2: CLIP & Contrastive Vision-Language Learning", slug: "bai-2-clip-contrastive-learning", desc: "CLIP architecture. Contrastive loss. Zero-shot classification. Image-text retrieval. OpenCLIP, SigLIP. Fine-tune CLIP.", mins: 150, sort: 1 },
          { id: "019d8b35-bb03-7003-c003-ee0300000003", title: "Bài 3: Vision Encoders — ViT, DINOv2 & Beyond", slug: "bai-3-vision-encoders-vit", desc: "Vision Transformer (ViT). DINOv2 self-supervised. SigLIP vision encoder. Feature extraction cho multimodal. Patch embeddings.", mins: 120, sort: 2 },
        ]
      },
      {
        id: "section-mm-02",
        title: "Phần 2: Vision-Language Models (VLMs)",
        description: "LLaVA, GPT-4V, image captioning, VQA",
        sort_order: 2,
        lessons: [
          { id: "019d8b35-bb04-7004-c004-ee0400000004", title: "Bài 4: Image Captioning — Từ Attention đến Transformer", slug: "bai-4-image-captioning", desc: "Show-Attend-Tell. Transformer-based captioning. BLIP, BLIP-2. CIDEr, METEOR metrics. Vietnamese image captioning.", mins: 150, sort: 3 },
          { id: "019d8b35-bb05-7005-c005-ee0500000005", title: "Bài 5: Visual Question Answering (VQA)", slug: "bai-5-vqa", desc: "VQA task definition. Multi-modal fusion. GQA, VQAv2 datasets. Instructed VQA. Open-ended vs multiple-choice.", mins: 120, sort: 4 },
          { id: "019d8b35-bb06-7006-c006-ee0600000006", title: "Bài 6: LLaVA & Open-source VLMs", slug: "bai-6-llava-vlm", desc: "LLaVA architecture: vision encoder + LLM. Visual instruction tuning. LLaVA-NeXT. Qwen-VL. InternVL. Fine-tune VLM.", mins: 180, sort: 5 },
          { id: "019d8b35-bb07-7007-c007-ee0700000007", title: "Bài 7: GPT-4V, Gemini & Commercial VLMs", slug: "bai-7-gpt4v-gemini", desc: "GPT-4V capabilities. Gemini multimodal. Claude vision. API integration. Prompt engineering cho VLMs. Cost optimization.", mins: 120, sort: 6 },
        ]
      },
      {
        id: "section-mm-03",
        title: "Phần 3: Document AI & Video Understanding",
        description: "OCR, document parsing, video captioning",
        sort_order: 3,
        lessons: [
          { id: "019d8b35-bb08-7008-c008-ee0800000008", title: "Bài 8: Document AI — OCR, Layout Analysis & Extraction", slug: "bai-8-document-ai-ocr", desc: "Modern OCR: PaddleOCR, EasyOCR. Document layout analysis. Table extraction. LayoutLM family. Invoice/receipt processing.", mins: 150, sort: 7 },
          { id: "019d8b35-bb09-7009-c009-ee0900000009", title: "Bài 9: Video Understanding & Temporal AI", slug: "bai-9-video-understanding", desc: "Video classification. Temporal modeling. Video QA. Video captioning. Action recognition. VideoLLM, Video-LLaVA.", mins: 150, sort: 8 },
          { id: "019d8b35-bb10-7010-c010-ee1000000010", title: "Bài 10: Text-to-Image Generation & Editing", slug: "bai-10-text-to-image", desc: "Stable Diffusion multimodal pipeline. InstructPix2Pix. Image editing with text. Grounding DINO + SAM. Visual grounding.", mins: 150, sort: 9 },
        ]
      },
      {
        id: "section-mm-04",
        title: "Phần 4: Advanced Multimodal & Production",
        description: "RAG multimodal, embodied AI, production deploy",
        sort_order: 4,
        lessons: [
          { id: "019d8b35-bb11-7011-c011-ee1100000011", title: "Bài 11: Multimodal RAG — Retrieval with Images & Documents", slug: "bai-11-multimodal-rag", desc: "Visual document retrieval. ColPali. Multimodal embeddings. Image + text RAG pipeline. PDF parsing + VLM.", mins: 150, sort: 10 },
          { id: "019d8b35-bb12-7012-c012-ee1200000012", title: "Bài 12: Embodied AI & Robotics Vision-Language", slug: "bai-12-embodied-ai", desc: "Vision-Language-Action models. RT-2. Robot instruction following. Spatial reasoning. Scene understanding for robotics.", mins: 120, sort: 11 },
          { id: "019d8b35-bb13-7013-c013-ee1300000013", title: "Bài 13: Deploy Multimodal AI — Optimization & Serving", slug: "bai-13-deploy-multimodal", desc: "Model quantization cho VLMs. vLLM multimodal serving. Batch processing images. Edge deployment. Cost optimization.", mins: 150, sort: 12 },
          { id: "019d8b35-bb14-7014-c014-ee1400000014", title: "Bài 14: Capstone — Multimodal Assistant Pipeline", slug: "bai-14-capstone-multimodal", desc: "Dự án tổng kết: Build multimodal AI assistant — image understanding + document extraction + conversation. Production-ready pipeline.", mins: 240, sort: 13 },
        ]
      }
    ]
  }
};

// =====================================================
// SERIES 6: RECOMMENDATION SYSTEMS
// =====================================================
const recommendationSystems = {
  slug: "he-thong-goi-y-recommendation-systems",
  index: {
    id: "019d8b36-aa01-7001-b001-ff0700000001",
    title: "Hệ thống Gợi ý (Recommendation Systems): Từ Cơ bản đến Production",
    description: `Khóa học toàn diện về Recommendation Systems — từ Collaborative Filtering,
  Content-based, Matrix Factorization đến Deep Learning RecSys với Two-Tower,
  Graph Neural Networks, Sequence Models. Hands-on với Python, PyTorch,
  LightFM, và deploy production-ready recommendation engine.`,
    featured_image: "uploads/2026/03/he-thong-goi-y-recommendation-systems-cover.png",
    level: "intermediate",
    duration_hours: 42,
    lesson_count: 14,
    tags: [
      { name: "Recommendation Systems", slug: "recommendation-systems" },
      { name: "Collaborative Filtering", slug: "collaborative-filtering" },
      { name: "Matrix Factorization", slug: "matrix-factorization" },
      { name: "Deep RecSys", slug: "deep-recsys" },
      { name: "Two-Tower", slug: "two-tower" },
      { name: "Graph Neural Networks", slug: "graph-neural-networks" },
      { name: "Personalization", slug: "personalization" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "Python", slug: "python" },
      { name: "AI", slug: "ai" },
    ],
    sections: [
      {
        id: "section-rec-01",
        title: "Phần 1: Nền tảng Recommendation Systems",
        description: "Collaborative filtering, content-based, hybrid approaches",
        sort_order: 1,
        lessons: [
          { id: "019d8b36-bb01-7001-c001-ee0100000001", title: "Bài 1: Recommendation Systems là gì? — Tổng quan & Taxonomy", slug: "bai-1-recsys-tong-quan", desc: "RecSys landscape. Collaborative vs Content-based vs Hybrid. Explicit vs Implicit feedback. Evaluation metrics: NDCG, MAP, Hit Rate.", mins: 90, sort: 0 },
          { id: "019d8b36-bb02-7002-c002-ee0200000002", title: "Bài 2: Collaborative Filtering — User-based & Item-based", slug: "bai-2-collaborative-filtering", desc: "User-based CF: similarity metrics. Item-based CF. Neighborhood methods. Cosine similarity, Pearson correlation. Cold-start problem.", mins: 120, sort: 1 },
          { id: "019d8b36-bb03-7003-c003-ee0300000003", title: "Bài 3: Matrix Factorization — SVD, ALS & BPR", slug: "bai-3-matrix-factorization", desc: "SVD decomposition. ALS: Alternating Least Squares. BPR: Bayesian Personalized Ranking. Implicit feedback handling. Surprise library.", mins: 150, sort: 2 },
        ]
      },
      {
        id: "section-rec-02",
        title: "Phần 2: Deep Learning cho Recommendation",
        description: "Neural collaborative filtering, embeddings, two-tower",
        sort_order: 2,
        lessons: [
          { id: "019d8b36-bb04-7004-c004-ee0400000004", title: "Bài 4: Content-based & Feature Engineering cho RecSys", slug: "bai-4-content-based-features", desc: "Content-based filtering. TF-IDF, embedding features. User/item profiling. Feature stores cho RecSys. LightFM hybrid.", mins: 120, sort: 3 },
          { id: "019d8b36-bb05-7005-c005-ee0500000005", title: "Bài 5: Neural Collaborative Filtering & Embedding", slug: "bai-5-neural-cf-embedding", desc: "NCF architecture. Embedding layers. GMF + MLP. Wide & Deep. DeepFM. Feature interaction learning.", mins: 150, sort: 4 },
          { id: "019d8b36-bb06-7006-c006-ee0600000006", title: "Bài 6: Two-Tower Architecture & Retrieval", slug: "bai-6-two-tower-retrieval", desc: "Two-tower model: user tower + item tower. Approximate Nearest Neighbor (ANN). FAISS, ScaNN. Candidate generation at scale.", mins: 150, sort: 5 },
          { id: "019d8b36-bb07-7007-c007-ee0700000007", title: "Bài 7: Sequence Models — GRU4Rec, SASRec & Transformers", slug: "bai-7-sequence-models-recsys", desc: "Session-based recommendations. GRU4Rec. Self-Attention: SASRec, BERT4Rec. Transformer cho sequential recommendation.", mins: 150, sort: 6 },
        ]
      },
      {
        id: "section-rec-03",
        title: "Phần 3: Advanced RecSys — Knowledge Graph, Multi-task & GNN",
        description: "Graph-based, knowledge-aware, multi-objective recommendation",
        sort_order: 3,
        lessons: [
          { id: "019d8b36-bb08-7008-c008-ee0800000008", title: "Bài 8: Graph Neural Networks cho Recommendation", slug: "bai-8-gnn-recommendation", desc: "User-item bipartite graph. LightGCN. PinSage. Message passing cho recommendations. PyG implementation.", mins: 150, sort: 7 },
          { id: "019d8b36-bb09-7009-c009-ee0900000009", title: "Bài 9: Knowledge Graph Recommendation", slug: "bai-9-knowledge-graph-recsys", desc: "Knowledge Graph embeddings. KGAT. Side information integration. Explainable recommendations qua KG paths.", mins: 120, sort: 8 },
          { id: "019d8b36-bb10-7010-c010-ee1000000010", title: "Bài 10: Multi-task & Multi-objective Ranking", slug: "bai-10-multi-task-ranking", desc: "Multi-task learning: CTR + CVR. MMOE, PLE architectures. Re-ranking. Diversity, fairness, novelty objectives.", mins: 150, sort: 9 },
        ]
      },
      {
        id: "section-rec-04",
        title: "Phần 4: RecSys Production — Deploy & Scale",
        description: "Production architecture, A/B testing, real-time serving",
        sort_order: 4,
        lessons: [
          { id: "019d8b36-bb11-7011-c011-ee1100000011", title: "Bài 11: LLM-powered Recommendations", slug: "bai-11-llm-recommendations", desc: "LLM as recommender. Conversational RecSys. Prompt-based recommendation. RAG cho product search. LLM + traditional RecSys hybrid.", mins: 150, sort: 10 },
          { id: "019d8b36-bb12-7012-c012-ee1200000012", title: "Bài 12: Production RecSys Architecture", slug: "bai-12-production-recsys-architecture", desc: "3-stage pipeline: candidate gen → scoring → re-ranking. Feature store. Real-time vs batch. System design cho million-scale.", mins: 150, sort: 11 },
          { id: "019d8b36-bb13-7013-c013-ee1300000013", title: "Bài 13: A/B Testing & Evaluation cho RecSys", slug: "bai-13-ab-testing-evaluation", desc: "Online vs offline metrics. A/B testing framework. Interleaving. Counterfactual evaluation. Business metrics alignment.", mins: 120, sort: 12 },
          { id: "019d8b36-bb14-7014-c014-ee1400000014", title: "Bài 14: Capstone — E-commerce Recommendation Engine", slug: "bai-14-capstone-recsys", desc: "Dự án tổng kết: Build e-commerce recommendation engine end-to-end. Two-tower retrieval + re-ranking + A/B testing + deploy.", mins: 240, sort: 13 },
        ]
      }
    ]
  }
};

// =====================================================
// SERIES 7: TIME SERIES AI
// =====================================================
const timeSeriesAI = {
  slug: "time-series-ai-du-doan-chuoi-thoi-gian",
  index: {
    id: "019d8b37-aa01-7001-b001-ff0800000001",
    title: "Time Series AI: Dự đoán & Phân tích Chuỗi Thời gian",
    description: `Khóa học toàn diện về Time Series AI — từ Statistical Methods (ARIMA, ETS),
  Machine Learning (XGBoost, LightGBM), đến Deep Learning (LSTM, Transformer,
  TimesFM). Ứng dụng forecasting, anomaly detection, classification. Thực hành
  với Python, statsmodels, scikit-learn, PyTorch, và các framework chuyên dụng.`,
    featured_image: "uploads/2026/03/time-series-ai-du-doan-chuoi-thoi-gian-cover.png",
    level: "intermediate",
    duration_hours: 42,
    lesson_count: 14,
    tags: [
      { name: "Time Series", slug: "time-series" },
      { name: "Forecasting", slug: "forecasting" },
      { name: "Anomaly Detection", slug: "anomaly-detection" },
      { name: "ARIMA", slug: "arima" },
      { name: "LSTM", slug: "lstm" },
      { name: "Transformer", slug: "transformer" },
      { name: "Prophet", slug: "prophet" },
      { name: "Deep Learning", slug: "deep-learning" },
      { name: "Python", slug: "python" },
      { name: "AI", slug: "ai" },
    ],
    sections: [
      {
        id: "section-ts-01",
        title: "Phần 1: Nền tảng Time Series Analysis",
        description: "EDA, decomposition, stationarity, statistical tests",
        sort_order: 1,
        lessons: [
          { id: "019d8b37-bb01-7001-c001-ee0100000001", title: "Bài 1: Time Series Fundamentals — EDA & Decomposition", slug: "bai-1-time-series-fundamentals", desc: "Time series components: trend, seasonality, residual. STL decomposition. Stationarity tests: ADF, KPSS. ACF/PACF plots. pandas time series.", mins: 120, sort: 0 },
          { id: "019d8b37-bb02-7002-c002-ee0200000002", title: "Bài 2: Statistical Models — ARIMA, SARIMA & ETS", slug: "bai-2-arima-sarima-ets", desc: "ARIMA(p,d,q) model. Seasonal ARIMA. Exponential Smoothing (ETS). Model selection: AIC, BIC. statsmodels implementation.", mins: 150, sort: 1 },
          { id: "019d8b37-bb03-7003-c003-ee0300000003", title: "Bài 3: Prophet & Modern Statistical Forecasting", slug: "bai-3-prophet-forecasting", desc: "Facebook Prophet. Additive/multiplicative seasonality. Holiday effects. Change points. NeuralProphet. Comparison benchmarks.", mins: 120, sort: 2 },
        ]
      },
      {
        id: "section-ts-02",
        title: "Phần 2: Machine Learning cho Time Series",
        description: "Feature engineering, tree models, multi-step forecasting",
        sort_order: 2,
        lessons: [
          { id: "019d8b37-bb04-7004-c004-ee0400000004", title: "Bài 4: Feature Engineering cho Time Series", slug: "bai-4-feature-engineering", desc: "Lag features, rolling statistics. Calendar features. Fourier features cho seasonality. Target encoding. tsfresh auto features.", mins: 120, sort: 3 },
          { id: "019d8b37-bb05-7005-c005-ee0500000005", title: "Bài 5: XGBoost & LightGBM cho Forecasting", slug: "bai-5-xgboost-lightgbm", desc: "Tree-based models cho time series. Direct vs recursive forecasting. Multi-step prediction. Cross-validation cho time series. Kaggle winning solutions.", mins: 150, sort: 4 },
          { id: "019d8b37-bb06-7006-c006-ee0600000006", title: "Bài 6: Multi-variate & Hierarchical Forecasting", slug: "bai-6-multivariate-hierarchical", desc: "Vector Autoregression (VAR). Granger causality. Hierarchical time series. Reconciliation methods. Global vs local models.", mins: 120, sort: 5 },
        ]
      },
      {
        id: "section-ts-03",
        title: "Phần 3: Deep Learning cho Time Series",
        description: "LSTM, Transformer, foundation models cho forecasting",
        sort_order: 3,
        lessons: [
          { id: "019d8b37-bb07-7007-c007-ee0700000007", title: "Bài 7: LSTM & Sequence Models cho Time Series", slug: "bai-7-lstm-sequence-models", desc: "LSTM architecture cho forecasting. Seq2Seq. Encoder-decoder. Attention mechanism. DeepAR. PyTorch implementation.", mins: 150, sort: 6 },
          { id: "019d8b37-bb08-7008-c008-ee0800000008", title: "Bài 8: Transformers cho Time Series — PatchTST, iTransformer", slug: "bai-8-transformers-time-series", desc: "Transformer adaptation cho time series. PatchTST. iTransformer. Informer, Autoformer. Channel-independent vs channel-mixing.", mins: 180, sort: 7 },
          { id: "019d8b37-bb09-7009-c009-ee0900000009", title: "Bài 9: Foundation Models — TimesFM, Chronos & Moirai", slug: "bai-9-foundation-models", desc: "Pre-trained time series models. Google TimesFM. Amazon Chronos. Salesforce Moirai. Zero-shot forecasting. Fine-tuning strategies.", mins: 150, sort: 8 },
        ]
      },
      {
        id: "section-ts-04",
        title: "Phần 4: Ứng dụng & Production",
        description: "Anomaly detection, classification, production forecasting",
        sort_order: 4,
        lessons: [
          { id: "019d8b37-bb10-7010-c010-ee1000000010", title: "Bài 10: Anomaly Detection trong Time Series", slug: "bai-10-anomaly-detection", desc: "Statistical methods: Z-score, IQR. Isolation Forest. Autoencoders cho anomaly. Transformer-based detection. Real-time monitoring.", mins: 150, sort: 9 },
          { id: "019d8b37-bb11-7011-c011-ee1100000011", title: "Bài 11: Time Series Classification & Clustering", slug: "bai-11-classification-clustering", desc: "DTW distance. Shapelet-based. Rocket/MiniRocket. InceptionTime. Time series clustering. Transfer learning.", mins: 120, sort: 10 },
          { id: "019d8b37-bb12-7012-c012-ee1200000012", title: "Bài 12: Financial Time Series & Quantitative Trading", slug: "bai-12-financial-time-series", desc: "Stock prediction challenges. Technical indicators. Alpha factor research. Backtesting framework. Risk management. ML limitations.", mins: 150, sort: 11 },
          { id: "019d8b37-bb13-7013-c013-ee1300000013", title: "Bài 13: Production Forecasting Pipeline", slug: "bai-13-production-pipeline", desc: "MLOps cho forecasting. Model monitoring & retraining. Feature store. Batch vs real-time prediction. Uncertainty quantification.", mins: 150, sort: 12 },
          { id: "019d8b37-bb14-7014-c014-ee1400000014", title: "Bài 14: Capstone — Demand Forecasting System", slug: "bai-14-capstone-forecasting", desc: "Dự án tổng kết: Build demand forecasting system — EDA, multiple models comparison, ensemble, deploy pipeline. Dashboard & monitoring.", mins: 240, sort: 13 },
        ]
      }
    ]
  }
};

// =====================================================
// HELPER FUNCTIONS
// =====================================================

function generateIndexMd(series) {
  const s = series.index;
  let md = `---
id: ${s.id}
title: "${s.title}"
slug: ${series.slug}
description: >-
  ${s.description}
featured_image: ${s.featured_image}
level: ${s.level}
duration_hours: ${s.duration_hours}
lesson_count: ${s.lesson_count}
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-31T10:00:00.000000Z'
created_at: '2026-03-31T10:00:00.000000Z'
author:
  id: ${AUTHOR.id}
  name: ${AUTHOR.name}
  avatar: ${AUTHOR.avatar}
category:
  id: ${CATEGORY.id}
  name: ${CATEGORY.name}
  slug: ${CATEGORY.slug}
tags:
${s.tags.map(t => `  - name: ${t.name}\n    slug: ${t.slug}`).join("\n")}
sections:
`;

  for (const section of s.sections) {
    md += `  - id: ${section.id}
    title: "${section.title}"
    description: ${section.description}
    sort_order: ${section.sort_order}
    lessons:
`;
    for (const l of section.lessons) {
      md += `      - id: ${l.id}
        title: '${l.title}'
        slug: ${l.slug}
        description: >-
          ${l.desc}
        duration_minutes: ${l.mins}
        is_free: true
        sort_order: ${l.sort}
        video_url: null
`;
    }
  }
  md += "---\n";
  return md;
}

function getChapterDir(seriesSlug, sectionIdx, sectionTitle) {
  const num = String(sectionIdx + 1).padStart(2, "0");
  const slug = sectionTitle
    .replace(/^Phần \d+:\s*/, "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d").replace(/Đ/g, "D")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .substring(0, 50)
    .replace(/-$/, "");
  return `${num}-phan-${sectionIdx + 1}-${slug}`;
}

function getLessonFile(lesson) {
  const sortStr = String(lesson.sort + 2).padStart(2, "0");
  const baiMatch = lesson.title.match(/Bài (\d+):/);
  const baiNum = baiMatch ? baiMatch[1] : lesson.sort + 1;
  const titleSlug = lesson.slug.replace(/^bai-\d+-/, "");
  return `${sortStr}-bai-${baiNum}-${titleSlug}.md`;
}

function generateLessonContent(lesson, courseId, courseTitle, courseSlug) {
  return `---
id: ${lesson.id}
title: "${lesson.title}"
slug: ${lesson.slug}
description: >-
  ${lesson.desc}
duration_minutes: ${lesson.mins}
is_free: true
video_url: null
sort_order: ${lesson.sort}
section_title: "${lesson.sectionTitle}"
course:
  id: ${courseId}
  title: "${courseTitle}"
  slug: ${courseSlug}
---

${lesson.body || generateDefaultBody(lesson)}
`;
}

function generateDefaultBody(lesson) {
  const title = lesson.title.replace(/^Bài \d+:\s*/, "");
  const isCapstone = lesson.title.toLowerCase().includes("capstone");

  if (isCapstone) {
    return `## Giới thiệu

Capstone project áp dụng toàn bộ kiến thức đã học trong series vào một bài toán thực tế end-to-end.

---

## Yêu cầu dự án

### Mô tả
${lesson.desc}

### Deliverables

| Item | Description | Weight |
|------|-------------|--------|
| Code | Clean, documented GitHub repository | 30% |
| Report | Architecture decisions, results analysis | 30% |
| Demo | Interactive demo (web app hoặc video) | 20% |
| Documentation | README, API docs, deployment guide | 20% |

---

## Pipeline đề xuất

1. **Data Collection & Preprocessing**: Thu thập và xử lý dữ liệu
2. **Model Development**: Xây dựng và train model
3. **Evaluation**: Đánh giá với metrics phù hợp
4. **Optimization**: Tối ưu performance và costs
5. **Deployment**: Deploy lên production
6. **Monitoring**: Thiết lập monitoring & alerting

---

## Tổng kết

Chúc mừng bạn đã hoàn thành series! Hãy áp dụng kiến thức vào các dự án thực tế.`;
  }

  return `## Giới thiệu

${lesson.desc}

---

## 1. Tổng quan

### Khái niệm chính

${title} là một chủ đề quan trọng trong lĩnh vực AI hiện đại.

---

## 2. Kiến trúc & Nguyên lý

### Core Architecture

\`\`\`python
# Example implementation
import torch
import torch.nn as nn

class ExampleModel(nn.Module):
    def __init__(self, input_dim, output_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, 256),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(256, 128),
            nn.ReLU(),
            nn.Linear(128, output_dim),
        )
    
    def forward(self, x):
        return self.net(x)
\`\`\`

---

## 3. Thực hành

### Setup

\`\`\`bash
pip install torch transformers datasets
\`\`\`

### Training Pipeline

\`\`\`python
# Training loop
model = ExampleModel(input_dim=768, output_dim=10)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-4)
criterion = nn.CrossEntropyLoss()

for epoch in range(10):
    for batch in train_loader:
        optimizer.zero_grad()
        outputs = model(batch["input"])
        loss = criterion(outputs, batch["label"])
        loss.backward()
        optimizer.step()
\`\`\`

---

## 4. Best Practices

| Aspect | Recommendation |
|--------|---------------|
| Data | Quality over quantity |
| Model | Start simple, scale up |
| Training | Monitor loss curves |
| Evaluation | Use appropriate metrics |

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| Architecture | Phù hợp với bài toán |
| Training | Careful hyperparameter tuning |
| Evaluation | Multiple metrics |`;
}

// =====================================================
// MAIN: Create all 5 series
// =====================================================

const allSeries = [
  healthcareAI,
  speechAudioAI,
  multimodalAI,
  recommendationSystems,
  timeSeriesAI,
];

for (const series of allSeries) {
  const seriesDir = path.join(SERIES_BASE, series.slug);

  // 1. Create index.md
  fs.mkdirSync(seriesDir, { recursive: true });
  fs.writeFileSync(path.join(seriesDir, "index.md"), generateIndexMd(series));
  console.log(`✅ Created ${series.slug}/index.md`);

  // 2. Create lesson files
  let lessonCount = 0;
  for (let si = 0; si < series.index.sections.length; si++) {
    const section = series.index.sections[si];
    const chapterDirName = getChapterDir(series.slug, si, section.title);
    const lessonsDir = path.join(seriesDir, "chapters", chapterDirName, "lessons");
    fs.mkdirSync(lessonsDir, { recursive: true });

    for (const lesson of section.lessons) {
      const lessonWithSection = { ...lesson, sectionTitle: section.title };
      const fileName = getLessonFile(lesson);
      const content = generateLessonContent(
        lessonWithSection,
        series.index.id,
        series.index.title,
        series.slug
      );
      fs.writeFileSync(path.join(lessonsDir, fileName), content);
      lessonCount++;
    }
  }
  console.log(`   📄 Created ${lessonCount} lesson files`);
}

console.log("\n🎉 All 5 series created successfully!");
