import { ThemedCard } from '@/presentation/shared/ThemedCard';
import { ThemedSwitch } from '@/presentation/shared/ThemedSwitch';
import { ThemedView } from '@/presentation/shared/ThemedView';
import { useState } from 'react';

export default function Switches() {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView className='mt-2' margin>
      <ThemedCard>
        <ThemedSwitch
          text='Active'
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className='mb-4'
        />

        <ThemedSwitch
          text='Hungry'
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          className='mb-4'
        />

        <ThemedSwitch
          text='Happy'
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className='mb-4'
        />
      </ThemedCard>
    </ThemedView>
  );
}
