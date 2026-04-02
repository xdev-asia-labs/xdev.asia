import { Tabs } from 'expo-router';
import { useColorScheme } from '@/lib/utils';
import { Colors } from '@/lib/utils';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].primary,
                tabBarInactiveTintColor: Colors[colorScheme].placeholder,
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme].background,
                    borderTopColor: Colors[colorScheme].border,
                },
                headerStyle: {
                    backgroundColor: Colors[colorScheme].background,
                },
                headerTintColor: Colors[colorScheme].text,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="blog"
                options={{
                    title: 'Blog',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="newspaper" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="series"
                options={{
                    title: 'Series',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="showcase"
                options={{
                    title: 'Dự án',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="grid" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="bookmarks"
                options={{
                    title: 'Đã lưu',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="bookmark" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
