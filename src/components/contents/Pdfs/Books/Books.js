import {View, Text, FlatList, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {firebase} from '../../../../../firebase/config';
import PdfSkeleton from '../../../../layouts/PdfSkeleton';
import InternetCheck from '../../../../layouts/InternetCheck';
import {
  InterstitialAd,
  TestIds,
  AdEventType,
} from 'react-native-google-mobile-ads';

const adUnitId = TestIds.INTERSTITIAL;
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

export default function Books({navigation}) {
  const [booksData, setBooksData] = useState([]);
  const booksRef = firebase.firestore().collection('books');
  const [loading, setLoading] = useState(true); //for loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await booksRef.get();
        const books = querySnapshot.docs.map(doc => {
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
        setBooksData(books);
        setLoading(false); // when data is fetched set loading to false
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  // Show Ad
  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        interstitial.show();
      },
    );
    // Start loading the interstitial straight away
    interstitial.load();
    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);
  return (
    <InternetCheck>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {loading ? (
          <PdfSkeleton />
        ) : (
          <FlatList
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            showsVerticalScrollIndicator={false}
            data={booksData}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Pressable
                onPress={() =>
                  navigation.navigate('ViewBook', {bookData: item})
                }
                style={{
                  width: 145,
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
                    height: 160,
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
    </InternetCheck>
  );
}
