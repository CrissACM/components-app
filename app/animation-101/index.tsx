import { ThemedButton } from '@/presentation/shared/ThemedButton';
import { ThemedView } from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export default function Animation101Screen() {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(animatedTop, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => animatedTop.resetAnimation());
  };

  return (
    <ThemedView className='flex-1 justify-center items-center' margin>
      <Animated.View
        className='bg-light-secondary dark:bg-dark-secondary rounded-xl'
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }],
        }}
      />
      {/* hola */}
      <ThemedButton className='my-5' onPress={fadeIn}>
        FadeIn
      </ThemedButton>
      <ThemedButton className='my-5' onPress={fadeOut}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
}
