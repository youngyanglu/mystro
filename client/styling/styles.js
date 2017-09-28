import {
  StyleSheet,
  Dimensions
} from 'react-native';

module.exports.loginHome = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2d0bc'
  },
  header: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10
  },
  divider: {height: 30}

});

const { width, height } = Dimensions.get('window')

module.exports.preferences = {
  wrapper: {
     //backgroundColor: '#f2d0bc'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
    height,
  },

  dot: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7
  },

  activeDot: {
    backgroundColor: '#fff',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7},
}

module.exports.preferencenum = {
  text: {
    fontSize: 20,
    textAlignVertical: 'center',
    margin: 14
  },
  button: {
    float: 'right'
  }
}


module.exports.myPreferences = {
  divider: {height: 10}
}

