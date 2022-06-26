/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  GestureResponderEvent,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/components/Navigation';
import InputTodo from './src/InputTodo';
import ListTodo from './src/ListTodo';

export interface ITodo {
  id: string;
  name: string;
}

const App = () => {
  const [text, setText] = useState<string>('');
  const isDarkMode = useColorScheme() === 'dark';
  const [todo, setTodo] = useState<ITodo[]>([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : Colors.lighter,
  };

  const handlePress = (event: GestureResponderEvent) => {
    event.preventDefault();
    const id = Math.random();
    const Data = {
      id: id.toString(),
      name: text,
    };
    setTodo([...todo, Data]);
    setText('');
    console.log(todo, '< todo');
  };

  const handleClick = (id: string) => {
    console.log(id);
    const deleted = todo.filter(i => i.id !== id);
    setTodo(deleted);
    //
  };

  return (
    // <SafeAreaView style={{height: 'auto'}}>
    <View style={styles.sectionContainer}>
      <View>
        <Text style={styles.textHead}>Todo List Types</Text>
        <ScrollView>
          <InputTodo text={text} setText={setText} />
        </ScrollView>
        <View style={{marginTop: 10}}>
          <Button onPress={handlePress} title="Submit" />
        </View>
      </View>
      <View
        style={{
          width: 'auto',
          marginTop: 10,
          backgroundColor: '#333',
          height: 1,
        }}></View>

      <ListTodo handleClick={handleClick} todo={todo} />
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    position: 'relative',
    height: Dimensions.get('window').height,

    // flex: 1,
  },
  textHead: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '500',
    color: '#17AAF8',
  },
});

export default App;
