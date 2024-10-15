// npm install @react-navigation/drawer


import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// Define the types for the routes
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  ProfileStack: undefined; // Stack for Profile pages
  Profile: undefined;
  Settings: undefined;
};

// Create the main stack and drawer navigators
const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

// Home Screen Component
const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
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
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

// Main Drawer Navigation Component
const DrawerNavigation: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
      <Drawer.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={{ headerShown: false }} // Hide header for nested stack
      />
    </Drawer.Navigator>
  ); 
};

// Main App Component with Navigation Container
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
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

export default App;
