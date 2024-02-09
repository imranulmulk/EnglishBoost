import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const PdfSkeleton = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        data={[1, 1, 1, 1, 1, 1, 1, 1]}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={{
              width: 145,
              height: 250,
              borderRadius: 10,
              margin: 20,
              backgroundColor: '#E5E1DA',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ShimmerPlaceholder
              style={{
                width: '80%',
                height: 165,
              }}
            />
            <View style={{marginTop: 15, alignItems: 'center'}}>
              <ShimmerPlaceholder
                style={{width: 125, marginBottom: 10}}></ShimmerPlaceholder>
              <ShimmerPlaceholder style={{width: 100}}></ShimmerPlaceholder>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default PdfSkeleton;
