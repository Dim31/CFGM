// React Native Collapsible Toolbar with Animation
// https://aboutreact.com/react-native-collapsible-toolbar/

// import React in our code
import React from 'react';
import Recette from '../Screens/Recette'

// import all the components we are going to use
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Text,
  TextInput,
  Button
} from 'react-native';

const App = () => {
  const dummyData = [
    'Text',
    'Input',
    'Button',
    'Card',
    'CheckBox',
    'Divider',
    'Header',
    'List Item',
    'Pricing',
    'Rating',
    'Search Bar',
    'Slider',
    'Tile',
    'Icon',
    'Avatar',
  ];
  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Maximum_Height = 150;
  //Max Height of the Header
  const Header_Minimum_Height = 50;
  //Min Height of the Header

  const animateHeaderBackgroundColor =
    AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
      outputRange: ['#4286F4', '#00BCD4'],
      extrapolate: 'clamp',
    });

  const animateHeaderHeight =
    AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
      outputRange: [Header_Maximum_Height, Header_Minimum_Height],
      extrapolate: 'clamp',
    });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.header,
            {
              height: animateHeaderHeight,
              backgroundColor: animateHeaderBackgroundColor,
            },
          ]}>
          <Text style={styles.headerText}>
            React Native Collapsible Toolbar with Animation
          </Text>
          <View >
              <TextInput placeholder='Rechercher'/>
              <Button

                  title="Filtres"
                  color="#0c506a"
                  accessibilityLabel="Learn more about this purple button"
              />
          </View>
        </Animated.View>
        <ScrollView
          scrollEventThrottle={16}
          // contentContainerStyle={{
          //     paddingTop: Header_Maximum_Height
          // }}
          onScroll={Animated.event(
            [{
              nativeEvent: {
                contentOffset: { y: AnimatedHeaderValue }
              }
            }],
            { useNativeDriver: false }
          )}>
          {/* Put all your Component here inside the ScrollView */}
          {dummyData.map((item, index) => (
            <Recette/>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  textStyle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    padding: 20,
  },
  });
