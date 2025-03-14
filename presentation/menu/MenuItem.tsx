import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { Pressable, View } from 'react-native';
import { ThemedText } from '../shared/ThemedText';

interface Props {
  title: string;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  isFirst?: boolean;
  isLast?: boolean;
}

export function MenuItem({
  title,
  name,
  icon,
  isFirst = false,
  isLast = false,
}: Props) {
  const [routeName] = name.split('/');
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <Pressable
      onPress={() => router.push(routeName as Href)}
      className='bg-white dark:bg-black/15 px-5 py-2'
      style={{
        ...(isFirst && {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 10,
        }),
        ...(isLast && {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingBottom: 10,
        }),
      }}
    >
      <View className='flex-row items-center'>
        <Ionicons name={icon} size={24} color={primaryColor} className='mr-5' />
        <ThemedText type='h2'>{title}</ThemedText>
      </View>
    </Pressable>
  );
}
