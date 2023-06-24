//Start 初期サンプルコード
/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
//End 初期サンプルコード

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const questions = [
  "What is your favorite food?",
  "Have you ever traveled abroad?",
  "What is your dream job?",
  // 他の真実の質問を追加
];

const tasks = [
  "Sing a song in a different language.",
  "Do 10 push-ups.",
  "Tell a joke to everyone.",
  // 他の挑戦のタスクを追加
];

const TruthOrDareGame = () => {
  const [truthQuestion, setTruthQuestion] = useState('');
  const [challengeTask, setChallengeTask] = useState('');

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setTruthQuestion(questions[randomIndex]);
  };

  const getRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    setChallengeTask(tasks[randomIndex]);
  };

  return (
    <View>
      <Text>Truth or Dare Game</Text>

      <Text>Truth Question:</Text>
      <Text>{truthQuestion}</Text>
      <Button title="Get Truth Question" onPress={getRandomQuestion} />

      <Text>Challenge Task:</Text>
      <Text>{challengeTask}</Text>
      <Button title="Get Challenge Task" onPress={getRandomTask} />
    </View>
  );
};

export default TruthOrDareGame;

