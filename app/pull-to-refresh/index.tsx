import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from '@/presentation/shared/ThemedText';
import { ThemedView } from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

export default function PullToRefreshScreen() {
  const primaryColor = useThemeColor({}, 'primary');
  const backgroundColor = useThemeColor({}, 'background');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={[primaryColor, 'red', 'orange', 'green']}
          progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView margin>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}
