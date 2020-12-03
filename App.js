import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [state, setstate] = useState({ bg: null, bgButton: "orange" });

  randomColorGen = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
    );
  };

  onClick = () => {
    setstate({ bg: randomColorGen(), bgButton: randomColorGen() });
  };

  return (
    <View style={[styles.container, { backgroundColor: state.bg }]}>
      <TouchableOpacity onPress={onClick}>
        <Text style={[styles.button, { backgroundColor: state.bgButton }]}>
          Switch Color
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "white",
    fontSize:22
  },
});
