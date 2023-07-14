import { View, Text, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import HeaderShown from './HeaderShown';
import { useNavigation } from '@react-navigation/native';


const DrawerSceneWrapper = ({children,title}) => {
  const navigation = useNavigation()
    const progress = useDrawerProgress();
    const {width} = useWindowDimensions();
    const Stylesc = useAnimatedStyle(() => ({
      transform: [
        {perspective: 1000},
        {
          scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp'),
        },
        {
          rotateY: `${interpolate(progress.value, [0, 1], [0, 1], 'clamp')}deg`,
        },
        {
          translateX: interpolate(
            progress.value,
            [0, 1],
            [0, Platform.OS === 'android' ? width -300 : -260],
            'clamp',
          ),
        },
      ],
      borderRadius: interpolate(progress.value, [0, 1], [0, 20], 'clamp'),
      overflow: 'hidden',
    }));
  
    return (
      <Animated.View style={[styles.container, Stylesc]}>
         <HeaderShown icon={"list"} title={title} onpress={()=> navigation.toggleDrawer() }></HeaderShown>
        {children}
      </Animated.View>
    );
  };
  
  export default DrawerSceneWrapper;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
    },
  });