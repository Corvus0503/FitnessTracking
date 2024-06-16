import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Text } from "react-native";
import exercises from "../../assets/data/fitness";
import ExerciseList from "../../src/components/ExerciseList";
import { Image } from "expo-image";

export default function App() { 

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/fitness.jpg')}
        />
        <Text style={styles.appName}>FITNESS TRACKING</Text>
      </View>
      
      <FlatList
        data={exercises}
        contentContainerStyle={{gap: 10 }}
        keyExtractor={(item) => item.name    }
        renderItem={({ item }) => (
          <ExerciseList item={item}/>
        )}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={21}
        removeClippedSubviews
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    justifyContent: "center",
  },
  appName: {
    position: "absolute",
    color: "ghostwhite",
    fontSize: 28,
    fontWeight: "bold",
    left: 20,
    top: 50,
  },
  image: {
    height: 150,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  imgContainer: {
    paddingBottom: 10
  }
});
