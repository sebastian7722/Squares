import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import colors from "../../theme/colors";

type ButtonProps = { onPress?: () => void; children: string };

export default function Button({ onPress, children }: ButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: colors.zinc[900],
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
    color: colors.zinc[50],
  },
});
