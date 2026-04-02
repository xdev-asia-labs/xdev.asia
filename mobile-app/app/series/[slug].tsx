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
import { useColorScheme, Colors } from '@/lib/utils';
import Ionicons from '@expo/vector-icons/Ionicons';
import Markdown from 'react-native-markdown-display';

export default function SeriesDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];

  const [series, setSeries] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (slug) {
      loadSeries();
    }
  }, [slug]);

  const loadSeries = async () => {
    setLoading(true);
    try {
      const data = await api.getSeriesDetail(slug);
      setSeries(data);
      if (data) {
        const bookmarked = await bookmarkService.isBookmarked(data.id, 'series');
        setIsBookmarked(bookmarked);
      }
    } catch (error) {
      console.error('Error loading series:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookmark = async () => {
    if (!series) return;
    
    if (isBookmarked) {
      await bookmarkService.removeBookmark(series.id, 'series');
      setIsBookmarked(false);
    } else {
      await bookmarkService.addBookmark({
        id: `${Date.now()}`,
        type: 'series',
        itemId: series.id,
        userId: 'local',
      });
      setIsBookmarked(true);
    }
  };

  const handleShare = async () => {
    if (!series) return;
    
    try {
      await Share.share({
        message: `${series.title}\n\nhttps://xdev.asia/series/${series.slug}`,
        title: series.title,
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

  if (!series) {
    return (
      <View style={[styles.centered, { backgroundColor: colors.background }]}>
        <Text style={[styles.errorText, { color: colors.text }]}>
          Không tìm thấy series
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {series.featured_image && (
        <Image
          source={{ uri: series.featured_image }}
          style={styles.featuredImage}
          resizeMode="cover"
        />
      )}
      
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>{series.title}</Text>

        {series.description && (
          <Text style={[styles.description, { color: colors.placeholder }]}>
            {series.description}
          </Text>
        )}

        <View style={styles.stats}>
          <View style={[styles.statItem, { backgroundColor: colors.card }]}>
            <Ionicons name="book" size={20} color={colors.primary} />
            <Text style={[styles.statText, { color: colors.text }]}>
              {series.lesson_count} bài học
            </Text>
          </View>
          <View style={[styles.statItem, { backgroundColor: colors.card }]}>
            <Ionicons name="time" size={20} color={colors.primary} />
            <Text style={[styles.statText, { color: colors.text }]}>
              {series.duration_hours}h
            </Text>
          </View>
          <View style={[styles.statItem, { backgroundColor: colors.card }]}>
            <Ionicons name="bar-chart" size={20} color={colors.primary} />
            <Text style={[styles.statText, { color: colors.text }]}>
              {series.level}
            </Text>
          </View>
        </View>

        {series.is_free && (
          <View style={[styles.freeBadge, { backgroundColor: '#34C759' }]}>
            <Ionicons name="checkmark-circle" size={16} color="#fff" />
            <Text style={styles.freeText}>Miễn phí 100%</Text>
          </View>
        )}

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

        {series.tags && series.tags.length > 0 && (
          <View style={styles.tags}>
            {series.tags.map((tag: any, index: number) => (
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

        {series.content && (
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
            {series.content}
          </Markdown>
        )}

        {/* Lessons list would go here if available */}
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
    marginBottom: 16,
    lineHeight: 24,
  },
  stats: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  statItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    gap: 6,
  },
  statText: {
    fontSize: 13,
    fontWeight: '500',
  },
  freeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 16,
    gap: 6,
  },
  freeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
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
