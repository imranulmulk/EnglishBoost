import {View, Text, Pressable, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../../../Styles/JokeStyle';
import jokes from './jokesData';
const Jokes = () => {
  const [joke, setJoke] = useState('');

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  useEffect(() => {
    getRandomJoke();
  }, []);
  return (
    <View style={styles.Wrapper}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'lightgreen',
          width: '95%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../../assets/joke.png')}
          />
        </View>
        <View style={styles.JokeBox}>
          <Text style={styles.text}>{joke}.🤣</Text>
        </View>
        <Pressable style={styles.btn} onPress={getRandomJoke}>
          <Text style={styles.btnText}>Tap</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Jokes;
