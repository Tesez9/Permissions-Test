import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ContactRow {
  id: string;
  name: string;
  phone: string;
}

export default function ContactsPermission() {
  const [status, setStatus] = useState<string | null>(null);
  const [contacts, setContacts] = useState<ContactRow[] | null>(null);

  const allowContacts = async () => {
    try {
      const Contacts = require('expo-contacts');
      const permissionResult = await Contacts.requestPermissionsAsync();
      if (permissionResult.granted === false) {
        setStatus('Permission denied');
        return;
      }
      setStatus('Permission granted');
      const details = await Contacts.Contact.getAllDetails(
        [Contacts.ContactField.FULL_NAME, Contacts.ContactField.PHONES],
        { limit: 5 }
      );
      setContacts(
        details.map((item: { id: string; fullName: string; phones?: { number?: string }[] }) => ({
          id: item.id,
          name: item.fullName || 'No name',
          phone: item.phones && item.phones.length > 0 && item.phones[0].number ? item.phones[0].number : '',
        }))
      );
    } catch {
      setStatus('Permission denied');
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>👤 Contacts</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={allowContacts} style={styles.button}>
        <Text style={styles.buttonText}>Allow Contacts</Text>
      </TouchableOpacity>
      {status !== null && <Text style={styles.status}>Status: {status}</Text>}
      {contacts?.map((item) => (
        <View key={item.id} style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.phone}>{item.phone !== '' ? item.phone : 'No number'}</Text>
        </View>
      ))}
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
  row: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginTop: 8,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111111',
  },
  phone: {
    fontSize: 13,
    color: '#777777',
    marginTop: 2,
  },
});
