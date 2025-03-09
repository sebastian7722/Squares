import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../theme/colors";
import Button from "../components/ui/Button";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome6 name="cube" size={42} color="black" />
        <Text style={styles.heading}>Squares</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button>Start new game</Button>
        <Button>Exit</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.slate[100],
    justifyContent: "center",
    alignItems: "center",
    gap: 66,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  heading: {
    fontSize: 42,
    fontWeight: "700",
  },
  buttonsContainer: {
    width: 180,
    gap: 8,
  },
});
