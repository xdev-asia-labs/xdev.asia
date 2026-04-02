import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    Linking,
} from 'react-native';
import { useRouter } from 'expo-router';
import { api } from '@/lib/api';
import { ShowcaseProject } from '@/lib/types';
import { useColorScheme, Colors } from '@/lib/utils';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ShowcaseScreen() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme];

    const [projects, setProjects] = useState<ShowcaseProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        try {
            const data = await api.getShowcases();
            setProjects(data);
        } catch (error) {
            console.error('Error loading showcases:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRefresh = async () => {
        setRefreshing(true);
        await loadData();
        setRefreshing(false);
    };

    const renderProjectItem = ({ item }: { item: ShowcaseProject }) => (
        <TouchableOpacity
            style={[styles.projectCard, { backgroundColor: colors.card }]}
            onPress={() => router.push(`/showcase/${item.slug}` as any)}
        >
            {item.featured_image && (
                <Image
                    source={{ uri: item.featured_image }}
                    style={styles.projectImage}
                    resizeMode="cover"
                />
            )}
            <View style={styles.projectContent}>
                <Text style={[styles.projectTitle, { color: colors.text }]} numberOfLines={2}>
                    {item.title}
                </Text>
                <Text style={[styles.projectDesc, { color: colors.placeholder }]} numberOfLines={3}>
                    {item.description}
                </Text>
                {item.tech_stack && item.tech_stack.length > 0 && (
                    <View style={styles.techStack}>
                        {item.tech_stack.slice(0, 3).map((tech, index) => (
                            <View
                                key={index}
                                style={[styles.techBadge, { backgroundColor: colors.primary + '20' }]}
                            >
                                <Text style={[styles.techText, { color: colors.primary }]}>
                                    {tech}
                                </Text>
                            </View>
                        ))}
                        {item.tech_stack.length > 3 && (
                            <Text style={[styles.moreText, { color: colors.placeholder }]}>
                                +{item.tech_stack.length - 3}
                            </Text>
                        )}
                    </View>
                )}
                <View style={styles.projectActions}>
                    {item.demo_url && (
                        <TouchableOpacity
                            style={[styles.actionButton, { backgroundColor: colors.primary }]}
                            onPress={() => Linking.openURL(item.demo_url!)}
                        >
                            <Ionicons name="globe" size={16} color="#fff" />
                            <Text style={styles.actionText}>Demo</Text>
                        </TouchableOpacity>
                    )}
                    {item.github_url && (
                        <TouchableOpacity
                            style={[styles.actionButton, { backgroundColor: colors.primary }]}
                            onPress={() => Linking.openURL(item.github_url!)}
                        >
                            <Ionicons name="logo-github" size={16} color="#fff" />
                            <Text style={styles.actionText}>GitHub</Text>
                        </TouchableOpacity>
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
            <FlatList
                data={projects}
                keyExtractor={(item) => item.id}
                renderItem={renderProjectItem}
                contentContainerStyle={styles.list}
                onRefresh={handleRefresh}
                refreshing={refreshing}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons name="grid-outline" size={48} color={colors.placeholder} />
                        <Text style={[styles.emptyText, { color: colors.placeholder }]}>
                            Chưa có dự án nào
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
    projectCard: {
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
    },
    projectImage: {
        width: '100%',
        height: 180,
    },
    projectContent: {
        padding: 16,
    },
    projectTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    projectDesc: {
        fontSize: 14,
        marginBottom: 12,
        lineHeight: 20,
    },
    techStack: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 12,
    },
    techBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    techText: {
        fontSize: 12,
        fontWeight: '500',
    },
    moreText: {
        fontSize: 12,
        alignSelf: 'center',
    },
    projectActions: {
        flexDirection: 'row',
        gap: 8,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
    },
    actionText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
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
