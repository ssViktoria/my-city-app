import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Ionicons name="terminal-outline" size={48} color="#38BDF8" />
        <Text style={styles.title}>Вітаємо у додатку</Text>
        <Text style={styles.subtitle}>Оберіть потрібний розділ нижче</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable 
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]} 
          onPress={() => router.push('/city')}
        >
          <Ionicons name="map-outline" size={24} color="#38BDF8" />
          <Text style={styles.buttonText}>Моє місто</Text>
        </Pressable>

        <Pressable 
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]} 
          onPress={() => router.push('/about')}
        >
          <Ionicons name="code-working-outline" size={24} color="#38BDF8" />
          <Text style={styles.buttonText}>Про мене</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090D16', // Глибокий чорний фон
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerBox: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#F8FAFC',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#94A3B8',
    marginTop: 6,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 380,
    gap: 16,
  },
  button: {
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: '#334155',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  buttonPressed: {
    backgroundColor: '#334155',
    borderColor: '#38BDF8',
  },
  buttonText: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: '600',
  },
});