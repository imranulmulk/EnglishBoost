import {View, Text, Pressable, FlatList} from 'react-native';
import React from 'react';
import styles from '../../../../Styles/QuizStyle';
import ActiveVoice from './data/activeVoice';
import BlockList from '../../../layouts/BlockList';
import PassiveVoice from './data/PassiveVoice';
const Voices = ({navigation}) => {
  const Test_data = [
    {
      id: 1,
      title: 'Active Voice',
      name: 'VoicesDefinition',
      definition: ActiveVoice,
    },
    {
      id: 2,
      title: 'Passive Voice',
      name: 'VoicesDefinition',
      definition: PassiveVoice,
    },
  ];

  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.innerWrapper}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Test_data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View>
                <Pressable
                  style={{
                    width: '95%',
                  }}
                  onPress={() =>
                    navigation.navigate(item.name, {
                      title: item.title,
                      def: item.definition,
                    })
                  }>
                  {/* <Text style={styles.text}>{item.title}</Text> */}

                  <BlockList
                    item={item}
                    image={require('../../../../assets/partOfspeech.png')}
                  />
                </Pressable>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default Voices;
