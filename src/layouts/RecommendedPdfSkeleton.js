import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const RecommendedPdfSkeleton = () => {
  return (
    <View>
      <FlatList
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={[1, 1, 1, 1, 1]}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={{
              width: 100,
              height: 170,
              borderRadius: 10,
              margin: 10,
              backgroundColor: '#E5E1DA',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ShimmerPlaceholder
              style={{
                width: '75%',
                height: 100,
              }}
            />

            <ShimmerPlaceholder
              style={{width: '90%', margin: 5}}></ShimmerPlaceholder>
            <ShimmerPlaceholder style={{width: '90%'}}></ShimmerPlaceholder>
          </View>
        )}
      />
    </View>
  );
};

export default RecommendedPdfSkeleton;
