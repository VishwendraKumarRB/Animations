import { Animated, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Styles from '../../../Styles';

const FirstAnimation = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    };
  
    const fadeOut = () => {
      // Will change fadeAnim value to 0 in 3 seconds
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    };
  
    return (
      <SafeAreaView style={Styles.container}>
        <Animated.View
          style={[
            Styles.fadingContainer,
            {
              // Bind opacity to animated value
              opacity: fadeAnim,
            },
          ]}>
          <Text style={Styles.fadingText}>Fading View!</Text>
        </Animated.View>
        <View style={Styles.buttonRow}>
          <Button title="Fade In View" onPress={fadeIn} />
          <Button title="Fade Out View" onPress={fadeOut} />
        </View>
      </SafeAreaView>
    );
}

export default FirstAnimation

