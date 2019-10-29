/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {
  NativeModules,
  requireNativeComponent,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

//const NoodleButton = requireNativeComponent('RNTNoodleButton');
const NoodleManager = NativeModules.NoodleManager;

const App: () => React$Node = () => {
  const [message, setMessage] = useState('No orders');

  useEffect(() => {
    NoodleManager.addNoodle('Julien', (name, text) => {
      const result = `${name} ${text}`;
      setMessage(result);
    });
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Noodle orders</Text>
        <Text style={styles.sectionDescription}>{message}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
