import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../../../Styles/StartQuizStyle';
const ReadyQuiz = ({route}) => {
  // --------Test data-------
  const Test = route.params.title;
  //-------- englishTenseQuestions-------
  const englishTenseQuestions = route.params.questions;
  const navigation = useNavigation();
  return (
    // ------wrapper-------
    <View style={styles.startWrapper}>
      <View style={styles.upperSection}>
        {/* <Pressable onPress={() => navigation.navigate('Quiz')}>
          <View style={styles.backbtn}>
            <Text style={styles.backtxt}>Go Back</Text>
          </View>
        </Pressable> */}
        <View style={styles.imageWrapper}>
          <Image
            style={styles.img}
            source={require('../../../../assets/startQuiz.png')}
          />
        </View>
        <View>
          <Text style={{color: '#0079FF', fontSize: 45, fontWeight: 'bold'}}>
            Super Quiz
          </Text>
          <Text style={{color: '#000', fontSize: 18}}>
            Play Super Quiz and Test Your English Knowledge
          </Text>
        </View>
      </View>
      {/* ----ready to ----- */}
      <View style={styles.lowerSection}>
        <View>
          <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold'}}>
            Today's Quiz on
          </Text>
          <Text style={{color: '#0079FF', fontSize: 32, fontWeight: 'bold'}}>
            {Test}
          </Text>
          <Text style={{color: 'black', fontSize: 14}}>
            There will be 10 Questions in Quiz
          </Text>
        </View>
        {/* ---------------------------------button------------------------------------ */}
        <Pressable
          onPress={() =>
            navigation.navigate('Quiz_Questions', {
              title: Test,
              QuizQuesData: englishTenseQuestions,
            })
          }>
          <View style={styles.playbtn}>
            <Text style={styles.btnText}>Play Quiz Now</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
export default ReadyQuiz;
