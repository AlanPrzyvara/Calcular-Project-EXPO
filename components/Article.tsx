import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AuthorInfo from "./AuthorInfo";

interface ArticleProps {
  title?: string;
  text?: string;
  imageSrc?: any;
  author?: string;
  date?: string;
  time?: string;
}

export default function Article({ title, text, imageSrc, author, date, time }: ArticleProps) {
  return (
    <View style={[styles.article, !title && !text && !author && { padding: 0, backgroundColor: "transparent" }]}>
      {imageSrc && <Image source={imageSrc} style={styles.image} />}
      {(title || author || text) && (
        <View style={styles.content}>
          {title && <Text style={styles.title}>{title}</Text>}
          <AuthorInfo author={author} date={date} time={time} />
          {text && <Text style={styles.text}>{text}</Text>}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  article: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
  },
  content: {
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    marginTop: 8,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 10,
    resizeMode: "contain",
  },
});
