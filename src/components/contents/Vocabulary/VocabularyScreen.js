import {View, Text, Pressable, Image, FlatList} from 'react-native';
import React from 'react';
// import {FlatList} from 'react-native-gesture-handler';
// import apron from "../../../assets/Vocabulary/apron.png"

const VocabularyScreen = ({route}) => {
  // const{title,data}=route.params;
  // console.log(route.params.ImagesData);
  const data = route.params.ImagesData;
  // const bookData = [
  //   {
  //     id: 1,
  //     title: "Apron",
  //     image: require('../../../assets/Vocabulary/apron.png')
  //   },
  //   {
  //     id: 2,
  //     title: "Bowl",
  //     image: require('../../../assets/Vocabulary/bowl.png')

  //   },
  //   {
  //     id: 3,
  //     title: "Knife",
  //     image: require('../../../assets/Vocabulary/knife.png')

  //   },
  //   {
  //     id: 4,
  //     title: "English101",
  //     image: require('../../../assets/Vocabulary/apron.png')

  //   },
  //   {
  //     id: 5,
  //     title: "English101",
  //     image: require('../../../assets/Vocabulary/apron.png')

  //   },
  //   {
  //     id: 6,
  //     title: "English101",
  //     image: require('../../../assets/Vocabulary/apron.png')

  //   },
  //   {
  //     id: 7,
  //     title: "English101",
  //     image: require('../../../assets/Vocabulary/apron.png')

  //   },
  //   {
  //     id: 8,
  //     title: "English101",
  //     image: require('../../../assets/Vocabulary/apron.png')

  //   },
  // ];

  return (
    <>
      {/* <View style={{ width: "95%", height: 220,  marginTop: 10,marginLeft:8, borderWidth:1 }}>
        <Image
          style={{ width: "100%", height: "100%" ,}}
          source={require("../../../assets/kitchen2.png")}
        />
      </View>
      <View style={{}}>
        <Text>Kitchen</Text>
      </View> */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingTop: 10,
          paddingBottom: 30,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <View style={{paddingTop: 30}}>
          <Text style={{fontSize: 20, fontWeight: '700', color: 'blue'}}>
            {route.params.title}
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: "red",
            width: '100%',
          }}>
          <FlatList
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            data={data}
            numColumns={2}
            keyExtractor={item => item.title}
            renderItem={({item}) => (
              <View
                style={{
                  width: 165,
                  height: 165,
                  // borderWidth: 1,
                  // borderRadius: 10,
                  margin: 5,
                  marginTop: 10,
                  backgroundColor: 'white',
                  backgroundColor: '#D1F1FF',
                  elevation: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                  }}
                  source={item.image}
                />
                <Text
                  style={{marginTop: 10, fontWeight: 'bold', color: 'blue'}}>
                  {item.title}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default VocabularyScreen;
