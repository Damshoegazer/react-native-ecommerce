import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import RootNavigator from './navigations';
import { store } from './store';
import { COLORS } from './themes';

export default function App() {
  const [loaded] = useFonts({
    HelveticaNowDisplayBold: require('../assets/fonts/HelveticaNowDisplay-Bold.ttf'),
    HelveticaNowDisplayRegular: require('../assets/fonts/HelveticaNowDisplay-Regular.ttf'),
  });
  

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});