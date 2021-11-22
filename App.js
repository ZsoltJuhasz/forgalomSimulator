import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, TouchableHighlight } from 'react-native';

import styles from './App.style';
import Button from './components/Button.js';

export default function App() {
  const[all, setAll] = useState(0);
  const[car, setCar] = useState(0);
  const[truck, setTruck] = useState(0);
  const[pedestrian, setPedestrian] = useState(0);

  function handleDelButton(){
    setAll(0);
    setCar(0);
    setTruck(0);
    setPedestrian(0);
  }
  function handleCarButton(){
    setCar(car+1);
    setAll(all+1);
  }
  function handleTruckButton(){
    setTruck(truck+1);
    setAll(all+1);
  }
  function handlePedestrianButton(){
    setPedestrian(pedestrian+1);
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
      <Button title="Személygépjármű" onPress={handleCarButton}/>

      <Text>{truck}</Text>
      <Button title="Tehergépjármű" onPress={handleTruckButton} />

      <Text>{pedestrian}</Text>
      <Button title="Gyalogos" onPress={handlePedestrianButton} />

      <StatusBar style="auto" />
    </View>
  );
}

