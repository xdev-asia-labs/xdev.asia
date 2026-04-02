import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    Linking,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useColorScheme, Colors } from '@/lib/utils';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme];

    const features = [
        {
            icon: 'newspaper',
            title: 'Blog Công nghệ',
            description: 'Bài viết về lập trình, AI, DevOps',
            route: '/blog',
        },
        {
            icon: 'book',
            title: 'Series Học tập',
            description: 'Khóa học và series bài viết',
            route: '/series',
        },
        {
            icon: 'grid',
            title: 'Dự án Showcase',
            description: 'Các dự án thực tế đã triển khai',
            route: '/showcase',
        },
        {
            icon: 'bookmark',
            title: 'Đã lưu',
            description: 'Nội dung bạn đã đánh dấu',
            route: '/bookmarks',
        },
    ];

    const socials = [
        { icon: 'logo-github', url: 'https://github.com/xdev-asia-labs' },
        { icon: 'logo-linkedin', url: 'https://www.linkedin.com/in/duydev/' },
        { icon: 'logo-facebook', url: 'https://www.facebook.com/duydev' },
    ];

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={require('@/assets/icon.png')}
                    style={styles.logo}
                />
                <Text style={[styles.title, { color: colors.text }]}>xDev Asia</Text>
                <Text style={[styles.subtitle, { color: colors.placeholder }]}>
                    Blog cá nhân về lập trình, AI, DevOps và công nghệ
                </Text>
            </View>

            {/* Features Grid */}
            <View style={styles.featuresGrid}>
                {features.map((feature, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.featureCard, { backgroundColor: colors.card }]}
                        onPress={() => router.push(feature.route as any)}
                    >
                        <Ionicons
                            name={feature.icon as any}
                            size={32}
                            color={colors.primary}
                        />
                        <Text style={[styles.featureTitle, { color: colors.text }]}>
                            {feature.title}
                        </Text>
                        <Text style={[styles.featureDesc, { color: colors.placeholder }]}>
                            {feature.description}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Quick Actions */}
            <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: colors.text }]}>
                    Khám phá nhanh
                </Text>
                <TouchableOpacity
                    style={[styles.actionButton, { backgroundColor: colors.primary }]}
                    onPress={() => router.push('/search')}
                >
                    <Ionicons name="search" size={20} color="#fff" />
                    <Text style={styles.actionButtonText}>Tìm kiếm nội dung</Text>
                </TouchableOpacity>
            </View>

            {/* Social Links */}
            <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: colors.text }]}>
                    Kết nối
                </Text>
                <View style={styles.socialLinks}>
                    {socials.map((social, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.socialButton, { backgroundColor: colors.card }]}
                            onPress={() => Linking.openURL(social.url)}
                        >
                            <Ionicons name={social.icon as any} size={24} color={colors.text} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={[styles.footerText, { color: colors.placeholder }]}>
                    © 2026 xDev Asia. Made with ❤️ in Vietnam
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 20,
        marginBottom: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
    },
    featuresGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 12,
        gap: 12,
    },
    featureCard: {
        width: '47%',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        minHeight: 140,
    },
    featureTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 4,
    },
    featureDesc: {
        fontSize: 12,
        textAlign: 'center',
    },
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 12,
        gap: 8,
    },
    actionButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    socialLinks: {
        flexDirection: 'row',
        gap: 12,
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        padding: 20,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
    },
});
