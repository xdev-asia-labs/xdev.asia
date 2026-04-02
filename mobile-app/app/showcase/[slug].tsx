import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    Share,
    Linking,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { api } from '@/lib/api';
import { bookmarkService } from '@/lib/bookmarks';
import { ShowcaseProject } from '@/lib/types';
import { useColorScheme, Colors } from '@/lib/utils';
import Ionicons from '@expo/vector-icons/Ionicons';
import Markdown from 'react-native-markdown-display';

export default function ShowcaseDetailScreen() {
    const { slug } = useLocalSearchParams<{ slug: string }>();
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme];

    const [project, setProject] = useState<ShowcaseProject | null>(null);
    const [loading, setLoading] = useState(true);
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        if (slug) {
            loadProject();
        }
    }, [slug]);

    const loadProject = async () => {
        setLoading(true);
        try {
            const data = await api.getShowcase(slug);
            setProject(data);
            if (data) {
                const bookmarked = await bookmarkService.isBookmarked(data.id, 'showcase');
                setIsBookmarked(bookmarked);
            }
        } catch (error) {
            console.error('Error loading showcase:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleBookmark = async () => {
        if (!project) return;

        if (isBookmarked) {
            await bookmarkService.removeBookmark(project.id, 'showcase');
            setIsBookmarked(false);
        } else {
            await bookmarkService.addBookmark({
                id: `${Date.now()}`,
                type: 'showcase',
                itemId: project.id,
                userId: 'local',
            });
            setIsBookmarked(true);
        }
    };

    const handleShare = async () => {
        if (!project) return;

        try {
            await Share.share({
                message: `${project.title}\n\nhttps://xdev.asia/showcase/${project.slug}`,
                title: project.title,
            });
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    if (loading) {
        return (
            <View style={[styles.centered, { backgroundColor: colors.background }]}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    if (!project) {
        return (
            <View style={[styles.centered, { backgroundColor: colors.background }]}>
                <Text style={[styles.errorText, { color: colors.text }]}>
                    Không tìm thấy dự án
                </Text>
            </View>
        );
    }

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
            {project.featured_image && (
                <Image
                    source={{ uri: project.featured_image }}
                    style={styles.featuredImage}
                    resizeMode="cover"
                />
            )}

            <View style={styles.content}>
                <Text style={[styles.title, { color: colors.text }]}>{project.title}</Text>

                <Text style={[styles.description, { color: colors.placeholder }]}>
                    {project.description}
                </Text>

                {project.tech_stack && project.tech_stack.length > 0 && (
                    <View style={styles.techSection}>
                        <Text style={[styles.sectionTitle, { color: colors.text }]}>
                            Công nghệ sử dụng
                        </Text>
                        <View style={styles.techStack}>
                            {project.tech_stack.map((tech, index) => (
                                <View
                                    key={index}
                                    style={[styles.techBadge, { backgroundColor: colors.primary + '20' }]}
                                >
                                    <Text style={[styles.techText, { color: colors.primary }]}>
                                        {tech}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                )}

                <View style={styles.actions}>
                    {project.demo_url && (
                        <TouchableOpacity
                            style={[styles.actionButton, { backgroundColor: colors.primary }]}
                            onPress={() => Linking.openURL(project.demo_url!)}
                        >
                            <Ionicons name="globe" size={20} color="#fff" />
                            <Text style={styles.primaryActionText}>Xem Demo</Text>
                        </TouchableOpacity>
                    )}
                    {project.github_url && (
                        <TouchableOpacity
                            style={[styles.actionButton, { backgroundColor: colors.primary }]}
                            onPress={() => Linking.openURL(project.github_url!)}
                        >
                            <Ionicons name="logo-github" size={20} color="#fff" />
                            <Text style={styles.primaryActionText}>GitHub</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.secondaryActions}>
                    <TouchableOpacity
                        style={[styles.secondaryButton, { backgroundColor: colors.card }]}
                        onPress={handleBookmark}
                    >
                        <Ionicons
                            name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
                            size={20}
                            color={colors.primary}
                        />
                        <Text style={[styles.actionText, { color: colors.text }]}>
                            {isBookmarked ? 'Đã lưu' : 'Lưu'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.secondaryButton, { backgroundColor: colors.card }]}
                        onPress={handleShare}
                    >
                        <Ionicons name="share-outline" size={20} color={colors.primary} />
                        <Text style={[styles.actionText, { color: colors.text }]}>Chia sẻ</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.divider} />

                <Markdown
                    style={{
                        body: { color: colors.text, fontSize: 16, lineHeight: 24 },
                        heading1: { color: colors.text, fontSize: 28, fontWeight: 'bold', marginTop: 20, marginBottom: 12 },
                        heading2: { color: colors.text, fontSize: 24, fontWeight: 'bold', marginTop: 18, marginBottom: 10 },
                        heading3: { color: colors.text, fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 8 },
                        paragraph: { color: colors.text, marginBottom: 12 },
                        link: { color: colors.primary },
                        code_inline: { backgroundColor: colors.card, color: colors.primary, paddingHorizontal: 4 },
                        code_block: { backgroundColor: colors.card, color: colors.text, padding: 12, borderRadius: 6 },
                    }}
                >
                    {project.content}
                </Markdown>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    featuredImage: {
        width: '100%',
        height: 250,
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 12,
        lineHeight: 34,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        lineHeight: 24,
    },
    techSection: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    techStack: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    techBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
    },
    techText: {
        fontSize: 14,
        fontWeight: '500',
    },
    actions: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 12,
    },
    actionButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingVertical: 14,
        borderRadius: 8,
    },
    primaryActionText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    secondaryActions: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 16,
    },
    secondaryButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        paddingVertical: 10,
        borderRadius: 8,
    },
    actionText: {
        fontSize: 14,
        fontWeight: '500',
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 20,
    },
    errorText: {
        fontSize: 16,
    },
});
