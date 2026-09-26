import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const skills = [
  { id: '1', name: 'JavaScript / TypeScript', icon: 'code-slash-outline' },
  { id: '2', name: 'React Native & Mobile Dev', icon: 'phone-portrait-outline' },
  { id: '3', name: 'UI/UX & Dark Aesthetics', icon: 'color-palette-outline' },
  { id: '4', name: 'Git & Project Architecture', icon: 'git-branch-outline' },
];

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://via.placeholder.com/120/1E293B/38BDF8?text=KD' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Кобилінський Денис</Text>
        <Text style={styles.role}>React Native Mobile Developer</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Про мене</Text>
        <Text style={styles.bio}>
          Привіт! Мене звати Денис. Я активно вивчаю сучасну мобільну розробку та кросплатформені технології. 
          Обрав React Native, оскільки прагну створювати швидкі, зручні та візуально довершені мобільні застосунки. 
          Захоплююся IT-технологіями, автоматизацією процесів та постійним саморозвитком у програмуванні.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Навички та інтереси</Text>
        <View style={styles.skillsContainer}>
          {skills.map((skill) => (
            <View key={skill.id} style={styles.skillCard}>
              <Ionicons name={skill.icon as keyof typeof Ionicons.glyphMap} size={20} color="#38BDF8" />
              <Text style={styles.skillText}>{skill.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090D16',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  profileCard: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 14,
    borderWidth: 2,
    borderColor: '#38BDF8',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  role: {
    fontSize: 14,
    color: '#38BDF8',
    marginTop: 4,
  },
  section: {
    backgroundColor: '#1E293B',
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 12,
  },
  bio: {
    fontSize: 14,
    color: '#94A3B8',
    lineHeight: 22,
  },
  skillsContainer: {
    gap: 10,
  },
  skillCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#0F172A',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  skillText: {
    fontSize: 14,
    color: '#E2E8F0',
    fontWeight: '500',
  },
});