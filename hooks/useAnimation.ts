import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export default function useAnimation() {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({
    toValue = 1,
    duration = 500,
    useNativeDriver = true,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
  };

  const fadeOut = ({
    toValue = 0,
    duration = 500,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
  };

  const startMovingTopPosition = ({
    initialPosition = -100,
    toValue = 1,
    duration = 500,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition);

    Animated.timing(animatedTop, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
  };

  return {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
}
