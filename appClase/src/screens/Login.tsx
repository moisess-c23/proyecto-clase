import { View } from 'react-native';
import CustomButton from '../components/CustomButtom';
import CustomInput from '../components/CustomInput';

export default function Login() {
  return (
    <View>
      <CustomInput
        type={'password'}
        value={'dsadad'}
        title={'prueba'}
        onChange={() => {} }
      />

      <CustomButton title="Iniciar Sesion" onPress={() => {}} />

      <CustomButton
        title="Registrarme"
        onPress={() => {}}
        variant="secondary"
      />

      <CustomButton
        title="Olvide mi contraseña"
        onPress={() => {}}
        variant="tertiary"
      />
    </View>
  );
}
