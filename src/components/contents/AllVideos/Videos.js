import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  AppState,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '../../../../firebase/config';
import RecomVideosSkeleton from '../../../layouts/RecomVideosSkeleton';

const Videos = () => {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const youtubeRef = firebase.firestore().collection('youtube');
  const [loading, setLoading] = useState(true); // for loader
  const playerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await youtubeRef.get();
        const videos = querySnapshot.docs.map(doc => {
          const {key, token, title, videoId} = doc.data();
          return {
            id: doc.id,
            key,
            token,
            title,
            videoId,
          };
        });

        // Sort the videos array based on the key property
        const sortedVideos = videos.sort((a, b) => a.key - b.key);

        // Add a non-database item (button) to the end of the array
        const videosWithButton = [
          ...sortedVideos,
          {
            key: 6,
            token: false,
            source: require('../../../../assets/more.png'),
            name: 'AllVideos',
          },
        ];

        // setYoutubeVideos(sortedVideos);
        setYoutubeVideos(videosWithButton);
        setLoading(false); // when data is fetched set loading to false
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const navigation = useNavigation();

  useEffect(() => {
    const handleAppStateChange = nextAppState => {
      if (nextAppState === 'inactive') {
        // App is inactive, pause the video
        playerRef.current.pause();
      }
    };

    // Subscribe to app state changes
    AppState.addEventListener('change', handleAppStateChange);

    // Clean up subscription on component unmount
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  const handleVideoPlay = () => {
    // Do something when the video is played
    console.log('Video played');
  };

  const handleVideoPause = () => {
    // Do something when the video is paused
    console.log('Video paused');
  };

  const handleVideoStateChange = state => {
    // Handle video state changes (playing, paused, buffering, etc.)
    console.log('Video state changed:', state);
  };

  return (
    <View style={styles.videoWrapper}>
      <Text style={styles.title}>Recommended Videos</Text>
      {loading ? (
        <RecomVideosSkeleton />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={youtubeVideos}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <View style={styles.videoContainer}>
              {item.token ? (
                <YoutubePlayer
                  ref={playerRef}
                  height={300}
                  videoId={item.videoId}
                  play={false}
                  showinfo={false}
                  modestbranding
                  onReady={handleVideoPlay}
                  onPause={handleVideoPause}
                  onChangeState={handleVideoStateChange}
                />
              ) : (
                <Pressable
                  onPress={() => navigation.navigate(item.name)}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={styles.moreContainer}>
                    <Image style={styles.image} source={item.source} />
                    <Text style={styles.text}>See All</Text>
                  </View>
                </Pressable>
              )}
              <View style={styles.titleInfo}>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};
// import React, {useState, useEffect} from 'react';
// import {View, Text, StyleSheet, FlatList, Pressable, Image} from 'react-native';
// import YoutubePlayer from 'react-native-youtube-iframe';
// import {useNavigation} from '@react-navigation/native';
// import {firebase} from '../../../../firebase/config';
// import RecomVideosSkeleton from '../../../layouts/RecomVideosSkeleton';
// const Videos = () => {
//   const [youtubeVideos, setYoutubeVideos] = useState([]);
//   const youtubeRef = firebase.firestore().collection('youtube');
//   const [loading, setLoading] = useState(true); //for loader

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await youtubeRef.get();
//         const videos = querySnapshot.docs.map(doc => {
//           const {key, token, title, videoId} = doc.data();
//           return {
//             id: doc.id,
//             key,
//             token,
//             title,
//             videoId,
//           };
//         });

//         // Sort the videos array based on the key property
//         const sortedVideos = videos.sort((a, b) => a.key - b.key);

//         // Add a non-database item (button) to the end of the array
//         const videosWithButton = [
//           ...sortedVideos,
//           {
//             key: 6,
//             token: false,
//             source: require('../../../../assets/more.png'),
//             name: 'AllVideos',
//           },
//         ];

//         // setYoutubeVideos(sortedVideos);
//         setYoutubeVideos(videosWithButton);
//         setLoading(false); // when data is fetched set loading to false
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const navigation = useNavigation();
//   return (
//     <View style={styles.videoWrapper}>
//       <Text style={styles.title}>Recommended Videos</Text>
//       {loading ? (
//         <RecomVideosSkeleton />
//       ) : (
//         <FlatList
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           data={youtubeVideos}
//           keyExtractor={item => item.key}
//           renderItem={({item}) => (
//             <View style={styles.videoContainer}>
//               {item.token ? (
//                 <YoutubePlayer
//                   height={300}
//                   videoId={item.videoId}
//                   play={false}
//                   showinfo={false}
//                   modestbranding
//                 />
//               ) : (
//                 <Pressable
//                   onPress={() => navigation.navigate(item.name)}
//                   style={{
//                     flex: 1,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}>
//                   <View style={styles.moreContainer}>
//                     <Image style={styles.image} source={item.source} />
//                     <Text style={styles.text}>See All</Text>
//                   </View>
//                 </Pressable>
//               )}
//               <View style={styles.titleInfo}>
//                 <Text style={styles.text}>{item.title}</Text>
//               </View>
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// };
const styles = StyleSheet.create({
  videoWrapper: {
    flex: 1,
    margin: 15,
    // backgroundColor: 'lightgreen',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
  },
  videoContainer: {
    backgroundColor: '#D1F1FF',
    marginRight: 15,
    width: 300,
    borderRadius: 10,
    // elevation: 3,
    padding: 10,
    borderWidth: 0.8,
    borderColor: '#9fe0fc',
    marginTop: 20,
  },
  moreContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  titleInfo: {
    marginTop: '-45%',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    width: '50%',
    objectFit: 'contain',
  },
});
export default Videos;
