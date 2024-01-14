// import {View, Text, Pressable, Image} from 'react-native';
// import React, {useState, useEffect} from 'react';
// import styles from '../../../../Styles/JokeStyle';
// import quotes from './quotesData';
// const Quotes = () => {
//   const [Quote, setQuote] = useState('');

//   const getRandomQuote = () => {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     setQuote(quotes[randomIndex]);
//   };

//   useEffect(() => {
//     getRandomQuote();
//   }, []);

//   return (
//     <View style={styles.Wrapper}>
//       <View
//         style={{
//           flex: 1,
//           // backgroundColor: 'lightgreen',
//           width: '95%',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//         }}>
//         <View style={styles.imageContainer}>
//           <Image
//             style={styles.image}
//             source={require('../../../../assets/quote.png')}
//           />
//         </View>
//         <View style={styles.JokeBox}>
//           <Text style={styles.text}>{Quote}.</Text>
//         </View>
//         <Pressable style={styles.btn} onPress={getRandomQuote}>
//           <Text style={styles.btnText}>Tap</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// export default Quotes;
import {View, Text, Pressable, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../../../Styles/JokeStyle';
import formattedQuotes from './quotesData';

const Quotes = () => {
  const [quoteData, setQuoteData] = useState({quote: '', author: ''});

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * formattedQuotes.length);
    setQuoteData(formattedQuotes[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <View style={styles.Wrapper}>
      <View
        style={{
          flex: 1,
          width: '95%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../../assets/quote.png')}
          />
        </View>
        <View style={styles.quoteBox}>
          <View>
            <Text style={styles.text}>"{quoteData.quote}"</Text>
          </View>
          <View
            style={{
              // backgroundColor: 'pink',
              alignItems: 'flex-end',
              marginTop: 10,
            }}>
            <Text style={styles.authorText}>- {quoteData.author}</Text>
          </View>
        </View>
        <Pressable style={styles.btn} onPress={getRandomQuote}>
          <Text style={styles.btnText}>Tap</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Quotes;
