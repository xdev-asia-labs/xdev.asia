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
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { api } from '@/lib/api';
import { bookmarkService } from '@/lib/bookmarks';
import { Post } from '@/lib/types';
import { useColorScheme, Colors, formatRelativeTime } from '@/lib/utils';
import Ionicons from '@expo/vector-icons/Ionicons';
import Markdown from 'react-native-markdown-display';

export default function BlogDetailScreen() {
    const { slug } = useLocalSearchParams<{ slug: string }>();
    const router = useRouter();
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme];

    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        if (slug) {
            loadPost();
        }
    }, [slug]);

    const loadPost = async () => {
        setLoading(true);
        try {
            const data = await api.getPost(slug);
            setPost(data);
            if (data) {
                const bookmarked = await bookmarkService.isBookmarked(data.id, 'post');
                setIsBookmarked(bookmarked);
            }
        } catch (error) {
            console.error('Error loading post:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleBookmark = async () => {
        if (!post) return;

        if (isBookmarked) {
            await bookmarkService.removeBookmark(post.id, 'post');
            setIsBookmarked(false);
        } else {
            await bookmarkService.addBookmark({
                id: `${Date.now()}`,
                type: 'post',
                itemId: post.id,
                userId: 'local',
            });
            setIsBookmarked(true);
        }
    };

    const handleShare = async () => {
        if (!post) return;

        try {
            await Share.share({
                message: `${post.title}\n\nhttps://xdev.asia/blog/${post.slug}`,
                title: post.title,
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

    if (!post) {
        return (
            <View style={[styles.centered, { backgroundColor: colors.background }]}>
                <Text style={[styles.errorText, { color: colors.text }]}>
                    Không tìm thấy bài viết
                </Text>
            </View>
        );
    }

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
            {post.featured_image && (
                <Image
                    source={{ uri: post.featured_image }}
                    style={styles.featuredImage}
                    resizeMode="cover"
                />
            )}

            <View style={styles.content}>
                {post.category && (
                    <View style={[styles.categoryBadge, { backgroundColor: colors.primary }]}>
                        <Text style={styles.categoryText}>{post.category.name}</Text>
                    </View>
                )}

                <Text style={[styles.title, { color: colors.text }]}>{post.title}</Text>

                <View style={styles.meta}>
                    <View style={styles.metaItem}>
                        <Ionicons name="person" size={16} color={colors.placeholder} />
                        <Text style={[styles.metaText, { color: colors.placeholder }]}>
                            {post.author.name}
                        </Text>
                    </View>
                    <View style={styles.metaItem}>
                        <Ionicons name="time" size={16} color={colors.placeholder} />
                        <Text style={[styles.metaText, { color: colors.placeholder }]}>
                            {formatRelativeTime(post.published_at)}
                        </Text>
                    </View>
                    {post.reading_time && (
                        <View style={styles.metaItem}>
                            <Ionicons name="book" size={16} color={colors.placeholder} />
                            <Text style={[styles.metaText, { color: colors.placeholder }]}>
                                {post.reading_time} phút
                            </Text>
                        </View>
                    )}
                </View>

                <View style={styles.actions}>
                    <TouchableOpacity
                        style={[styles.actionButton, { backgroundColor: colors.card }]}
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
                        style={[styles.actionButton, { backgroundColor: colors.card }]}
                        onPress={handleShare}
                    >
                        <Ionicons name="share-outline" size={20} color={colors.primary} />
                        <Text style={[styles.actionText, { color: colors.text }]}>Chia sẻ</Text>
                    </TouchableOpacity>
                </View>

                {post.tags && post.tags.length > 0 && (
                    <View style={styles.tags}>
                        {post.tags.map((tag, index) => (
                            <View
                                key={index}
                                style={[styles.tag, { backgroundColor: colors.card }]}
                            >
                                <Text style={[styles.tagText, { color: colors.text }]}>
                                    #{tag.name}
                                </Text>
                            </View>
                        ))}
                    </View>
                )}

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
                        bullet_list: { marginBottom: 12 },
                        ordered_list: { marginBottom: 12 },
                    }}
                >
                    {post.content}
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
    categoryBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 4,
        marginBottom: 12,
    },
    categoryText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 16,
        lineHeight: 34,
    },
    meta: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
        marginBottom: 16,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    metaText: {
        fontSize: 13,
    },
    actions: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 16,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
    },
    actionText: {
        fontSize: 14,
        fontWeight: '500',
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 16,
    },
    tag: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 6,
    },
    tagText: {
        fontSize: 13,
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
