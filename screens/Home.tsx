import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
// import Header from "../components/Header";
import Article from "../components/Article";
// import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";
import Divider from "../components/Divider";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Divider />
      <ScrollView contentContainerStyle={styles.content}>
        <Article title=" " text=" " imageSrc={require("../assets/imagemcrianca.png")} />
        <Divider />
        <Article
          author="Prof. Cleiton"
          date="24 Fev 25"
          time="16:40"
          title="Para ser muito bom amanhã é preciso começar a praticar hoje"
          text="São nos primeiros anos escolares que as crianças aprendem os fundamentos da matemática, inclusive as quatro operações..."
        />
        <Article
          title="  "
          text="Aqui você e seu filho irão encontrar exercícios relacionados ao conteúdo ensinado..."
        />
        <Divider />
        <Article
          author="Prof. Cleiton"
          date="24 Fev 25"
          time="16:40"
          title="Matemática: O Alicerce para o Sucesso Escolar!"
          text="Nos primeiros anos escolares, as crianças constroem a base do raciocínio lógico..."
        />
        <Article
          title="  "
          text="Vamos juntos fortalecer essa base e transformar desafios em conquistas!"
        />
      </ScrollView>
      {/* <Sidebar />
      <Footer /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 16,
  },
});
