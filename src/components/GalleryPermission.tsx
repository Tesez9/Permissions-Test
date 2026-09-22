import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GalleryPermission() {
  const [status, setStatus] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  const openGallery = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        setStatus('Permission denied');
        return;
      }
      setStatus('Permission granted');
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        quality: 1,
      });
      if (!result.canceled) {
        setPhoto(result.assets[0].uri);
      }
    } catch {
      setStatus('Permission denied');
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>🖼️ Gallery</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={openGallery} style={styles.button}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>
      {status !== null && <Text style={styles.status}>Status: {status}</Text>}
      {photo && <Image source={{ uri: photo }} style={styles.image} resizeMode="contain" />}
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
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    marginTop: 12,
    backgroundColor: '#FFFFFF',
  },
});
