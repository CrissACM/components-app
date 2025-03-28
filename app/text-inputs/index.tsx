import { ThemedCard } from '@/presentation/shared/ThemedCard';
import { ThemedText } from '@/presentation/shared/ThemedText';
import { ThemedTextInput } from '@/presentation/shared/ThemedTextInput';
import { ThemedView } from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const isIOS = Platform.OS === 'ios';

export default function TextInputsScreen() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
  });

  return (
    <KeyboardAvoidingView behavior={isIOS ? 'height' : undefined}>
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className='mb-5'>
            <ThemedTextInput
              placeholder='full name'
              autoCapitalize='words'
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder='email address'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <ThemedTextInput
              placeholder='phone number'
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(text) => setForm({ ...form, number: text })}
            />
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard>
            <ThemedTextInput
              placeholder='phone number'
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </ThemedCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
