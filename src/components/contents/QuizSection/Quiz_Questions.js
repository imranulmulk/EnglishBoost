import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import React, {useState, useEffect} from 'react';
// import QuizQuesData from "./QuizQuesData";
import styles from '../../../../Styles/QuestionStyle';
import {ProgressBar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Quiz_Questions = ({route}) => {
  const navigation = useNavigation();
  // --------------Questions--------------
  const data = route.params.QuizQuesData;
  // -------Quiz title------------
  const title = route.params.title;
  const [progress, setProgress] = useState(0); // Change this value to set the progress
  const progressBarColor = '#8ed4ee';
  const allQuestion = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctOption, setCorrectOption] = useState(null);
  const [currentSelectedOption, setCurrentSelectedOption] = useState(null);
  const [isDisabledOption, setisDisabledOption] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextBtn, setshowNextBtn] = useState(false);
  // const [disabled, setdisabled] = useState(1);
  // ----------validate Answer------------

  // useEffect(() => {
  //   // This effect runs whenever correctOption changes
  //   if (currentSelectedOption !== null) {
  //     if (currentSelectedOption === correctOption) {
  //       setProgress(progress + 0.1);
  //       // setisDisabledOption(true);
  //       setisDisabledOption(true);
  //     }
  //     setshowNextBtn(true);
  //   }
  // }, [correctOption, currentSelectedOption, showNextBtn]);

  const validateAnswer = selectedOption => {
    const correct_option = allQuestion[currentQuestionIndex].correct_option;
    setCurrentSelectedOption(selectedOption);
    setCorrectOption(correct_option);
    setisDisabledOption(true);
    setProgress(progress + 0.1);
    if (selectedOption == correct_option) {
      setScore(score + 1);
    }
    setshowNextBtn(true);
  };
  // show next button
  const handleNext = () => {
    if (currentQuestionIndex === allQuestion.length - 1) {
      setCurrentQuestionIndex(0);
      setCorrectOption(null);
      setCurrentSelectedOption(null);
      setisDisabledOption(false);
      setshowNextBtn(false);
      setProgress(0);
      // const newDisabledValue = disabled + 1;
      // setdisabled(newDisabledValue);
      // setisDisabledOption(true);
      navigation.navigate('Result', {score: score});
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCorrectOption(null);
      setshowNextBtn(false);
      setisDisabledOption(false);
    }
  };

  return (
    <View style={styles.Wrapper}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#0079FF'}}>
          {title}
        </Text>
      </View>
      {/* -----------PROGRESS BAR---------- */}
      <ProgressBar
        styleAttr="Horizontal"
        indeterminate={false}
        progress={progress}
        color={'#0079FF'}
        style={{width: '100%', height: 30, borderRadius: 10, marginTop: 20}}
      />
      {/* ----------COUNTER--------------- */}
      <View style={{paddingTop: 10, paddingLeft: 5}}>
        <Text style={{fontSize: 12, color: 'white'}}>
          {currentQuestionIndex + 1}/{allQuestion.length}
        </Text>
      </View>
      {/* --------------QUESTION------------ */}

      {/* Your content goes here */}

      <View style={styles.choices}>
        <View style={styles.questionsWrapper}>
          <Text style={styles.questiontext}>
            {allQuestion[currentQuestionIndex].question}
          </Text>
        </View>
        {/*------------ options ------------*/}
        <View>
          {allQuestion[currentQuestionIndex]?.options.map(option => (
            <TouchableOpacity
              key={option}
              disabled={isDisabledOption}
              style={{
                width: '100%',
                // height: 55,
                padding: 15,
                borderRadius: 10,
                marginTop: 20,
                flexDirection: 'row',
                borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                borderColor:
                  option === currentSelectedOption
                    ? option === correctOption
                      ? 'green'
                      : 'red'
                    : '#005eff',
                backgroundColor:
                  option === currentSelectedOption
                    ? option === correctOption
                      ? 'rgba(0,255,0,0.2)'
                      : 'rgba(255,0,0,0.1)'
                    : 'white',
              }}
              onPress={() => validateAnswer(option)}>
              <Text
                style={{fontSize: 16, fontStyle: 'italic', color: '#004aad'}}>
                {option}
              </Text>
              {option === currentSelectedOption && option === correctOption ? (
                <Icon name="checkmark-circle" size={20} color="green" />
              ) : option === currentSelectedOption ? (
                <Icon name="close-circle" size={20} color="red" />
              ) : null}
            </TouchableOpacity>
          ))}
        </View>
        {/* ---------------------next button----------------- */}
        {showNextBtn && (
          <View>
            <TouchableOpacity onPress={handleNext} style={styles.nextbtn}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Quiz_Questions;
