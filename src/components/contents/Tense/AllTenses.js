// import {View, Text, Pressable, FlatList} from 'react-native';
// import React from 'react';
// import styles from '../../../../Styles/QuizStyle';

// import BlockList from '../../../layouts/BlockList';
// import PresentIndefiniteTense from './Data/PresentTense';
// import PresentContinuousTense from './Data/PresentContinueTense';
// import PresentPerfectTense from './Data/PresentPerfect';
// import PresentPerfectContinuousTense from './Data/PresentPerfectCon';
// import PastIndefiniteTense from './Data/PastIndifinite';
// import PastContinuousTense from './Data/PastContinous';
// import PastPerfectTense from './Data/PastPerfect';
// import PastPerfectContinuousTense from './Data/PastPerfectCon';
// import FutureIndefiniteTense from './Data/FutureIndifinite';
// import FutureContinuousTense from './Data/FutureCon';
// import FuturePerfectTense from './Data/FuturePerfect';
// import FuturePerfectContinuousTense from './Data/FuturePerfectCon';
// import {useNavigation} from '@react-navigation/native';
// const AllTenses = () => {
//   const data = [
//     {
//       id: 1,
//       title: 'Present Indefinite',
//       name: 'Tense',
//       definition: PresentIndefiniteTense,
//     },
//     {
//       id: 2,
//       title: 'Present Continuous',
//       name: 'Tense',
//       definition: PresentContinuousTense,
//     },
//     {
//       id: 3,
//       title: 'Present Perfect',
//       name: 'Tense',
//       definition: PresentPerfectTense,
//     },
//     {
//       id: 4,
//       title: 'Present Perfect Continuous',
//       name: 'Tense',
//       definition: PresentPerfectContinuousTense,
//     },

//     {
//       id: 5,
//       title: 'Past Indifinite',
//       name: 'Tense',
//       definition: PastIndefiniteTense,
//     },
//     {
//       id: 6,
//       title: 'Past Continuous',
//       name: 'Tense',
//       definition: PastContinuousTense,
//     },
//     {
//       id: 7,
//       title: 'Past Perfect',
//       name: 'Tense',
//       definition: PastPerfectTense,
//     },
//     {
//       id: 8,
//       title: 'Past Perfect Continuous',
//       name: 'Tense',
//       definition: PastPerfectContinuousTense,
//     },
//     {
//       id: 9,
//       title: 'Future Indifinite',
//       name: 'Tense',
//       definition: FutureIndefiniteTense,
//     },
//     {
//       id: 10,
//       title: 'Future Continuous',
//       name: 'Tense',
//       definition: FutureContinuousTense,
//     },
//     {
//       id: 11,
//       title: 'Future Pefect',
//       name: 'Tense',
//       definition: FuturePerfectTense,
//     },
//     {
//       id: 12,
//       title: 'Future Perfect Continuous',
//       name: 'Tense',
//       definition: FuturePerfectContinuousTense,
//     },
//   ];
//   const navigation = useNavigation();

//   return (
//     <>
//       <View style={styles.Wrapper}>
//         <View style={styles.innerWrapper}>
//           <FlatList
//             showsVerticalScrollIndicator={false}
//             data={data}
//             keyExtractor={item => item.id}
//             renderItem={({item}) => (
//               <View>
//                 <Pressable
//                   style={{
//                     width: '95%',
//                     // height: 50,
//                     // backgroundColor: item.id == disabled + 1 ? "green" : "grey",
//                     // margin: 10,
//                     // flex: 1,
//                     // alignItems: "center",
//                     // justifyContent: "center",
//                     // borderRadius: 10,
//                     // height: 70,
//                     // backgroundColor: "#004fd7",
//                     // margin: 10,
//                   }}
//                   onPress={() =>
//                     navigation.navigate(item.name, {
//                       title: item.title,
//                       def: item.definition,
//                     })
//                   }>
//                   {/* <Text style={styles.text}>{item.title}</Text> */}

//                   <BlockList
//                     item={item}
//                     image={require('../../../../assets/tense.png')}
//                   />
//                 </Pressable>
//               </View>
//             )}
//           />
//         </View>
//       </View>
//     </>
//   );
// };

// export default AllTenses;
import {View, Text, Pressable, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from '../../../../Styles/QuizStyle';

import BlockList from '../../../layouts/BlockList';
import PresentIndefiniteTense from './Data/PresentTense';
import PresentContinuousTense from './Data/PresentContinueTense';
import PresentPerfectTense from './Data/PresentPerfect';
import PresentPerfectContinuousTense from './Data/PresentPerfectCon';
import PastIndefiniteTense from './Data/PastIndifinite';
import PastContinuousTense from './Data/PastContinous';
import PastPerfectTense from './Data/PastPerfect';
import PastPerfectContinuousTense from './Data/PastPerfectCon';
import FutureIndefiniteTense from './Data/FutureIndifinite';
import FutureContinuousTense from './Data/FutureCon';
import FuturePerfectTense from './Data/FuturePerfect';
import FuturePerfectContinuousTense from './Data/FuturePerfectCon';
import {useNavigation} from '@react-navigation/native';

const AllTenses = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const data = [
    {
      id: 1,
      title: 'Present Tense',
      subcategories: [
        {
          id: 1,
          title: 'Present Indefinite',
          name: 'Tense',
          definition: PresentIndefiniteTense,
        },
        {
          id: 2,
          title: 'Present Continuous',
          name: 'Tense',
          definition: PresentContinuousTense,
        },
        {
          id: 3,
          title: 'Present Perfect',
          name: 'Tense',
          definition: PresentPerfectTense,
        },
        {
          id: 4,
          title: 'Present Perfect Continuous',
          name: 'Tense',
          definition: PresentPerfectContinuousTense,
        },
      ],
    },
    {
      id: 2,
      title: 'Past Tense',
      subcategories: [
        {
          id: 5,
          title: 'Past Indefinite',
          name: 'Tense',
          definition: PastIndefiniteTense,
        },
        {
          id: 6,
          title: 'Past Continuous',
          name: 'Tense',
          definition: PastContinuousTense,
        },
        {
          id: 7,
          title: 'Past Perfect',
          name: 'Tense',
          definition: PastPerfectTense,
        },
        {
          id: 8,
          title: 'Past Perfect Continuous',
          name: 'Tense',
          definition: PastPerfectContinuousTense,
        },
      ],
    },
    {
      id: 3,
      title: 'Future Tense',
      subcategories: [
        {
          id: 9,
          title: 'Future Indefinite',
          name: 'Tense',
          definition: FutureIndefiniteTense,
        },
        {
          id: 10,
          title: 'Future Continuous',
          name: 'Tense',
          definition: FutureContinuousTense,
        },
        {
          id: 11,
          title: 'Future Perfect',
          name: 'Tense',
          definition: FuturePerfectTense,
        },
        {
          id: 12,
          title: 'Future Perfect Continuous',
          name: 'Tense',
          definition: FuturePerfectContinuousTense,
        },
      ],
    },
  ];

  const navigation = useNavigation();

  return (
    <View style={styles.Wrapper}>
      <View style={styles.innerWrapper}>
        {selectedCategory ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={
              data.find(category => category.title === selectedCategory)
                .subcategories
            }
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
                  <BlockList
                    item={item}
                    image={require('../../../../assets/tense.png')}
                  />
                </Pressable>
              </View>
            )}
          />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View>
                <Pressable
                  style={{
                    width: '95%',
                  }}
                  onPress={() => setSelectedCategory(item.title)}>
                  <BlockList
                    item={item}
                    image={require('../../../../assets/tense.png')}
                  />
                </Pressable>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default AllTenses;
