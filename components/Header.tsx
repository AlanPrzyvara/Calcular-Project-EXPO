import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Image
          source={require("../assets/calcularlogo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Ferramenta de aprendizagem de cálculo</Text>
      </View>
      <Text style={styles.date}>07/06/2022</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    maxWidth: "70%",
    flexGrow: 1,
  },
  logo: {
    width: 100,
    height: 35,
    resizeMode: "contain",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#494d4b",
  },
  date: {
    fontSize: 14,
    color: "#808080",
  },
});
