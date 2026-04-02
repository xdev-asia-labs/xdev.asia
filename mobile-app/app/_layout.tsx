import { Stack } from 'expo-router';
import { useColorScheme } from '@/lib/utils';
import { Colors } from '@/lib/utils';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded, error] = useFonts({
        // Add custom fonts here if needed
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors[colorScheme].background,
                },
                headerTintColor: Colors[colorScheme].text,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                contentStyle: {
                    backgroundColor: Colors[colorScheme].background,
                },
            }}
        >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="blog/[slug]" options={{ title: 'Bài viết' }} />
            <Stack.Screen name="series/[slug]" options={{ title: 'Series' }} />
            <Stack.Screen name="showcase/[slug]" options={{ title: 'Dự án' }} />
            <Stack.Screen name="search" options={{ title: 'Tìm kiếm' }} />
        </Stack>
    );
}
