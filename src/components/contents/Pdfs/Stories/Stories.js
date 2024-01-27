import {View, Text, FlatList, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {firebase} from '../../../../../firebase/config';
import Loader from '../../../../layouts/Loader';

export default function Stories({navigation}) {
  const [storiesData, setStoriesData] = useState([]);
  const storiesRef = firebase.firestore().collection('stories');
  const [loading, setLoading] = useState(true); //for loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await storiesRef.get();
        const stories = querySnapshot.docs.map(doc => {
          const {key, name, imgUrl, pdfUrl} = doc.data();
          return {
            id: doc.id,
            key,
            name,
            imgUrl,
            pdfUrl,
          };
        });
        // Set the fetched stories in the state
        setStoriesData(stories);
        setLoading(false); // when data is fetched set loading to false
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {loading ? (
        <Loader loadingText="Loading Stories..." />
      ) : (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
          data={storiesData}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Pressable
              onPress={() =>
                navigation.navigate('ViewStory', {storyData: item})
              }
              style={{
                width: 140,
                height: 250,
                borderWidth: 1,
                borderColor: '#9fe0fc',
                borderRadius: 10,
                margin: 20,
                backgroundColor: '#D1F1FF',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  // borderRadius: 50,
                  width: '100%',
                  height: 170,
                  objectFit: 'contain',
                }}
                source={{uri: item.imgUrl}}
              />
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: 'bold',
                  color: '#004aad',
                  textAlign: 'center',
                }}>
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}
