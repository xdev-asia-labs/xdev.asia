import axios from 'axios';
import type { Post, PostIndex, SeriesIndex, ShowcaseProject, Category, Tag } from './types';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://xdev.asia';

class APIService {
  // Blog posts
  async getPosts(options?: {
    category?: string;
    tag?: string;
    page?: number;
    limit?: number;
  }): Promise<PostIndex[]> {
    try {
      const params = new URLSearchParams();
      if (options?.category) params.append('category', options.category);
      if (options?.tag) params.append('tag', options.tag);
      if (options?.page) params.append('page', String(options.page));
      if (options?.limit) params.append('limit', String(options.limit));

      const response = await axios.get(`${API_BASE_URL}/api/posts?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }

  async getPost(slug: string): Promise<Post | null> {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/posts/${slug}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  }

  // Series
  async getSeries(options?: {
    category?: string;
    page?: number;
    limit?: number;
  }): Promise<SeriesIndex[]> {
    try {
      const params = new URLSearchParams();
      if (options?.category) params.append('category', options.category);
      if (options?.page) params.append('page', String(options.page));
      if (options?.limit) params.append('limit', String(options.limit));

      const response = await axios.get(`${API_BASE_URL}/api/series?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching series:', error);
      return [];
    }
  }

  async getSeriesDetail(slug: string): Promise<any> {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/series/${slug}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching series detail:', error);
      return null;
    }
  }

  // Showcase
  async getShowcases(): Promise<ShowcaseProject[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/showcase`);
      return response.data;
    } catch (error) {
      console.error('Error fetching showcases:', error);
      return [];
    }
  }

  async getShowcase(slug: string): Promise<ShowcaseProject | null> {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/showcase/${slug}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching showcase:', error);
      return null;
    }
  }

  // Categories
  async getCategories(type?: string): Promise<Category[]> {
    try {
      const params = type ? `?type=${type}` : '';
      const response = await axios.get(`${API_BASE_URL}/api/categories${params}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  // Tags
  async getTags(): Promise<Tag[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/tags`);
      return response.data;
    } catch (error) {
      console.error('Error fetching tags:', error);
      return [];
    }
  }

  // Search
  async search(query: string): Promise<{
    posts: PostIndex[];
    series: SeriesIndex[];
  }> {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/search?q=${encodeURIComponent(query)}`);
      return response.data;
    } catch (error) {
      console.error('Error searching:', error);
      return { posts: [], series: [] };
    }
  }
}

export const api = new APIService();
