import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

const HomeScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        /><Button
        title="Go to Modal"
        onPress={() => navigation.navigate('Modal')}
      />
      </View>
    );
}
const DetailsScreen = ({navigation}) => {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Details Screen</Text>
          <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go to Other"
          onPress={() => navigation.navigate('Other')}
        />
        </View>
      );
  }
  const OtherScreen  = ({navigation}) => {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Other Screen</Text>
          <Button
          title="Go to Detail"
          onPress={() => navigation.navigate('Details')}
        />
        </View>
      );
  }
  const ModalScreen  = ({navigation}) => {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          <Button
            onPress={() => navigation.goBack()}
            title="Dismiss"
          />
        </View>
      );
  }
const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
      Other: OtherScreen
    },
    {
      initialRouteName: "Home"
    }
  );
  const ModalNavigator = createStackNavigator(
    {
      Home: AppNavigator,
      Modal: ModalScreen,
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
  );

// export default createAppContainer(AppNavigator);
export default createAppContainer(ModalNavigator);