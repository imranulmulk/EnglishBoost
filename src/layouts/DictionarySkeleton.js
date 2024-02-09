import {View, Text} from 'react-native';
import React from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const DictionarySkeleton = () => {
  return (
    <View style={{flex: 1}}>
      {/* Word section */}
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 70,
          marginRight: 12,
        }}>
        <ShimmerPlaceholder
          style={{
            width: '50%',
            height: '85%',
          }}></ShimmerPlaceholder>
        <ShimmerPlaceholder
          style={{
            width: '15%',
            height: '85%',
          }}></ShimmerPlaceholder>
      </View>

      {/* Definition Section */}
      <View style={{marginTop: 20}}>
        <ShimmerPlaceholder style={{height: 30}}></ShimmerPlaceholder>

        <View style={{marginTop: 15}}>
          <ShimmerPlaceholder style={{width: '100%'}}></ShimmerPlaceholder>
        </View>
        <View style={{marginTop: 15}}>
          <ShimmerPlaceholder style={{width: '100%'}}></ShimmerPlaceholder>
        </View>
        <View style={{marginTop: 15}}>
          <ShimmerPlaceholder style={{width: '100%'}}></ShimmerPlaceholder>
        </View>
        <View style={{marginTop: 15}}>
          <ShimmerPlaceholder style={{width: '100%'}}></ShimmerPlaceholder>
        </View>
        <View style={{marginTop: 15}}>
          <ShimmerPlaceholder style={{width: '90%'}}></ShimmerPlaceholder>
        </View>
      </View>
    </View>
  );
};

export default DictionarySkeleton;
