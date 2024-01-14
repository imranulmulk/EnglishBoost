import React from 'react';

import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
const Result = ({route}) => {
  const score = route.params.score;
  const passThreshold = 5;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '100%',
        }}>
        <Text
          style={{
            // color: "#0079FF",
            zIndex: 100,
            fontSize: 25,
          }}>
          You Scored
        </Text>
        <Text
          style={{
            color: '#0079FF',
            zIndex: 100,
            fontSize: 50,
            fontWeight: 'bold',
          }}>
          {route.params.score}
        </Text>
        {score > passThreshold ? (
          <Text style={{color: 'green', fontSize: 30, fontWeight: 'bold'}}>
            Congatulations
          </Text>
        ) : (
          <Text style={{color: 'red', fontSize: 30, fontWeight: 'bold'}}>
            Try Again
          </Text>
        )}
      </View>
      {score > passThreshold ? (
        <LottieView
          style={{
            height: 300,
            width: 300,
            position: 'absolute',
            top: 100,
          }}
          source={require('../../../../assets/LottieAnimation/passed.json')}
          autoPlay
        />
      ) : (
        <LottieView
          style={{
            height: 300,
            width: 300,
            position: 'absolute',
            top: 100,
          }}
          source={require('../../../../assets/LottieAnimation/failed.json')}
          autoPlay
          speed={0.5}
        />
      )}
    </View>
  );
};

export default Result;
