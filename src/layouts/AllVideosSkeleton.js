import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const AllVideosSkeleton = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <FlatList
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        data={[1, 1, 1, 1, 1, 1]}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '#E5E1DA',
              width: 350,
              height: 250,
              padding: 10,
              borderRadius: 10,
              marginBottom: 15,
            }}>
            <ShimmerPlaceholder
              style={{width: '100%', height: 160}}></ShimmerPlaceholder>
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

export default AllVideosSkeleton;
