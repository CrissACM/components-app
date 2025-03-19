import { ThemedButton } from '@/presentation/shared/ThemedButton';
import { ThemedText } from '@/presentation/shared/ThemedText';
import { ThemedView } from '@/presentation/shared/ThemedView';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';

export default function ModalScreen1() {
  return (
    <ThemedView
      className='items-center justify-center flex-1'
      bgColor='#A52182'
    >
      <ThemedText>Hola, Soy Modal 1</ThemedText>

      <ThemedButton
        className='my-4'
        onPress={() => router.push('/modal/modal-window-2')}
      >
        Abrir Modal 2
      </ThemedButton>

      <ThemedButton onPress={() => router.dismiss()}>Close</ThemedButton>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ThemedView>
  );
}
