import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'; 
import MapScreen from '../../MapScreen';

export default function Home() {
  const [text, setText] = useState('');
  const [selectedActivity, setSelectedActivity] = useState();
  const navigation = useNavigation(); 

  const onChangeText = (value) => {
    setText(value);
  };

  const specialties = [
    { label: "Clínica Médica", value: "clinica medica" },
    { label: "Cirurgia", value: "cirurgia" },
    { label: "Pediatria", value: "pediatria" },
    { label: "Ginecologia e Obstetrícia", value: "ginecologia e obstetricia" },
    { label: "Psiquiatria", value: "psiquiatria" },
    { label: "Medicina de Família e Comunidade", value: "medicina de familia e comunidade" },
  ];

  const specialtiesArray = [
    { label: "Selecione a Especialidade", value: "selecione a especialidade", enabled: false, style: { color: "gray" } },
    ...specialties.map((specialty, index) => specialty),
  ];

  const handleConfirmLocation = () => {
    navigation.navigate('map', { selectedActivity });
  };
  
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo-doctrack.png")}
        style={styles.logo}
      />

      <Picker
        style={styles.pickerComponent}
        selectedValue={selectedActivity}
        onValueChange={(itemValue, itemIndex) => setSelectedActivity(itemValue)}
      >
        {specialtiesArray.map((specialty, index) => (
          <Picker.Item label={specialty.label} value={specialty.value} key={index} enabled={index > 0} style={index === 0? { color: "gray" } : {}} />
        ))}
      </Picker>

      <TextInput
        style={{ height: 200, width: 200,...styles.textinput, fontWeight: 'normal' }}
        placeholder='Atividade'
        onChangeText={onChangeText}
        value={text}
        multiline={true}
        numberOfLines={10}
      />

      <Button
        title="Confirmar a Localização"
        onPress={handleConfirmLocation} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 60,
  },
  textinput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  pickerComponent: {
    width: 350,
  },
  button: {
    marginTop: 20,
    width: 200,
    height: 40,
    backgroundColor: '#4CAF50',
    color: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
