import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Define the types for the routes
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  ProfileStack: undefined; // Stack for Profile pages
  Profile: undefined;
  Settings: undefined;
};

// Create the main stack navigator
const Stack = createStackNavigator<RootStackParamList>();

// Home Screen Component
const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('ProfileStack')}
      />
    </View>
  );
};

// Details Screen Component
const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
    </View>
  );
};

// Profile Screen (Inside Nested Stack)
const ProfileScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

// Settings Screen (Inside Nested Stack)
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
};

// Nested Stack Navigator for Profile section
const ProfileStackNavigator = () => {
  const ProfileStack = createStackNavigator();
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Settings" component={SettingsScreen} />
    </ProfileStack.Navigator>
  );
};

// Main StackNavigation Component with Nested Navigation
const StackNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="ProfileStack"
          component={ProfileStackNavigator}
          options={{ headerShown: false }} // Hide header for nested stack
        />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
};

// Styling for a more attractive UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
  },
});

export default StackNavigation;
