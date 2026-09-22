import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Permission Center</Text>
      <Text style={styles.subtitle}>Керування дозволами пристрою</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111111',
  },
  subtitle: {
    fontSize: 15,
    color: '#777777',
    marginTop: 4,
  },
});
