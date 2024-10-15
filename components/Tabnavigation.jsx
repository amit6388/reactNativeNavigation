import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Create the tab navigator
const Tab = createMaterialTopTabNavigator();

// Home Screen Component
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
    </View>
  );
};

// Settings Screen Component
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
};

// Another Example Screen Component
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
    </View>
  );
};

// Main Tab Navigation Component
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#6200ee', // Purple background for the tab bar
        },
        tabBarActiveTintColor: '#ffffff', // White color for active tab text
        tabBarInactiveTintColor: '#b0bec5', // Light gray for inactive tab text
        tabBarLabelStyle: {
          fontWeight: 'bold', // Bold text for tab labels
          fontSize: 16, // Font size for tab labels
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#03dac6', // Teal color for the tab indicator
          height: 4, // Height of the tab indicator
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarAccessibilityLabel: 'Home Tab',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarAccessibilityLabel: 'Settings Tab',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarAccessibilityLabel: 'Profile Tab',
        }}
      />
    </Tab.Navigator>
  );
}

// Main App Component with Navigation Container
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MyTabs />
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
    padding: 20, // Add padding to container
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Darker text color for title
  },
});

export default App;
