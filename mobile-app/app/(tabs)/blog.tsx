import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    TextInput,
    Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { api } from '@/lib/api';
import { PostIndex, Category } from '@/lib/types';
import { useColorScheme, Colors, formatRelativeTime, truncateText } from '@/lib/utils';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function BlogScreen() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme];

    const [posts, setPosts] = useState<PostIndex[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        loadData();
    }, [selectedCategory]);

    const loadData = async () => {
        setLoading(true);
        try {
            const [postsData, categoriesData] = await Promise.all([
                api.getPosts({ category: selectedCategory || undefined }),
                categories.length === 0 ? api.getCategories('blog') : Promise.resolve(categories),
            ]);
            setPosts(postsData);
            if (categories.length === 0) {
                setCategories(categoriesData);
            }
        } catch (error) {
            console.error('Error loading blog data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRefresh = async () => {
        setRefreshing(true);
        await loadData();
        setRefreshing(false);
    };

    const renderPostItem = ({ item }: { item: PostIndex }) => (
        <TouchableOpacity
            style={[styles.postCard, { backgroundColor: colors.card }]}
            onPress={() => router.push(`/blog/${item.slug}` as any)}
        >
            {item.featured_image && (
                <Image
                    source={{ uri: item.featured_image }}
                    style={styles.postImage}
                    resizeMode="cover"
                />
            )}
            <View style={styles.postContent}>
                {item.category && (
                    <View style={[styles.categoryBadge, { backgroundColor: colors.primary }]}>
                        <Text style={styles.categoryText}>{item.category.name}</Text>
                    </View>
                )}
                <Text style={[styles.postTitle, { color: colors.text }]} numberOfLines={2}>
                    {item.title}
                </Text>
                {item.excerpt && (
                    <Text style={[styles.postExcerpt, { color: colors.placeholder }]} numberOfLines={2}>
                        {truncateText(item.excerpt, 100)}
                    </Text>
                )}
                <View style={styles.postMeta}>
                    <View style={styles.metaItem}>
                        <Ionicons name="person" size={14} color={colors.placeholder} />
                        <Text style={[styles.metaText, { color: colors.placeholder }]}>
                            {item.author.name}
                        </Text>
                    </View>
                    <View style={styles.metaItem}>
                        <Ionicons name="time" size={14} color={colors.placeholder} />
                        <Text style={[styles.metaText, { color: colors.placeholder }]}>
                            {formatRelativeTime(item.published_at)}
                        </Text>
                    </View>
                    {item.reading_time && (
                        <View style={styles.metaItem}>
                            <Ionicons name="book" size={14} color={colors.placeholder} />
                            <Text style={[styles.metaText, { color: colors.placeholder }]}>
                                {item.reading_time} phút
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={[styles.centered, { backgroundColor: colors.background }]}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {/* Categories */}
            <View style={styles.categoriesContainer}>
                <FlatList
                    horizontal
                    data={[{ id: 'all', name: 'Tất cả', slug: 'all' }, ...categories]}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.categoryChip,
                                {
                                    backgroundColor:
                                        (item.id === 'all' && !selectedCategory) ||
                                            item.slug === selectedCategory
                                            ? colors.primary
                                            : colors.card,
                                },
                            ]}
                            onPress={() =>
                                setSelectedCategory(item.id === 'all' ? null : item.slug)
                            }
                        >
                            <Text
                                style={[
                                    styles.categoryChipText,
                                    {
                                        color:
                                            (item.id === 'all' && !selectedCategory) ||
                                                item.slug === selectedCategory
                                                ? '#fff'
                                                : colors.text,
                                    },
                                ]}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoriesList}
                />
            </View>

            {/* Posts List */}
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={renderPostItem}
                contentContainerStyle={styles.postsList}
                onRefresh={handleRefresh}
                refreshing={refreshing}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons name="document-text-outline" size={48} color={colors.placeholder} />
                        <Text style={[styles.emptyText, { color: colors.placeholder }]}>
                            Chưa có bài viết nào
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
    categoriesContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    categoriesList: {
        padding: 12,
        gap: 8,
    },
    categoryChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 8,
    },
    categoryChipText: {
        fontSize: 14,
        fontWeight: '500',
    },
    postsList: {
        padding: 12,
    },
    postCard: {
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
    },
    postImage: {
        width: '100%',
        height: 200,
    },
    postContent: {
        padding: 16,
    },
    categoryBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginBottom: 8,
    },
    categoryText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    postExcerpt: {
        fontSize: 14,
        marginBottom: 12,
        lineHeight: 20,
    },
    postMeta: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    metaText: {
        fontSize: 12,
    },
    emptyContainer: {
        alignItems: 'center',
        padding: 40,
    },
    emptyText: {
        fontSize: 16,
        marginTop: 12,
    },
});
