import { Pressable, type PressableProps } from 'react-native';
import { ThemedText } from './ThemedText';

interface Props extends PressableProps {
  className?: string;
  children?: string;
}

export function ThemedButton({ className, children, ...props }: Props) {
  return (
    <Pressable
      className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
      {...props}
    >
      <ThemedText>{children}</ThemedText>
    </Pressable>
  );
}
