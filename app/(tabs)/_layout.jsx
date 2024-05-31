import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import {icons} from '../../constants'



const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View className="flex items-center justify-center gap-2">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-6 h-6"
        />
        <Text
          className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
    );
  };
  
  

const TabLayout = () => {
  return (
    <>
        <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        </Tabs>
    </>
  )
}

export default TabLayout

const styles = StyleSheet.create({})