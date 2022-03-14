import * as React from "react"

import { StyleSheet, View, Text } from "react-native"
import { nativeAriesAskar } from "react-native-aries-askar"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>version: {nativeAriesAskar.version()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
})
