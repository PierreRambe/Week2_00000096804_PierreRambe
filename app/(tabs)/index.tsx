import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  StyleSheet 
} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* PROFILE UTAMA */}
      <View style={styles.card}>
        <Image 
          source={require('../../assets/images/profile.jpg')} 
          style={styles.image}
        />
        <Text style={styles.name}>Pierre Rambe</Text>
        <Text style={styles.text}>NIM: 00000096805</Text>
      </View>

      {/* TEMAN */}
      <View style={styles.card}>
        <Image 
          source={require('../../assets/images/bahlil.jpeg')} 
          style={styles.image}
        />
        <Text style={styles.name}>Bahlil</Text>
        <Text style={styles.text}>Pekerjaan: Mentri ESDM</Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={require('../../assets/images/anies.jpg')} 
          style={styles.image}
        />
        <Text style={styles.name}>Anies</Text>
        <Text style={styles.text}>Pekerjaan: Politikus</Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={require('../../assets/images/mark.jpeg')} 
          style={styles.image}
        />
        <Text style={styles.name}>Mark</Text>
        <Text style={styles.text}>Pekerjaan: CEO Facebook</Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={require('../../assets/images/purbaya.jpeg')} 
          style={styles.image}
        />
        <Text style={styles.name}>Purbaya</Text>
        <Text style={styles.text}>Pekerjaan: Mentri Keuangan</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
});
