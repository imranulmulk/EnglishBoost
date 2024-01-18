import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  // --------WRAPPER------------
  Wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  questionsWrapper: {
    width: '100%',
    padding: 10,
    // backgroundColor: 'green',
    borderRadius: 30,
  },
  questiontext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  choices: {
    width: '100%',
    height: '75%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    backgroundColor: '#D1F1FF',
  },

  nextbtn: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#005eff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    // letterSpacing: 3,
  },
});
export default styles;
