import React, {FC} from 'react';
import {Text, Image, StyleSheet, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {ITodo} from '../App';

export interface IEdit {
  item: ITodo;
}

interface IProps {
  todo: ITodo[];
  handleDelet: (c: string) => void;
  handleEdit: (item: ITodo) => void;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#e0dede',
    borderRadius: 10,
    height: 40,
    padding: 10,
    marginTop: 10,
  },
});

{
}

const ListTodo: FC<IProps> = ({todo, handleEdit, handleDelet}) => {
  return (
    <View style={styles.container}>
      {todo.length === 0 && (
        <View>
          <Image
            style={{
              width: 'auto',
              height: 200,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
            resizeMode="contain"
            source={{
              uri: 'https://ivan-todo-devrank.netlify.app/static/media/empty-item.a0b4b794.png',
            }}
          />
        </View>
      )}
      {todo.map((item: ITodo, id: number) => (
        <View key={id} style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '500'}}>{item.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{marginHorizontal: 8}}
                onPress={() => handleDelet(item.id)}>
                🗑
              </Text>
              <Text onPress={() => handleEdit(item)}>✍️</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ListTodo;
