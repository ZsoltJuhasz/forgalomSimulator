import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';

export default function App() {
  const[all, setAll] = useState(0);
  const[car, setCar] = useState(0);
  const[truck, setTruck] = useState(0);

  function handleDelButton(){
    setAll(0);
    setCar(0);
    setTruck(0);
  }
  function handleCarButton(){
    setCar(car+1);
    setAll(all+1);
  }
  function handleTruckButton(){
    setTruck(truck+1);
    setAll(all+1);
  }
  return (
    <View style={styles.container}>
      <Text>Forgalom számláló</Text>

      <TouchableHighlight
          style={styles.runButton}
          onPress={handleDelButton}
          >
          <Text style={styles.runText}>Mindent töröl</Text>
      </TouchableHighlight>
      <Text style={styles.sumText}>Összes: {all}</Text>

      <Text>{car}</Text>
      <TouchableHighlight
          style={styles.runButton}
          onPress={handleCarButton}
          >
          <Text style={styles.runText}>Személy</Text>
      </TouchableHighlight>

      <Text>{truck}</Text>
      <TouchableHighlight
          style={styles.runButton}
          onPress={handleTruckButton}
          >
          <Text style={styles.runText}>Teher</Text>
      </TouchableHighlight>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  runButton: {
    backgroundColor: 'blue',
    marginTop: 10,
    marginBottom: 70,
    padding: 10,
    borderRadius: 10,
  },
  runText: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
  },
  sumText: {
    marginBottom: 70,
  }
});
