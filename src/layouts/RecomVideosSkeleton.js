import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const RecomVideosSkeleton = () => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[1, 1, 1]}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '#E5E1DA',
              marginRight: 15,
              width: 300,
              height: 230,
              padding: 10,
              marginTop: 20,
              borderRadius: 10,
            }}>
            <ShimmerPlaceholder
              style={{width: 280, height: 140}}></ShimmerPlaceholder>
            <View style={{marginTop: 25}}>
              <ShimmerPlaceholder style={{width: '100%'}}></ShimmerPlaceholder>
              <ShimmerPlaceholder
                style={{width: '80%', marginTop: 8}}></ShimmerPlaceholder>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default RecomVideosSkeleton;
