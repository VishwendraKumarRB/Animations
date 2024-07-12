import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Styles from '../../../Styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const SecondAnimation = () => {
  const animation = useSharedValue(0);
  const [clicked, setClicked] = useState(false);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animation.value}],

      //{For that we have to put useSharedValue to 1 As WELL AS SPRING VALUE BETWEEN 0 TO 1}
      // transform:[{scale:animation.value}]

      // {FOR THAT WE HAVE TO USE SQUARE VIEW}
      // transform:[{rotate:`${animation.value}deg`}]
    };
  });
  return (
    <View style={Styles.reanimatedView}>
      <Animated.View style={[Styles.circleView, animatedStyle]} />
      <TouchableOpacity
        style={Styles.btn}
        onPress={() => {
          //    clicked? animation.value= withSpring(100):animation.value= withSpring(-100)
          clicked
            ? (animation.value = withTiming(100, {duration: 50}))
            : (animation.value = withTiming(-100, {duration: 50}));

          setClicked(!clicked);
        }}>
        <Text style={Styles.btnText}>Start Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondAnimation;
