import { TextInput, type TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  className?: string;
}

export function ThemedTextInput({ className, ...props }: Props) {
  return (
    <TextInput
      className='py-4 px-2 text-black dark:text-white'
      placeholderTextColor='grey'
      {...props}
    />
  );
}
