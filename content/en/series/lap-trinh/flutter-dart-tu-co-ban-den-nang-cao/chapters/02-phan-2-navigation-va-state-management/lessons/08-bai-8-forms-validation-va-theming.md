---
id: 019d8b40-e204-7001-b006-flutter000204
title: 'Lesson 8: Forms, Validation & Theming'
slug: bai-8-forms-validation-va-theming
description: >-
  Form widgets, TextFormField, validation. flutter_form_builder, custom form
  fields. ThemeData, ColorScheme, TextTheme. Dark mode, dynamic themes. Custom
  fonts, Material 3.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 'Part 2: Navigation & State Management'
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: From Basics to Advanced'
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6947" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6947)"/>

  <!-- Decorations -->
  <g>
    <circle cx="662" cy="156" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="724" cy="198" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="786" cy="240" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="848" cy="282" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="910" cy="64" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="76" x2="1100" y2="156" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="106" x2="1050" y2="176" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="952.8467875173176,110.5 952.8467875173176,141.5 926,157 899.1532124826824,141.5 899.1532124826824,110.50000000000001 926,95" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 Programming — Lesson 8</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 8: Forms, Validation & Theming</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter & Dart: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Navigation & State Management</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-forms"><strong>1. Forms & Validation</strong></h2>

<pre><code class="language-dart">class RegisterForm extends StatefulWidget {
  const RegisterForm({super.key});

  @override
  State&lt;RegisterForm&gt; createState() => _RegisterFormState();
}

class _RegisterFormState extends State&lt;RegisterForm&gt; {
  final _formKey = GlobalKey&lt;FormState&gt;();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: [
          TextFormField(
            controller: _emailController,
            decoration: const InputDecoration(labelText: 'Email'),
            keyboardType: TextInputType.emailAddress,
            validator: (value) {
              if (value == null || value.isEmpty) return 'Email là bắt buộc';
              final emailRegex = RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');
              if (!emailRegex.hasMatch(value)) return 'Email không hợp lệ';
              return null;
            },
          ),
          TextFormField(
            controller: _passwordController,
            obscureText: true,
            decoration: const InputDecoration(labelText: 'Mật khẩu'),
            validator: (value) {
              if (value == null || value.length &lt; 8) return 'Tối thiểu 8 ký tự';
              return null;
            },
          ),
          ElevatedButton(
            onPressed: () {
              if (_formKey.currentState!.validate()) {
                // Submit
              }
            },
            child: const Text('Đăng ký'),
          ),
        ],
      ),
    );
  }
}
</code></pre>

<h2 id="2-form-builder"><strong>2. Flutter Form Builder</strong></h2>

<pre><code class="language-dart">FormBuilder(
  key: _formKey,
  child: Column(
    children: [
      FormBuilderTextField(
        name: 'email',
        decoration: const InputDecoration(labelText: 'Email'),
        validator: FormBuilderValidators.compose([
          FormBuilderValidators.required(),
          FormBuilderValidators.email(),
        ]),
      ),
      FormBuilderDropdown(
        name: 'role',
        decoration: const InputDecoration(labelText: 'Vai trò'),
        items: ['Admin', 'User', 'Editor']
            .map((role) => DropdownMenuItem(value: role, child: Text(role)))
            .toList(),
      ),
      FormBuilderDateTimePicker(
        name: 'dob',
        decoration: const InputDecoration(labelText: 'Ngày sinh'),
        inputType: InputType.date,
      ),
    ],
  ),
);
</code></pre>

<h2 id="3-theming"><strong>3. ThemeData & Materials 3</strong></h2>

<pre><code class="language-dart">MaterialApp(
  theme: ThemeData(
    useMaterial3: true,
    colorSchemeSeed: Colors.indigo,
    brightness: Brightness.light,
    textTheme: GoogleFonts.interTextTheme(),
    inputDecorationTheme: InputDecorationTheme(
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
      filled: true,
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      ),
    ),
  ),
  darkTheme: ThemeData(
    useMaterial3: true,
    colorSchemeSeed: Colors.indigo,
    brightness: Brightness.dark,
  ),
  themeMode: ThemeMode.system,
);
</code></pre>

<h2 id="4-dynamic-theme"><strong>4. Dynamic Theming</strong></h2>

<pre><code class="language-dart">// Dùng Riverpod quản lý theme
final themeModeProvider = StateProvider&lt;ThemeMode&gt;((ref) => ThemeMode.system);

class MyApp extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final themeMode = ref.watch(themeModeProvider);
    return MaterialApp(
      themeMode: themeMode,
      theme: ThemeData(useMaterial3: true, colorSchemeSeed: Colors.indigo),
      darkTheme: ThemeData(useMaterial3: true, colorSchemeSeed: Colors.indigo, brightness: Brightness.dark),
      home: const HomePage(),
    );
  }
}

// Toggle trong Settings
Switch(
  value: ref.watch(themeModeProvider) == ThemeMode.dark,
  onChanged: (isDark) {
    ref.read(themeModeProvider.notifier).state = isDark ? ThemeMode.dark : ThemeMode.light;
  },
);
</code></pre>

<p>Next article: <strong>HTTP & REST API Integration</strong>.</p>
