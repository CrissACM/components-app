import useAnimation from '@/hooks/useAnimation';
import { ThemedButton } from '@/presentation/shared/ThemedButton';
import { ThemedView } from '@/presentation/shared/ThemedView';
import { Animated } from 'react-native';

export default function Animation101Screen() {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

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

      <ThemedButton
        className='my-5'
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({});
        }}
      >
        FadeIn
      </ThemedButton>
      <ThemedButton className='my-5' onPress={() => fadeOut({})}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
}
