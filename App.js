import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput,} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function App() {
  const [text, setText] = useState('');
  const [selectedActivity, setSelectedActivity] = useState();
  const onChangeText = (value) => {
    setText(value);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/QRCode.png")}
        style={styles.logo}
      />
      <TextInput
        style={styles.textinput}
        placeholder='Atividade'
        onChangeText={onChangeText}
        value={text}
      />
     <Picker
        style={styles.pickerComponent}
        selectedValue={selectedActivity}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedActivity(itemValue)
        }>
        <Picker.Item label="Selecione a atividade" value="" />
        <Picker.Item label="Pediatria" value="pediatria" />
        <Picker.Item label="Cirurgia" value="cirurgia" />
        <Picker.Item label="LoremIpsum" value="lorem" />
        </Picker>
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
});
