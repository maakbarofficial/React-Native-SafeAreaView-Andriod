import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "Fourth Item",
  },
  {
    id: "5",
    title: "Fifth Item",
  },
  {
    id: "6",
    title: "Sixth Item",
  },
  {
    id: "7",
    title: "Seventh Item",
  },

  {
    id: "8",
    title: "Eighth Item",
  },
  {
    id: "9",
    title: "Ninth Item",
  },
  {
    id: "10",
    title: "Tenth Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
    <>
      <View
        style={{
          marginTop: StatusBar.currentHeight,
          backgroundColor: "black",
        }}
      >
        <Text
          style={{
            color: "white",
            padding: 50,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "900",
          }}
        >
          SafeAreaView For Andriod
        </Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "black",
  },
  item: {
    backgroundColor: "lightgray",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
