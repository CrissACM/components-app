import { useThemeColor } from '@/hooks/useThemeColor';
import { Platform, Pressable, Switch, View } from 'react-native';
import { ThemedText } from './ThemedText';

interface Props {
  text?: string;
  value?: boolean;
  className?: string;
  onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';

export function ThemedSwitch({ text, value, className, onValueChange }: Props) {
  const switchActiveColor = useThemeColor({}, 'primary');

  return (
    <Pressable
      className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)}
    >
      {text ? <ThemedText type='h2'>{text}</ThemedText> : <View />}
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor={isAndroid ? switchActiveColor : ''}
        trackColor={{
          false: 'grey',
          true: switchActiveColor,
        }}
      />
    </Pressable>
  );
}
