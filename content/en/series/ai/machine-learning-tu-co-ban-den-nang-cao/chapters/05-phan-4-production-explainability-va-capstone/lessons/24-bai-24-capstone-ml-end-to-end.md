---
id: 019d8b39-bb24-7024-c024-ee2400000024
title: 'Lesson 24: Capstone — End-to-end ML project + demo'
slug: bai-24-capstone-ml-end-to-end
description: >-
  Complete a project according to the rubric: baseline -> pipeline -> tuning ->
  evaluation -> API -> monitoring -> 1-page report for business.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 23
section_title: 'Part 4: Production, Explainability and Capstone'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7565" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7565)"/>

  <!-- Decorations -->
  <g>
    <circle cx="665" cy="265" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="730" cy="170" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="795" cy="75" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="860" cy="240" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="925" cy="145" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="195" x2="1100" y2="275" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="225" x2="1050" y2="295" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1020.9807621135332,180 1020.9807621135332,210 995,225 969.0192378864668,210 969.0192378864668,180 995,165" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI & ML — Lesson 23</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 24: Capstone — End-to-end ML project +</tspan>
      <tspan x="60" dy="42">demo</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Production, Explainability and Capstone</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Lesson objectives

- Complete end-to-end ML projects according to clear rubrics
- Present results from a technical and business perspective
- Prepare portfolio ready for interview

## Submission checklist

- [ ] Problem description, metric and baseline
- [ ] Preprocessing pipeline + reproducible training model
- [ ] Validation and error analysis results
- [ ] Meaningful explainability (SHAP/permutation)
- [ ] The inferencing API is active and has run instructions
- [ ] Monitoring plan (drift, retraining, alert)
- [ ] 1-page report for stakeholders

## Capstone scoring rubric (100 points)

- Correct problem definition and metric: 10
- Data quality and preprocessing: 15
- Baseline and systematic improvement: 15
- Model evaluation + CV + tuning: 20
- Error analysis + result interpretation: 15
- Serving + reset + run instructions: 15
- Monitoring/retraining + business reporting: 10

## Implementation instructions

1. Choose a specific use case (churn, fraud, demand forecasting, pricing).
2. Use a simple baseline before using a complex model.
3. Only optimize the set metrics from the beginning, don't change the metrics midway.
4. Pack all preprocessing into the pipeline to avoid leakage.
5. Write a short README: how to train, eval, serve and monitor after deployment.

## Expected output

You have a complete project to include in your CV/portfolio and demo during the interview.

## Suggested capstone submission route

1. Conclusion and measurable success criteria.
2. Baseline pin, primary metric set and secondary metric set.
3. Complete pipeline + error analysis report.
4. Has a minimal inference demo (batch or API).
5. Submit the final report according to the 100-point rubric.

## Artifact is required

- Dataset card describes data and risks.
- Model card describes the scope of use, limitations and fairness notes.
- Repo has instructions to rerun the entire process.

## Self-assessment before submission

- Are the results reproducible on another machine?
- Has the risk of leakage or bias been stated transparently?
- Is there a plan for monitoring if put into production?
