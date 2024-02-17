import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Videos from '../components/contents/AllVideos/Videos';
import {useNavigation} from '@react-navigation/native';
import styles from '../../Styles/WordofTheDay';
import RecommendedBooks from '../components/contents/Pdfs/Books/RecommendedBooks';
import RecommendedStories from '../components/contents/Pdfs/Stories/RecommendedStories';
import SplashScreen from 'react-native-splash-screen';
import BannerAdComponent from '../Google Ads/BannerAdComponent';
import InterstitialAdComponent from '../Google Ads/InterstitialAdComponent';
// import RewardedAdComponent from '../Google Ads/RewardedAdComponent';

const HomeScreen = () => {
  // const [adShown, setAdShown] = useState(false);
  // const {showAd, loaded} = InterstitialAdComponent();
  // const {showRewardedAd, loaded2} = RewardedAdComponent();

  // logic for displaying the ad first the the actual component
  // const handleSearchWordPress = async () => {
  //   if (loaded) {
  //     if (!adShown) {
  //       await showAd(); // Call showAd on the instance
  //       setAdShown(true);
  //     }
  //     navigation.navigate('Dictionary');
  //   } else {
  //     console.warn('Interstitial ad not loaded yet. Cannot show.');
  //   }
  // };

  // const handlePress = async () => {
  //   if (loaded2) {
  //     await showRewardedAd();
  //     navigation.navigate('WordOfTheDay');
  //   } else {
  //     console.warn('Rewarded ad not loaded yet. Cannot show.');
  //     // Navigate to 'WordOfTheDay' directly without showing the ad
  //     navigation.navigate('WordOfTheDay');
  //   }
  //   // corrected
  //   if (loaded2) {
  //     if (!adShown) {
  //       await showRewardedAd();
  //       setAdShown(true);
  //     }
  //     navigation.navigate('WordOfTheDay');
  //   } else {
  //     console.warn('Interstitial ad not loaded yet. Cannot show.');
  //   }
  // };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <BannerAdComponent />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
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
        {/* Dictionary Shortcut */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 10,
            padding: 10,
          }}>
          <Pressable
            style={styles.wordofday}
            onPress={() => navigation.navigate('Dictionary')}>
            <Text style={styles.wText}>Search a Word</Text>
          </Pressable>
        </View>
        {/* Recommended Books Section */}
        <View>
          <RecommendedBooks />
        </View>
        {/* Recommended Stories Section */}
        <View>
          <RecommendedStories />
        </View>
        {/* Videos Section */}
        <View>
          <Videos />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
