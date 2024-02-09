import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from '../../../../Styles/AllVideosStyle';
import {firebase} from '../../../../firebase/config';
import AllVideosSkeleton from '../../../layouts/AllVideosSkeleton';

const EngIdioms = () => {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const youtubeRef = firebase.firestore().collection('idioms');
  const [loading, setLoading] = useState(true); //for loader

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
        setYoutubeVideos(sortedVideos);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>English Idioms</Text>
      </View>
      {loading ? (
        <AllVideosSkeleton />
      ) : (
        <FlatList
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          data={youtubeVideos}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={300}
                videoId={item.videoId}
                play={false}
                style={styles.youtube}
                showinfo={false}
                modestbranding
              />

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

export default EngIdioms;
