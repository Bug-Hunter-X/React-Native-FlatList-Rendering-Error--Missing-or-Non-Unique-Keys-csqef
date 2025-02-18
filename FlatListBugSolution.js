// FlatListBugSolution.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => ({ id: i, title: `Item ${i}` }));

const FlatListBugSolution = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id.toString()} // Unique key for each item
      renderItem={({ item }) => <View><Text>{item.title}</Text></View>}
    />
  );
};

export default FlatListBugSolution;