import { View, type ViewProps } from 'react-native';

interface Props extends ViewProps {
  className?: string;
}

export function ThemedCard({ className, children, ...props }: Props) {
  return (
    <View
      className={`bg-white dark:bg-black/10 rounded-xl shadow shadow-black/5 p-2 ${className}`}
      {...props}
    >
      {children}
    </View>
  );
}
