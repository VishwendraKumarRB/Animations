import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Styles from '../../../Styles';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

const ScrollAnimation = () => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    //Here X and y value come from drag 
    onStart: (a, b) => {
      b.startX = x.value;
      b.startY = y.value;
    },
    onActive: (a, b) => {
      x.value = b.startX + a.translationX;
      y.value = b.startY + a.translationY;
    },
    onEnd: () => {
    //   x.value = withSpring(0);
    //   y.value = withSpring(0);
    x.value= withTiming(0,{duration:50})
    y.value= withTiming(0,{duration:50})

    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });
  return (
    <GestureHandlerRootView>
      <View style={Styles.scrollAnimationView}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[Styles.circleView,animatedStyle]} />
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default ScrollAnimation;
