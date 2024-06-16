import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import fitness from "../../../assets/data/fitness";
import ExerciseDetailList from "../../components/ExerciseDetailList";
import { Image } from "expo-image";

const ExerciseDetail = () => {
  const params = useLocalSearchParams();

  const exerciseDeteil = fitness.find((item) => item.id === params.id);

  if (!exerciseDeteil) {
    return <Text>Exercise not found</Text>;
  }

  let imageSource : any;

  // Check if item.image is a string (URL) or an object (require)
  if (typeof exerciseDeteil.image === "string") {
    imageSource = { uri: exerciseDeteil.image };
  } else if (typeof exerciseDeteil.image === "number") {
    imageSource = exerciseDeteil.image;
  } else {
    console.error("Invalid image source:", exerciseDeteil.image);
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: exerciseDeteil.name,
          headerBackground: () => (
            <Image
              style={{ height: 190 }}
              source={imageSource}
              cachePolicy="memory-disk"
            />
          ),
          headerTintColor : 'white'
        }}
      />
      <FlatList
        data={exerciseDeteil.exercises}
        contentContainerStyle={{ gap: 10 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExerciseDetailList item={item} />}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={21}
      />

      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    justifyContent: "center",
    padding: 10,
  },
});

export default ExerciseDetail;
