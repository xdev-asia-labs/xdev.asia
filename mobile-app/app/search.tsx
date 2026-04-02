import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { api } from '@/lib/api';
import { PostIndex, SeriesIndex } from '@/lib/types';
import { useColorScheme, Colors } from '@/lib/utils';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SearchScreen() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme];

    const [query, setQuery] = useState('');
    const [results, setResults] = useState<{
        posts: PostIndex[];
        series: SeriesIndex[];
    }>({ posts: [], series: [] });
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const handleSearch = async () => {
        if (query.trim().length < 2) return;

        setLoading(true);
        setSearched(true);
        try {
            const data = await api.search(query.trim());
            setResults(data);
        } catch (error) {
            console.error('Error searching:', error);
        } finally {
            setLoading(false);
        }
    };

    const totalResults = results.posts.length + results.series.length;

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.searchContainer}>
                <View style={[styles.searchBox, { backgroundColor: colors.card }]}>
                    <Ionicons name="search" size={20} color={colors.placeholder} />
                    <TextInput
                        style={[styles.searchInput, { color: colors.text }]}
                        placeholder="Tìm kiếm bài viết, series..."
                        placeholderTextColor={colors.placeholder}
                        value={query}
                        onChangeText={setQuery}
                        onSubmitEditing={handleSearch}
                        returnKeyType="search"
                        autoFocus
                    />
                    {query.length > 0 && (
                        <TouchableOpacity onPress={() => setQuery('')}>
                            <Ionicons name="close-circle" size={20} color={colors.placeholder} />
                        </TouchableOpacity>
                    )}
                </View>
                <TouchableOpacity
                    style={[
                        styles.searchButton,
                        { backgroundColor: colors.primary },
                        query.trim().length < 2 && { opacity: 0.5 },
                    ]}
                    onPress={handleSearch}
                    disabled={query.trim().length < 2}
                >
                    <Text style={styles.searchButtonText}>Tìm</Text>
                </TouchableOpacity>
            </View>

            {loading ? (
                <View style={styles.centered}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            ) : searched ? (
                <ScrollView contentContainerStyle={styles.results}>
                    {totalResults === 0 ? (
                        <View style={styles.emptyContainer}>
                            <Ionicons name="search-outline" size={48} color={colors.placeholder} />
                            <Text style={[styles.emptyText, { color: colors.placeholder }]}>
                                Không tìm thấy kết quả cho "{query}"
                            </Text>
                        </View>
                    ) : (
                        <>
                            <Text style={[styles.resultsCount, { color: colors.text }]}>
                                Tìm thấy {totalResults} kết quả
                            </Text>

                            {results.posts.length > 0 && (
                                <View style={styles.section}>
                                    <Text style={[styles.sectionTitle, { color: colors.text }]}>
                                        Bài viết ({results.posts.length})
                                    </Text>
                                    {results.posts.map((post) => (
                                        <TouchableOpacity
                                            key={post.id}
                                            style={[styles.resultItem, { backgroundColor: colors.card }]}
                                            onPress={() => router.push(`/blog/${post.slug}` as any)}
                                        >
                                            <Ionicons name="newspaper" size={20} color={colors.primary} />
                                            <View style={styles.resultContent}>
                                                <Text style={[styles.resultTitle, { color: colors.text }]}>
                                                    {post.title}
                                                </Text>
                                                {post.excerpt && (
                                                    <Text
                                                        style={[styles.resultExcerpt, { color: colors.placeholder }]}
                                                        numberOfLines={2}
                                                    >
                                                        {post.excerpt}
                                                    </Text>
                                                )}
                                            </View>
                                            <Ionicons name="chevron-forward" size={20} color={colors.placeholder} />
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}

                            {results.series.length > 0 && (
                                <View style={styles.section}>
                                    <Text style={[styles.sectionTitle, { color: colors.text }]}>
                                        Series ({results.series.length})
                                    </Text>
                                    {results.series.map((series) => (
                                        <TouchableOpacity
                                            key={series.id}
                                            style={[styles.resultItem, { backgroundColor: colors.card }]}
                                            onPress={() => router.push(`/series/${series.slug}` as any)}
                                        >
                                            <Ionicons name="book" size={20} color={colors.primary} />
                                            <View style={styles.resultContent}>
                                                <Text style={[styles.resultTitle, { color: colors.text }]}>
                                                    {series.title}
                                                </Text>
                                                {series.description && (
                                                    <Text
                                                        style={[styles.resultExcerpt, { color: colors.placeholder }]}
                                                        numberOfLines={2}
                                                    >
                                                        {series.description}
                                                    </Text>
                                                )}
                                            </View>
                                            <Ionicons name="chevron-forward" size={20} color={colors.placeholder} />
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}
                        </>
                    )}
                </ScrollView>
            ) : (
                <View style={styles.centered}>
                    <Ionicons name="search" size={64} color={colors.placeholder} />
                    <Text style={[styles.emptyText, { color: colors.placeholder }]}>
                        Nhập từ khóa để tìm kiếm
                    </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        padding: 16,
        gap: 12,
    },
    searchBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderRadius: 8,
        gap: 8,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
    },
    searchButton: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
        justifyContent: 'center',
    },
    searchButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    results: {
        padding: 16,
    },
    resultsCount: {
        fontSize: 14,
        marginBottom: 20,
        fontWeight: '500',
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    resultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        gap: 12,
    },
    resultContent: {
        flex: 1,
    },
    resultTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    resultExcerpt: {
        fontSize: 13,
        lineHeight: 18,
    },
    emptyContainer: {
        alignItems: 'center',
        padding: 40,
    },
    emptyText: {
        fontSize: 16,
        marginTop: 16,
        textAlign: 'center',
    },
});
