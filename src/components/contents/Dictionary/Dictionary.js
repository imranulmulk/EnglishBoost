import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Sound from 'react-native-sound';
import DictionarySkeleton from '../../../layouts/DictionarySkeleton';
import InternetCheck from '../../../layouts/InternetCheck';
import BannerAdComponent from '../../../Google Ads/BannerAdComponent';
import {
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  TestIds,
  AdEventType,
} from 'react-native-google-mobile-ads';

const adUnitId = TestIds.INTERSTITIAL;
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const Dictionary = () => {
  const [word, setWord] = useState('');
  const [dictionaryData, setDictionaryData] = useState([]);
  const [audio, setAudio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false); //for Ad

  // popup ad
  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
        interstitial.show();
      },
    );
    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  const extractData = entry => {
    const firstMeaning = entry.meanings.length >= 1 ? entry.meanings[0] : null;

    return {
      word: entry.word,
      phonetic: entry.phonetic,
      meanings: firstMeaning
        ? [
            {
              // partOfSpeech: firstMeaning.partOfSpeech,
              definitions: firstMeaning.definitions,
            },
          ]
        : [],
      sourceUrls: entry.sourceUrls,
      audioUrl: entry.phonetics[0]?.audio,
    };
  };

  const dictionaryApi = async () => {
    try {
      setLoading(true);
      const results = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      );
      if (results.data.length > 0) {
        const entry = results.data[0];
        const extractedData = extractData(entry);
        setDictionaryData([extractedData]);

        // Load the audio file
        if (extractedData.audioUrl) {
          setAudio(
            new Sound(extractedData.audioUrl, '', error => {
              if (error) {
                console.log('Failed to load the sound', error);
              }
            }),
          );
        }
      } else {
        // Handle when no data is returned
        setDictionaryData([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const loadAudio = () => {
    if (audio) {
      audio.release();
    }
    if (dictionaryData.length > 0 && dictionaryData[0].audioUrl) {
      setAudio(
        new Sound(dictionaryData[0].audioUrl, '', error => {
          if (error) {
            console.log('Failed to load the sound', error);
          }
        }),
      );
    }
  };

  const playAudio = () => {
    if (audio) {
      audio.play(success => {
        if (success) {
          console.log('Successfully finished playing');
        } else {
          console.log('Playback failed due to audio decoding errors');
        }
      });
    }
  };

  const handleSearch = () => {
    // Clear previous details
    setDictionaryData([]);
    if (audio) {
      audio.release();
    }
    setAudio(null);

    dictionaryApi();
    setWord('');
  };

  useEffect(() => {
    return () => {
      // Cleanup function
      if (audio) {
        audio.release();
      }
    };
  }, [dictionaryData]);

  return (
    <InternetCheck>
      <View style={styles.mainWrapper}>
        <View style={styles.innerWrapper}>
          {/* searchbar */}
          <View style={styles.searchSection}>
            <Searchbar
              onChangeText={text => setWord(text)}
              placeholder="Search..."
              value={word}
              style={styles.searchbar}
              onSubmitEditing={handleSearch}
            />
            <Pressable style={styles.searchBtn} onPress={handleSearch}>
              <Icon name="search-outline" size={30} color="#fff" />
            </Pressable>
          </View>
          {loading && <DictionarySkeleton />}
          <ScrollView showsVerticalScrollIndicator={false}>
            {dictionaryData.map((entry, ind) => (
              <View key={ind}>
                {/* Word Section */}
                <View style={styles.wordSection}>
                  <Text style={styles.word}>{entry.word}</Text>
                  <Pressable style={styles.speakBtn} onPress={playAudio}>
                    <Icon name="volume-high" size={40} color="#0079FF" />
                  </Pressable>
                </View>

                {/* Meaning Section */}
                {/* <View style={styles.section}>
                {entry.meanings.map((meaning, meaningIndex) => (
                  <View key={meaningIndex}>
                    {meaning.partOfSpeech && (
                      <Text style={styles.partOfSpeech}>
                        {meaning.partOfSpeech}
                      </Text>
                    )}
                  </View>
                ))}
              </View> */}

                {/* Definition Section */}
                <View style={styles.section}>
                  <Text
                    style={{
                      color: '#0079FF',
                      fontSize: 22,
                      fontWeight: 'bold',
                    }}>
                    Definitions:
                  </Text>
                  {entry.meanings.map((meaning, meaningIndex) => (
                    <View key={meaningIndex}>
                      {meaning.definitions &&
                        meaning.definitions
                          .slice(0, 5)
                          .map((definition, definitionIndex) => (
                            <View key={definitionIndex}>
                              {definition.definition && (
                                <Text style={styles.definition}>
                                  ● {definition.definition}
                                </Text>
                              )}
                            </View>
                          ))}
                    </View>
                  ))}
                </View>

                {/* Example Section */}
                <View style={styles.section}>
                  <Text
                    style={{
                      color: '#0079FF',
                      fontSize: 22,
                      fontWeight: 'bold',
                    }}>
                    Examples:
                  </Text>
                  {entry.meanings.map((meaning, meaningIndex) => (
                    <View key={meaningIndex}>
                      {meaning.definitions &&
                        meaning.definitions
                          .slice(0, 5)
                          .map((definition, definitionIndex) => (
                            <View key={definitionIndex}>
                              {definition.example && (
                                <Text style={styles.example}>
                                  ● {definition.example}
                                </Text>
                              )}
                            </View>
                          ))}
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </ScrollView>
          <BannerAdComponent />
        </View>
      </View>
    </InternetCheck>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  innerWrapper: {
    width: '95%',
    height: '100%',
  },
  searchbar: {
    width: '80%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  searchBtn: {
    backgroundColor: '#0079FF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  searchSection: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  //   main word
  wordSection: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  word: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  speakBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  partOfSpeech: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'grey',
  },
  example: {
    fontSize: 16,
    color: '#000',
    margin: 3,
  },
  definition: {
    fontSize: 16,
    color: '#000',
    margin: 3,
  },
  section: {
    marginTop: 10,
  },
});
export default Dictionary;
