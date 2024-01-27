import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';

const ViewStory = ({route}) => {
  const {storyData} = route.params; // Access the bookData parameter
  return (
    <View style={{flex: 1}}>
      <Pdf
        trustAllCerts={false}
        // source={require('../pdfs/ap.pdf')}
        source={{uri: storyData.pdfUrl}}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={{flex: 1}}
        enablePaging={true}
        // horizontal
      />
    </View>
  );
};

export default ViewStory;
