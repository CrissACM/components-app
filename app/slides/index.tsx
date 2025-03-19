import { ThemedButton } from '@/presentation/shared/ThemedButton';
import { ThemedText } from '@/presentation/shared/ThemedText';
import { ThemedView } from '@/presentation/shared/ThemedView';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  useWindowDimensions,
  type ImageSourcePropType,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/images/slides/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/images/slides/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/images/slides/slide-3.png'),
  },
];

export default function SlidesScreen() {
  const flatListRef = useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (scrollEnabled) return;

    const { contentOffset, layoutMeasurement } = event.nativeEvent;

    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);

    currentIndex === items.length - 1 && setScrollEnabled(true);
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <ThemedView>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <SlideItem item={item} key={item.title} />}
        horizontal
        pagingEnabled
        scrollEnabled={scrollEnabled}
        onScroll={onScroll}
      />

      {currentSlideIndex === items.length - 1 ? (
        <ThemedButton
          className='absolute bottom-10 right-5 w-[150px]'
          onPress={() => router.dismiss()}
        >
          Finalize
        </ThemedButton>
      ) : (
        <ThemedButton
          className='absolute bottom-10 right-5 w-[150px]'
          onPress={() => scrollToSlide(currentSlideIndex + 1)}
        >
          Next
        </ThemedButton>
      )}
    </ThemedView>
  );
}
interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
  const { width } = useWindowDimensions();
  const { img, title, desc } = item;

  return (
    <ThemedView
      className='justify-center flex-1 p-10 bg-red-500 rounded'
      style={{ width: width }}
    >
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />

      <ThemedText
        type='h1'
        className='text-light-primary dark:text-dark-primary'
      >
        {title}
      </ThemedText>
      <ThemedText type='h2' className='mt-10'>
        {desc}
      </ThemedText>
    </ThemedView>
  );
};
