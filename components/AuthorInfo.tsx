import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface AuthorInfoProps {
  author?: string;
  date?: string;
  time?: string;
}

export default function AuthorInfo({ author, date, time }: AuthorInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 8,
  },
  author: {
    textAlign: "left",
    flex: 1,
    fontSize: 14,
    color: "#808080",
  },
  date: {
    textAlign: "center",
    flex: 1,
    fontSize: 14,
    color: "#808080",
  },
  time: {
    textAlign: "right",
    flex: 1,
    fontSize: 14,
    color: "#808080",
  },
});
