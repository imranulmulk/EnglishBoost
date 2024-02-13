import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  JokeBox: {
    backgroundColor: '#D1F1FF',
    width: '100%',
    minHeight: '50%',
    padding: 10,
    paddingTop: 30,
    borderRadius: 15,
  },
  quoteBox: {
    backgroundColor: '#D1F1FF',
    width: '100%',
    minHeight: '50%',
    padding: 10,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 15,
    justifyContent: 'space-between',
  },
  // ------------- next button ----------------
  btn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#005eff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    marginBottom: 20,
  },
  btnText: {
    color: '#D1F1FF',
    fontWeight: 'bold',
    fontSize: 25,
  },
  imageContainer: {
    width: 145,
    height: 145,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  // ----------joke text -----------
  text: {
    color: '#000',
    fontSize: 20,
    lineHeight: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  authorText: {
    color: '#005eff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default styles;
