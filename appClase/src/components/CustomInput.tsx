import { useState } from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  value: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'numeric';
  onChange: (text: string) => void;
  required?: boolean;
  title: string;
};
export default function CustomInput({
  value,
  type = 'text',
  onChange,
  required,
  title,
}: Props) {
  const isPasswordField = type === 'password';
  const [isSecureText, setIsSecureText] = useState(type === 'password');
  const keyBoardType: KeyboardTypeOptions =
    type === 'email'
      ? 'email-address'
      : type === 'number'
      ? 'number-pad'
      : type === 'numeric'
      ? 'numeric'
      : 'default';

  const getError = () => {
    if (required && !value) return 'El campo es obligatorio.';
    if (type === 'email' && !value.includes('@')) return 'Correo invalido.';
    if (type === 'password' && value.length > 0 && value.length< 4)
      return 'Contraseña debe ser mas fuerte.';
  };
  const error = getError();
  return (
    <View>
      <View style={[styles.inputContainer,  error && styles.inputError]}>
        <TextInput
          style={styles.input}
          placeholder={title}
          value={value}
          onChangeText={onChange}
          secureTextEntry={isSecureText}
          keyboardType={keyBoardType}
        />

        {isPasswordField && <Icon name="eye" size={20} />}
      </View>
      <Text>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 18,
    color: '#000',
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9ff',
  },
});
