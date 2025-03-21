import { ThemedButton } from '@/presentation/shared/ThemedButton';
import { ThemedText } from '@/presentation/shared/ThemedText';
import { ThemedView } from '@/presentation/shared/ThemedView';
import { Link, router } from 'expo-router';

export default function ModalScreen() {
  return (
    <ThemedView>
      <Link asChild href='/modal/modal-window' className='mx-4 my-2'>
        <ThemedText className='text-xl text-light-text dark:text-dark-text'>
          Open Modal
        </ThemedText>
      </Link>

      <ThemedButton
        onPress={() => router.push('/modal/modal-window')}
        className='mx-4'
      >
        Open Modal
      </ThemedButton>
    </ThemedView>
  );
}
