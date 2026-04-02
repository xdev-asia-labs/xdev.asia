import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    Image,
} from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { api } from '@/lib/api';
import { bookmarkService } from '@/lib/bookmarks';
import { Bookmark, PostIndex, SeriesIndex, ShowcaseProject } from '@/lib/types';
import { useColorScheme, Colors, formatRelativeTime } from '@/lib/utils';
import Ionicons from '@expo/vector-icons/Ionicons';

type BookmarkWithData = Bookmark & {
    data?: PostIndex | SeriesIndex | ShowcaseProject;
};

export default function BookmarksScreen() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme];

    const [bookmarks, setBookmarks] = useState<BookmarkWithData[]>([]);
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            loadBookmarks();
        }, [])
    );

    const loadBookmarks = async () => {
        setLoading(true);
        try {
            const savedBookmarks = await bookmarkService.getBookmarks();

            // Load data for each bookmark
            const bookmarksWithData = await Promise.all(
                savedBookmarks.map(async (bookmark) => {
                    let data;
                    try {
                        if (bookmark.type === 'post') {
                            const posts = await api.getPosts();
                            data = posts.find((p) => p.id === bookmark.itemId);
                        } else if (bookmark.type === 'series') {
                            const series = await api.getSeries();
                            data = series.find((s) => s.id === bookmark.itemId);
                        } else if (bookmark.type === 'showcase') {
                            data = await api.getShowcase(bookmark.itemId);
                        }
                    } catch (error) {
                        console.error('Error loading bookmark data:', error);
                    }
                    return { ...bookmark, data };
                })
            );

            setBookmarks(bookmarksWithData.filter((b) => b.data));
        } catch (error) {
            console.error('Error loading bookmarks:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveBookmark = async (itemId: string, type: string) => {
        await bookmarkService.removeBookmark(itemId, type);
        loadBookmarks();
    };

    const renderBookmarkItem = ({ item }: { item: BookmarkWithData }) => {
        if (!item.data) return null;

        const data = item.data as any;
        let route = '';
        let icon = '';
        let typeLabel = '';

        if (item.type === 'post') {
            route = `/blog/${data.slug}`;
            icon = 'newspaper';
            typeLabel = 'Bài viết';
        } else if (item.type === 'series') {
            route = `/series/${data.slug}`;
            icon = 'book';
            typeLabel = 'Series';
        } else if (item.type === 'showcase') {
            route = `/showcase/${data.slug}`;
            icon = 'grid';
            typeLabel = 'Dự án';
        }

        return (
            <TouchableOpacity
                style={[styles.bookmarkCard, { backgroundColor: colors.card }]}
                onPress={() => router.push(route as any)}
            >
                {data.featured_image && (
                    <Image
                        source={{ uri: data.featured_image }}
                        style={styles.bookmarkImage}
                        resizeMode="cover"
                    />
                )}
                <View style={styles.bookmarkContent}>
                    <View style={styles.bookmarkHeader}>
                        <View style={styles.typeContainer}>
                            <Ionicons name={icon as any} size={14} color={colors.primary} />
                            <Text style={[styles.typeText, { color: colors.primary }]}>
                                {typeLabel}
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => handleRemoveBookmark(item.itemId, item.type)}
                        >
                            <Ionicons name="trash" size={20} color={colors.placeholder} />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.bookmarkTitle, { color: colors.text }]} numberOfLines={2}>
                        {data.title}
                    </Text>
                    {data.excerpt && (
                        <Text style={[styles.bookmarkExcerpt, { color: colors.placeholder }]} numberOfLines={2}>
                            {data.excerpt}
                        </Text>
                    )}
                    {data.description && !data.excerpt && (
                        <Text style={[styles.bookmarkExcerpt, { color: colors.placeholder }]} numberOfLines={2}>
                            {data.description}
                        </Text>
                    )}
                    <Text style={[styles.bookmarkDate, { color: colors.placeholder }]}>
                        Đã lưu {formatRelativeTime(new Date(item.createdAt).toISOString())}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    if (loading) {
        return (
            <View style={[styles.centered, { backgroundColor: colors.background }]}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <FlatList
                data={bookmarks}
                keyExtractor={(item) => `${item.type}-${item.itemId}`}
                renderItem={renderBookmarkItem}
                contentContainerStyle={styles.list}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons name="bookmark-outline" size={48} color={colors.placeholder} />
                        <Text style={[styles.emptyText, { color: colors.placeholder }]}>
                            Chưa có nội dung đã lưu
                        </Text>
                        <Text style={[styles.emptySubtext, { color: colors.placeholder }]}>
                            Đánh dấu bài viết, series hoặc dự án để xem sau
                        </Text>
                    </View>
                }
            />
        </View>
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
    list: {
        padding: 12,
    },
    bookmarkCard: {
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
    },
    bookmarkImage: {
        width: '100%',
        height: 150,
    },
    bookmarkContent: {
        padding: 16,
    },
    bookmarkHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    typeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    typeText: {
        fontSize: 12,
        fontWeight: '600',
    },
    bookmarkTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    bookmarkExcerpt: {
        fontSize: 13,
        marginBottom: 8,
        lineHeight: 18,
    },
    bookmarkDate: {
        fontSize: 11,
    },
    emptyContainer: {
        alignItems: 'center',
        padding: 40,
    },
    emptyText: {
        fontSize: 16,
        marginTop: 12,
        marginBottom: 4,
    },
    emptySubtext: {
        fontSize: 13,
        textAlign: 'center',
    },
});
