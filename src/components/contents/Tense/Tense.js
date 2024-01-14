import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import React from 'react';

const Tense = ({route}) => {
  // console.log(route.params.def.uses)
  const uses = route.params.def.uses;
  const Structure = route.params.def.Structure;
  const examples = route.params.def.example;
  const formatedExamples = examples.split('.').join('\n');

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
      }}>
      {/* ----------header Text */}
      {/* ---------------wrapper1 for definition */}
      <View style={{flex: 1, width: '95%'}}>
        <Text style={styles.headerText}>What is {route.params.title} ?</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper1}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
              Definition :
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: 'white',
                // fontWeight: 'bold',
                fontSize: 16,
                fontStyle: 'italic',
              }}>
              {route.params.def.definition}
            </Text>
          </View>
          {/* -------------------wrapper for examples and uses---------------- */}
          <View style={styles.exWrapper}>
            <Text style={styles.heading}>Examples:</Text>
            <Text style={styles.txt}>{formatedExamples}</Text>
          </View>
          <Text style={styles.subheading}>Uses Of {route.params.title}</Text>
          <View style={{marginTop: 10}}>
            <FlatList
              data={uses}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.category}
              renderItem={({item}) => (
                <View style={styles.wrapper}>
                  <View styles={{margin: 10}}>
                    <Text style={styles.heading}>{item.category}</Text>
                    <Text
                      style={{marginTop: 5, marginBottom: 5, color: '#000'}}>
                      {item.examples.split('.').join('\n')}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
          {/* -----------------------types of noun------------ */}
          <Text style={styles.subheading}>
            Structure of {route.params.title}
          </Text>
          <View style={{marginBottom: 20, marginTop: 10}}>
            <FlatList
              data={Structure}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.category}
              renderItem={({item}) => (
                <View style={styles.wrapper}>
                  <View styles={{margin: 10}}>
                    <Text style={styles.heading}>{item.category}</Text>
                    <Text style={styles.struc}>{item.struc}</Text>
                    <Text>{item.examples.split('.').join('\n')}</Text>
                  </View>
                </View>
              )}
            />
          </View>
          <View style={{height: 60}}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Tense;

const styles = StyleSheet.create({
  wrapper: {
    width: 340,
    marginRight: 15,
    marginBottom: 10,
    padding: 20,
    backgroundColor: '#D1F1FF',
    borderRadius: 20,
    elevation: 4,
  },
  // examples wrapper
  exWrapper: {
    width: '100%',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#D1F1FF',
    borderRadius: 20,
    elevation: 4,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0079FF',
    marginTop: 20,
    marginBottom: 10,
  },
  wrapper1: {
    width: '100%',
    height: '24%',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#0079FF',
    borderRadius: 20,
    elevation: 4,
  },
  txt: {fontSize: 14, color: 'black', lineHeight: 22},
  heading: {fontSize: 16, color: '#0079FF', fontWeight: 'bold'},
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    color: '#0079FF',
  },
  nounStyle: {
    fontWeight: 'bold',
    fontSize: 29,
    color: 'red',
  },
  struc: {color: 'grey', marginTop: 5},
});
