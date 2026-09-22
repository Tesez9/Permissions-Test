import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PermissionCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>📷 Camera</Text>
      <Text style={styles.description}>Доступ до камери</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text style={styles.buttonText}>Allow access</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F1F2F4',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
  },
  description: {
    fontSize: 14,
    color: '#777777',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#111111',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
