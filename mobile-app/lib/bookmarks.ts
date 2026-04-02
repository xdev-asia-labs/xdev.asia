import AsyncStorage from '@react-native-async-storage/async-storage';
import { Bookmark } from './types';

const BOOKMARKS_KEY = 'bookmarks';

export class BookmarkService {
  async getBookmarks(): Promise<Bookmark[]> {
    try {
      const data = await AsyncStorage.getItem(BOOKMARKS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading bookmarks:', error);
      return [];
    }
  }

  async addBookmark(bookmark: Omit<Bookmark, 'createdAt'>): Promise<void> {
    try {
      const bookmarks = await this.getBookmarks();
      const newBookmark: Bookmark = {
        ...bookmark,
        createdAt: Date.now(),
      };
      bookmarks.push(newBookmark);
      await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    } catch (error) {
      console.error('Error adding bookmark:', error);
    }
  }

  async removeBookmark(itemId: string, type: string): Promise<void> {
    try {
      const bookmarks = await this.getBookmarks();
      const filtered = bookmarks.filter(
        (b) => !(b.itemId === itemId && b.type === type)
      );
      await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(filtered));
    } catch (error) {
      console.error('Error removing bookmark:', error);
    }
  }

  async isBookmarked(itemId: string, type: string): Promise<boolean> {
    try {
      const bookmarks = await this.getBookmarks();
      return bookmarks.some((b) => b.itemId === itemId && b.type === type);
    } catch (error) {
      console.error('Error checking bookmark:', error);
      return false;
    }
  }
}

export const bookmarkService = new BookmarkService();
