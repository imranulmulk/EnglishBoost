import React from 'react';
import {View, Text, Image, Pressable, FlatList, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../../Styles/NavbarStyle';
const Navbar = () => {
  const DATA = [
    {
      id: 1,
      title: 'Tenses',
      names: 'AllTenses',
      image: require('../../../assets/tense.png'),
    },

    {
      id: 2,
      title: 'Parts Of Speech',
      names: 'AllPos',
      image: require('../../../assets/partOfspeech.png'),
    },
    {
      id: 3,
      title: 'Voices',
      names: 'Voices',
      image: require('../../../assets/partOfspeech.png'),
    },
    {
      id: 4,
      title: 'Conversations',
      names: 'AllConversations',
      image: require('../../../assets/conversation.png'),
    },
    {
      id: 5,
      title: 'Jokes',
      names: 'Jokes',
      image: require('../../../assets/joke.png'),
    },
    {
      id: 6,
      title: 'Quotes',
      names: 'Quotes',
      image: require('../../../assets/quote.png'),
    },
    //     // {
    //     //   id: 6,
    //     //   title: "Books",
    //     //   names: "Books",
    //     //   image: require("../../assets/Quiz.png"),
    //     // },
    {
      id: 8,
      title: 'Quiz',
      names: 'Quiz',
      image: require('../../../assets/Quiz.png'),
    },
    {
      id: 9,
      title: 'Vocabulary',
      names: 'VocabularyCategories',
      image: require('../../../assets/Vocabulary.png'),
    },
    {
      id: 10,
      title: 'Dictionary',
      names: 'Dictionary',
      image: require('../../../assets/Vocabulary.png'),
    },
  ];
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View style={{flex: 1}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Pressable
                style={styles.boxLayout}
                onPress={() => navigation.navigate(item.names)}>
                <Image style={styles.navImage} source={item.image} />
                <Text style={styles.navText}>{item.title}</Text>
              </Pressable>
            )}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Navbar;
