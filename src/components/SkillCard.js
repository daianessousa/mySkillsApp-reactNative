import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1F1E25",
    borderRadius: 50,
    padding: 20,
    alignItems: "center",
    marginVertical: 5,
  },
  textSkill: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});
