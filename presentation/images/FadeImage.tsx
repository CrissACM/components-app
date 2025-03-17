import useAnimation from '@/hooks/useAnimation';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  View,
  type ImageStyle,
  type StyleProp,
} from 'react-native';

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}

export function FadeImage({ uri, style }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const primaryColor = useThemeColor({}, 'primary');
  const { animatedOpacity, fadeIn } = useAnimation();

  return (
    <View>
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          color={primaryColor}
          size='large'
        />
      )}
      <Animated.Image
        source={{ uri: uri }}
        style={[style, { opacity: animatedOpacity }]}
        onLoadEnd={() => {
          fadeIn({});
          setIsLoading(false);
        }}
      />
    </View>
  );
}
