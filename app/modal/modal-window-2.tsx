import { ThemedButton } from '@/presentation/shared/ThemedButton';
import { ThemedText } from '@/presentation/shared/ThemedText';
import { ThemedView } from '@/presentation/shared/ThemedView';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';

export default function ModalScreen() {
  return (
    <ThemedView className='items-center justify-center flex-1'>
      <ThemedText>Hola, Soy Modal 2</ThemedText>

      <ThemedButton onPress={() => router.dismiss()} className='my-4'>
        Cerrar Modal
      </ThemedButton>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ThemedView>
  );
}
