import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
// import { Exercice } from "../interfaces/Exercice";
import { Fitness } from "../interfaces/Fitness";
import { Link } from "expo-router";
import { Image } from "expo-image";
import ExerciseStyle from "../../assets/styles/ExerciseStyle";

interface Props {
  item: Fitness;
}

const ExerciseList: React.FC<Props> = ({ item }) => {
  let imageSource;

  // Check if item.image is a string (URL) or an object (require)
  if (typeof item.image === "string") {
    imageSource = { uri: item.image };
  } else if (typeof item.image === "number") {
    imageSource = item.image;
  } else {
    console.error("Invalid image source:", item.image);
    imageSource = require("../../assets/images/Cardio/jumpin-jack.gif"); // Provide a default fallback image
  }
  return (
    <Link
      href={{
        pathname: "/exercises/[id]",
        params: { id: item.id },
      }}
      style={styles.exerciseContaner}
      asChild
    >
      <Pressable style={styles.exerciseContaner}>
        <Image
          style={styles.exerciseImage}
          source={imageSource}
          cachePolicy="memory-disk"
        />
        <Text style={styles.exerciseName}>{item.name}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  exerciseContaner: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10
  },
  exerciseImage: {
    width: "100%",
    height: 120,
    borderRadius: 12,
  },
  exerciseName: {
    position: "absolute",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    left: 20,
    top: 20,
  },
  exerciseSutitle: {
    color: "dimgary",
  },
});

export default ExerciseList;
