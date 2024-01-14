import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  // --------WRAPPER------------
  startWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  //   ---------UPPER SECTION-------
  upperSection: {
    height: '55%',
    margin: 10,
  },
  // ----------LOWER SECTION--------
  lowerSection: {
    height: '45%',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    backgroundColor: '#D1F1FF',
  },
  //   -------UPPER SECTION IMAGE WRAPPER---
  imageWrapper: {
    width: 200,
    height: 200,
    // backgroundColor: 'red',
    marginLeft: 180,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },

  headingSection: {
    marginLeft: 10,
  },
  //   --------------PLAY BUTTON------------
  playbtn: {
    width: '100%',
    marginTop: 60,
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#0079FF',
    // background: "linear-gradient(to right, #004aad, #002a5d)",
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 20,
  },
  btnText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },

  img2: {
    width: '100%',
    height: '100%',
    marginLeft: 20,
  },
  //   ---------BACK BUTTON
  backbtn: {
    width: 70,
    height: 30,
    borderColor: 'white',
    borderRadius: 10,
    // marginTop: 40,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  backtxt: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
export default styles;
