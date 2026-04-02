import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { api } from '@/lib/api';
import { SeriesIndex } from '@/lib/types';
import { useColorScheme, Colors } from '@/lib/utils';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SeriesScreen() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme];

    const [series, setSeries] = useState<SeriesIndex[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        try {
            const data = await api.getSeries();
            setSeries(data);
        } catch (error) {
            console.error('Error loading series:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRefresh = async () => {
        setRefreshing(true);
        await loadData();
        setRefreshing(false);
    };

    const renderSeriesItem = ({ item }: { item: SeriesIndex }) => (
        <TouchableOpacity
            style={[styles.seriesCard, { backgroundColor: colors.card }]}
            onPress={() => router.push(`/series/${item.slug}` as any)}
        >
            {item.featured_image && (
                <Image
                    source={{ uri: item.featured_image }}
                    style={styles.seriesImage}
                    resizeMode="cover"
                />
            )}
            <View style={styles.seriesContent}>
                <Text style={[styles.seriesTitle, { color: colors.text }]} numberOfLines={2}>
                    {item.title}
                </Text>
                {item.description && (
                    <Text style={[styles.seriesDesc, { color: colors.placeholder }]} numberOfLines={3}>
                        {item.description}
                    </Text>
                )}
                <View style={styles.seriesMeta}>
                    <View style={styles.metaItem}>
                        <Ionicons name="book" size={14} color={colors.placeholder} />
                        <Text style={[styles.metaText, { color: colors.placeholder }]}>
                            {item.lesson_count} bài học
                        </Text>
                    </View>
                    <View style={styles.metaItem}>
                        <Ionicons name="time" size={14} color={colors.placeholder} />
                        <Text style={[styles.metaText, { color: colors.placeholder }]}>
                            {item.duration_hours}h
                        </Text>
                    </View>
                    <View style={styles.metaItem}>
                        <Ionicons name="bar-chart" size={14} color={colors.placeholder} />
                        <Text style={[styles.metaText, { color: colors.placeholder }]}>
                            {item.level}
                        </Text>
                    </View>
                </View>
                {item.is_free && (
                    <View style={[styles.freeBadge, { backgroundColor: '#34C759' }]}>
                        <Text style={styles.freeText}>Miễn phí</Text>
                    </View>
                )}
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
            <FlatList
                data={series}
                keyExtractor={(item) => item.id}
                renderItem={renderSeriesItem}
                contentContainerStyle={styles.list}
                onRefresh={handleRefresh}
                refreshing={refreshing}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons name="book-outline" size={48} color={colors.placeholder} />
                        <Text style={[styles.emptyText, { color: colors.placeholder }]}>
                            Chưa có series nào
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
    seriesCard: {
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
    },
    seriesImage: {
        width: '100%',
        height: 180,
    },
    seriesContent: {
        padding: 16,
    },
    seriesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    seriesDesc: {
        fontSize: 14,
        marginBottom: 12,
        lineHeight: 20,
    },
    seriesMeta: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 8,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    metaText: {
        fontSize: 12,
    },
    freeBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginTop: 4,
    },
    freeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
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
