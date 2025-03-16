import { ThemedView } from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { Animated, PanResponder } from 'react-native';

export default function Animation102Screen() {
  const pan = useRef(new Animated.ValueXY()).current;

  const dragDropResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),

    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <ThemedView className='flex-1 justify-center items-center' margin>
      <Animated.View
        {...dragDropResponder.panHandlers}
        className='bg-light-primary dark:bg-dark-primary rounded-xl'
        style={[
          {
            width: 150,
            height: 150,
          },
        ]}
      />
    </ThemedView>
  );
}
