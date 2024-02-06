import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, Pressable} from 'react-native';
import {firebase} from '../../../../../firebase/config';
import Loader from '../../../../layouts/Loader';
import {useNavigation} from '@react-navigation/native';

const RecommendedStories = () => {
  const [recommendedStoriesData, setRecommendedStoriesData] = useState([]);
  const recommendedStoriesRef = firebase.firestore().collection('stories');
  const [loading, setLoading] = useState(true); // for loader
  const navigation = useNavigation();

  useEffect(() => {
    const fetchRecommendedStories = async () => {
      try {
        const querySnapshot = await recommendedStoriesRef.limit(4).get();
        const recommendedStories = querySnapshot.docs.map(doc => {
          const {key, name, imgUrl, pdfUrl} = doc.data();
          return {
            id: doc.id,
            key,
            name,
            imgUrl,
            pdfUrl,
          };
        });
        const storiesWithButton = [
          ...recommendedStories,
          {
            token: false,
            // source: require('../../../../../assets/more.png'),
            name: 'See All',
          },
        ];
        // Set the fetched recommended books in the state
        setRecommendedStoriesData(storiesWithButton);
        setLoading(false); // when data is fetched set loading to false
      } catch (error) {
        console.error('Error fetching recommended books data: ', error);
      }
    };

    fetchRecommendedStories();
  }, []);

  const handlePress = item => {
    if (item.name === 'See All') {
      // Redirect to the 'Books' component
      navigation.navigate('Stories');
    } else {
      // Redirect to 'ViewBook' for other items
      navigation.navigate('ViewBook', {bookData: item});
    }
  };

  return (
    <View style={{flex: 1, margin: 15}}>
      <Text style={{fontSize: 22, fontWeight: 'bold', color: '#000'}}>
        Recommended Stories
      </Text>
      {loading ? (
        <Loader loadingText="Loading Recommended Stories..." />
      ) : (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={recommendedStoriesData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Pressable
              onPress={() => handlePress(item)}
              style={{
                width: 100,
                height: 170,
                borderWidth: 1,
                borderColor: '#9fe0fc',
                borderRadius: 10,
                margin: 10,
                backgroundColor: '#D1F1FF',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {item.name === 'See All' ? (
                <Image
                  style={{
                    width: '60%',
                    height: 90,
                    resizeMode: 'contain',
                  }}
                  source={require('../../../../../assets/more.png')}
                />
              ) : (
                <Image
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'contain',
                  }}
                  source={{uri: item.imgUrl}}
                />
              )}
              <Text
                style={{
                  marginTop: 5,
                  fontWeight: 'bold',
                  color: '#004aad',
                  textAlign: 'center',
                  fontSize: 12,
                }}
                numberOfLines={2}
                ellipsizeMode="tail">
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
};

export default RecommendedStories;
