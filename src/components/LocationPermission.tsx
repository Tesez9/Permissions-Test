import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LocationPermission() {
  const [status, setStatus] = useState<string | null>(null);
  const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);

  const allowLocation = async () => {
    try {
      const Location = require('expo-location');
      const permissionResult = await Location.requestForegroundPermissionsAsync();
      if (permissionResult.granted === false) {
        setStatus('Permission denied');
        return;
      }
      setStatus('Permission granted');
      const position = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      setCoords(position.coords);
    } catch {
      setStatus('Permission denied');
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>📍 Location</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={allowLocation} style={styles.button}>
        <Text style={styles.buttonText}>Allow Location</Text>
      </TouchableOpacity>
      {status !== null && <Text style={styles.status}>Status: {status}</Text>}
      {coords && (
        <View style={styles.coords}>
          <Text style={styles.coordsText}>Latitude: {coords.latitude.toFixed(4)}</Text>
          <Text style={styles.coordsText}>Longitude: {coords.longitude.toFixed(4)}</Text>
        </View>
      )}
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
  status: {
    fontSize: 14,
    color: '#555555',
    marginTop: 10,
  },
  coords: {
    marginTop: 8,
  },
  coordsText: {
    fontSize: 14,
    color: '#111111',
    marginTop: 2,
  },
});
