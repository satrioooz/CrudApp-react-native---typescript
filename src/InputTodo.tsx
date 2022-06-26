import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  GestureResponderEvent,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
  },
  txtInput: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    borderColor: '#808080',
    borderWidth: 1,
    paddingLeft: 10,
  },
  btnClick: {
    borderRadius: 10,
  },
});

interface IProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const InputTodo: React.FC<IProps> = ({text, setText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <TextInput
        value={text}
        onChangeText={text => setText(text)}
        style={styles.txtInput}
        placeholder="Input Todo..."
      />
    </View>
  );
};

export default InputTodo;
