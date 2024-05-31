import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack ">This is now home</Text>
      <StatusBar style="auto"/>
      <Link href='/home' className="text-blue-500">Go to Home</Link>
    </View>
  );
}
