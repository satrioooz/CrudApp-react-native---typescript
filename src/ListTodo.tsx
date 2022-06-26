import React, {FC} from 'react';
import {Text, Image, StyleSheet, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {ITodo} from '../App';
interface Todo {
  id: string;
  name: string;
}

interface IProps {
  todo: Todo[];
  // setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
  handleClick: (c: string) => void;
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
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
});

{
}

const ListTodo: FC<IProps> = ({todo, handleClick}) => {
  // const handleClick = (id: string) => {
  //   console.log(id);
  //   const deleted = todo.filter(i => i.id !== id);
  //   setTodo([...todo, deleted]);
  //   // setTodo(todo.filter(i => i.id !== id));
  //   // setTodo([...todo, deleted]);
  // };
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
              // display: 'flex',
            }}
            resizeMode="contain"
            source={{
              uri: 'https://ivan-todo-devrank.netlify.app/static/media/empty-item.a0b4b794.png',
            }}
          />
        </View>
      )}
      {todo.map((item: Todo, id: number) => (
        <View key={id} style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              alignItems: 'center',
            }}>
            <Text>{item.name}</Text>
            <View>
              <Text onPress={() => handleClick(item.id)}>🗑</Text>

              {/* <Icon name="trash" size={30} /> */}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ListTodo;
