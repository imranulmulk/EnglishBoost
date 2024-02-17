import React, {useEffect, useState, useRef} from 'react';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const InterstitialAdComponent = () => {
  const [loaded, setLoaded] = useState(false);
  const interstitialRef = useRef(null);

  useEffect(() => {
    const ad = InterstitialAd.createForAdRequest(adUnitId, {
      keywords: ['fashion', 'clothing'],
    });

    const unsubscribe = ad.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    // Start loading the interstitial ad straight away
    ad.load();

    // Assign the interstitial instance to the ref
    interstitialRef.current = ad;

    // Unsubscribe from events on unmount
    return () => {
      unsubscribe();
      // Do not call ad.destroy() here
    };
  }, []);

  const showAd = async () => {
    const interstitial = interstitialRef.current;

    // Show the ad only if it has been loaded
    if (loaded && interstitial) {
      await interstitial.show();
    } else {
      console.warn('Interstitial ad not loaded yet. Cannot show.');
    }
  };

  return {showAd, loaded};
};

export default InterstitialAdComponent;
