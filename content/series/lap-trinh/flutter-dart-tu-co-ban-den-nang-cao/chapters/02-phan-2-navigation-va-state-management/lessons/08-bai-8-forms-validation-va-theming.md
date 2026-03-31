---
id: 019d8b40-e204-7001-b006-flutter000204
title: 'Bài 8: Forms, Validation & Theming'
slug: bai-8-forms-validation-va-theming
description: >-
  Form widget, TextFormField, validation. flutter_form_builder, custom form fields.
  ThemeData, ColorScheme, TextTheme. Dark mode, dynamic theming. Custom fonts, Material 3.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 2: Navigation & State Management"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-forms"><strong>1. Form & Validation</strong></h2>

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

<h2 id="3-theming"><strong>3. ThemeData & Material 3</strong></h2>

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

<p>Bài tiếp theo: <strong>HTTP & REST API Integration</strong>.</p>
