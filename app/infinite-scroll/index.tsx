import { useThemeColor } from '@/hooks/useThemeColor';
import { FadeImage } from '@/presentation/images/FadeImage';
import { ThemedView } from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

export default function InfiniteScrollScreen() {
  const [numbers, setNumber] = useState([1, 2, 3, 4, 5]);
  const primaryColor = useThemeColor({}, 'primary');

  const loadMore = () => {
    const newArray = new Array({ length: 5 }).map((_, i) => i + numbers.length);

    setTimeout(() => {
      setNumber([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <ThemedView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <ThemedView
            style={{
              height: 150,
              justifyContent: 'center',
            }}
          >
            <ActivityIndicator size='large' color={primaryColor} />
          </ThemedView>
        )}
      />
    </ThemedView>
  );
}

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{ width: '100%', height: 400 }}
    />
  );
};
