import { Stack } from 'expo-router';
import React from 'react';

export default function ModalLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='modal-window'
        options={{ presentation: 'modal', title: 'Modal Screen 1' }}
      />
      <Stack.Screen
        name='modal-window-2'
        options={{ presentation: 'modal', title: 'Modal Screen 2' }}
      />
    </Stack>
  );
}
