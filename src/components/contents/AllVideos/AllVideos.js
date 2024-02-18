import {View, Text, FlatList, Pressable, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BannerAdComponent from '../../../Google Ads/BannerAdComponent';

const AllVideos = () => {
  const allCategories = [
    {
      id: 1,
      title: 'English With Movies',
      name: 'AllEngMovies',
    },
    {
      id: 2,
      title: 'English With Cartoons',
      name: 'AllEngCartoons',
    },
    {
      id: 3,
      title: 'English With Natives',
      name: 'AllNativeEnglish',
    },
    {
      id: 4,
      title: 'English Grammar',
      name: 'AllEngGrammar',
    },
    {
      id: 5,
      title: 'English With Idioms',
      name: 'AllEngIdioms',
    },
  ];
  const navigation = useNavigation();
  const renderCategoryButton = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Pressable
          style={styles.categoryButton}
          onPress={() => {
            navigation.navigate(item.name);
            // console.log(`Selected category: ${item.title}`);
          }}>
          <Image
            style={styles.btnImage}
            source={require('../../../../assets/videoplay.png')}
          />
          <Text style={styles.categoryText}>{item.title}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        data={allCategories}
        keyExtractor={item => item.id.toString()}
        renderItem={renderCategoryButton}
      />
      <BannerAdComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryButton: {
    flexDirection: 'row',
    width: '85%',
    backgroundColor: '#0079FF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D1F1FF',
  },
  btnImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
});

export default AllVideos;
