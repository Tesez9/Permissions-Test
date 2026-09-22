import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraPermission() {
  const [status, setStatus] = useState<string | null>(null);

  const allowCamera = async () => {
    try {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      if (permissionResult.granted === false) {
        setStatus('Permission denied');
        return;
      }
      setStatus('Permission granted');
    } catch {
      setStatus('Permission denied');
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>📷 Camera</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={allowCamera} style={styles.button}>
        <Text style={styles.buttonText}>Allow Camera</Text>
      </TouchableOpacity>
      {status !== null && <Text style={styles.status}>Status: {status}</Text>}
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
});
