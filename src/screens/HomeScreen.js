import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Videos from '../components/contents/AllVideos/Videos';
import {useNavigation} from '@react-navigation/native';
import styles from '../../Styles/WordofTheDay';
import RecommendedBooks from '../components/contents/Pdfs/Books/RecommendedBooks';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <ScrollView style={{flex: 1}}>
        <StatusBar backgroundColor="#0079FF" />
        {/* Navbar Section */}
        <View>
          <Navbar />
        </View>
        {/* Word of the day section */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 10,
            padding: 10,
          }}>
          <Pressable
            style={styles.wordofday}
            onPress={() => navigation.navigate('WordOfTheDay')}>
            <Text style={styles.wText}>Word Of the Day</Text>
          </Pressable>
        </View>
        <View style={{backgroundColor: 'red'}}>
          <RecommendedBooks />
        </View>
        {/* Videos Section */}
        <View style={{backgroundColor: 'yellow'}}>
          <Videos />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
