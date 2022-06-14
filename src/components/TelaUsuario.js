import React from "react";
import { View, TextInput, TouchableOpacity, Text, Image, KeyboardAvoidingView } from "react-native";
import styles from '../styles/telaUsuario';

const TelaUsuario = () => {
  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <View style={styles.viewPerfil}>
        <Image source={require("../assets/usuarioPerfil.png")} style={styles.imagemUsuario} />
        <TextInput
          style={styles.input}
          placeholder={"Email"}
          keyboardType={"default"}
        />
        <TextInput
          style={styles.input}
          placeholder={"Nome"}
          keyboardType={"default"}
        />
        <TextInput
          style={styles.input}
          placeholder={"Senha"}
          keyboardType={"default"}
        />
      </View>

      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.editar}>
          <Text style={styles.textButton}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deletar}>
          <Text style={styles.textButton}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default TelaUsuario;
