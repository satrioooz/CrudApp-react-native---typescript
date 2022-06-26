import React, {useState, FC} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    bottom: 40,
    height: 50,
    width: Dimensions.get('window').width,
    backgroundColor: '#333',
  },
});

const Navigation: FC = () => {
  return (
    <View style={styles.nav}>
      <Text>Navigation</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};

export default Navigation;
