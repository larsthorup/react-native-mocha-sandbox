/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import './mocha';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const backgroundColor = isDarkMode ? Colors.black : Colors.white;
  const color = isDarkMode ? Colors.white : Colors.black;

  const [isRunning, setIsRunning] = useState(false);
  const [testList, setTestList] = useState([]);
  useEffect(() => {
    if (!isRunning) {
      setIsRunning(true);
      const runner = mocha.run(() => {
        setTestList(runner.testResults.tests.map((test) => `${test.title}: ${!test.err.message}`));
      });
    }
  }, [isRunning]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor,
          }}>
          <Text style={{ ...styles.sectionTitle, color: Colors.white }}>
            Mocha Test Runner
          </Text>
          {testList.map((line, i) => (
            <Text key={i} style={{ color: Colors.white }}>
              {line}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
