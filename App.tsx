import React from 'react';
import {Dimensions, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const App = () => {
  const BASE_URI = 'https://tarotdeam.netlify.app/';

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <WebView
        source={{uri: BASE_URI}}
        style={{flex: 1, width: deviceWidth, height: deviceHeight}}
      />
    </SafeAreaView>
  );
};

export default App;