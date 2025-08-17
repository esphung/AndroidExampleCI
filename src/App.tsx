import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

function App() {
  const [count, setCount] = React.useState<number>(0);
  return (
    <View style={styles.container}>
      <View style={styles.northPanel}>
        <Text style={styles.text}>Count: {count}</Text>
      </View>
      <View style={styles.southPanel}>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
  northPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  southPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0d0d0',
  },
});

export default App;
