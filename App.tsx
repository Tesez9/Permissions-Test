import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/components/Header';
import CameraPermission from './src/components/CameraPermission';
import LocationPermission from './src/components/LocationPermission';
import ContactsPermission from './src/components/ContactsPermission';
import GalleryPermission from './src/components/GalleryPermission';

export default function App() {
  return (
    <View style={styles.screen}>
      <SafeAreaView edges={['top', 'bottom']} style={styles.safe}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Header />
          <CameraPermission />
          <LocationPermission />
          <ContactsPermission />
          <GalleryPermission />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safe: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
});
