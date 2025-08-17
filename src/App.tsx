import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  StatusBar,
} from 'react-native';
import type { TextInputProps } from 'react-native';

const defaultTextInputProps: TextInputProps = {
  caretHidden: false,
  clearTextOnFocus: true,
  clearButtonMode: 'always',
  placeholderTextColor: 'gray',
};

function App() {
  const [count, setCount] = React.useState<number>(0);
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [welcomeMessage, setWelcomeMessage] =
    React.useState<string>('Welcome, Guest!');
  return (
    <View style={styles.container}>
      <View style={styles.northPanel}>
        <TextInput
          {...defaultTextInputProps}
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          {...defaultTextInputProps}
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button
          title="Login"
          onPress={() => {
            if (username.trim() && password.trim()) {
              setWelcomeMessage(`Welcome, ${username}!`);
            }
          }}
        />
      </View>
      <View style={styles.centerPanel}>
        <Text style={styles.text}>{welcomeMessage}</Text>
        <Text style={styles.text}>Count: {count}</Text>
      </View>
      <View style={styles.southPanel}>
        <View style={styles.buttonContainer}>
          <Button title="Decrement" onPress={() => setCount(count - 1)} />
          <Button title="Increment" onPress={() => setCount(count + 1)} />
        </View>
      </View>
      <StatusBar barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 12,
    padding: 10,
    width: '80%',
    fontSize: 20,
  },
  centerPanel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
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
    backgroundColor: 'skyblue',
  },
  southPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  },
});

export default App;
