import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Place {
  id: string;
  name: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const places: Place[] = [
  {
    id: '1',
    name: 'Сарненський історико-етнографічний музей',
    description:
      'Унікальний музей просто неба, де представлено традиційний побут Полісся, давні хати, млин та експонати народних ремесел.',
    icon: 'compass-outline',
  },
  {
    id: '2',
    name: 'Центральний залізничний вузол',
    description:
      'Сарни — важливий залізничний перехрестя Полісся. Історична будівля вокзалу є справжньою візитівкою міста.',
    icon: 'train-outline',
  },
  {
    id: '3',
    name: 'Парк "Залізничник"',
    description:
      'Головне зелене серце міста для відпочинку, вечірніх прогулянок, проведення міських заходів та дозвілля з родиною.',
    icon: 'trees-outline' as any,
  },
  {
    id: '4',
    name: 'Набережна річки Случ',
    description:
      'Мальовнича природна зона на березі річки Случ, де відкриваються чудові види на поліські пейзажі.',
    icon: 'water-outline',
  },
];

export default function CityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Сарни — Серце Полісся</Text>

      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.iconWrapper}>
                <Ionicons name={item.icon} size={22} color="#38BDF8" />
              </View>
              <Text style={styles.placeName}>{item.name}</Text>
            </View>
            <Text style={styles.placeDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090D16',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 20,
    marginTop: 8,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#1E293B',
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  iconWrapper: {
    backgroundColor: '#0F172A',
    padding: 8,
    borderRadius: 10,
  },
  placeName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#38BDF8',
    flex: 1,
  },
  placeDescription: {
    fontSize: 14,
    color: '#94A3B8',
    lineHeight: 22,
  },
});