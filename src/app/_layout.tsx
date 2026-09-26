import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0F172A', // Темно-синій / чорний фон шапки
        },
        headerTintColor: '#38BDF8', // Неоновий блакитний колір тексту та стрілки
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ title: 'Головна' }} 
      />
      <Stack.Screen 
        name="city" 
        options={{ title: 'Моє місто — Сарни' }} 
      />
      <Stack.Screen 
        name="about" 
        options={{ title: 'Про мене' }} 
      />
    </Stack>
  );
}