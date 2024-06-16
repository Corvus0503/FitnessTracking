import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { ExerciseDetail } from "../interfaces/ExerciseDetail";
import { Image } from "expo-image";

interface Props {
  item: ExerciseDetail;
}

const ExerciseDetailList: React.FC<Props> = ({ item }) => {
  console.log("Rendering item:", item);

  let imageSource;

  // Check if item.image is a string (URL) or an object (require)
  if (typeof item.image === "string") {
    imageSource = { uri: item.image };
  } else if (typeof item.image === "number") {
    imageSource = item.image;
  } else {
    console.error("Invalid image source:", item.image);
  }

  console.log("imageSource:", imageSource);

  return (
    <View style={{ flexDirection: "row", alignItems: "center",   marginLeft: 10,marginRight: 10 }}>
      <Image
        style={{ width: 90, height: 90, }}
        source={imageSource}
        cachePolicy="memory-disk"
      />

      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ marginTop: 4, fontSize: 16, color: "gray" }}>
          X {item.sets}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exerciseContaner: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    shadowColor: "black",
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSutitle: {
    color: "dimgary",
  },
});
export default ExerciseDetailList;
