import { ThemedButton } from '@/presentation/shared/ThemedButton';
import { ThemedView } from '@/presentation/shared/ThemedView';
import { Alert } from 'react-native';

export default function AlertsScreen() {
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert title',
      'Hola Mundo',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      { userInterfaceStyle: 'light' },
    );

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My alert message', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const showAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );

  return (
    <ThemedView margin>
      <ThemedButton className='my-5' onPress={createTwoButtonAlert}>
        2-Button Alert
      </ThemedButton>
      <ThemedButton className='mb-5' onPress={createThreeButtonAlert}>
        3-Button Alert
      </ThemedButton>
      <ThemedButton className='my-5' onPress={showAlert}>
        Show Alert
      </ThemedButton>
    </ThemedView>
  );
}
