import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export default function CustomButton({
  title,
  onPress,
  variant = 'primary',
}: props) {
  const styles = getStyles(variant);
  return (
    <TouchableOpacity style = {styles.button} onPress={onPress}>
      <Text style = {styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const getStyles = (variant: 'primary' | 'secondary' | 'tertiary') => {
  return StyleSheet.create({
    button: {
      padding: 12,
      margin: 10,
      borderRadius: 5,
      backgroundColor:
        variant === 'primary'
          ? '#1C1C30'
          : variant === 'secondary'
          ? '#65659c'
          : '#dfdff7',
      borderWidth: variant === 'tertiary' ? 1 : 0,
      borderColor: '#ccc',
    },
    text: {
      color:
        variant === 'primary' || variant === 'secondary'
          ? '#ededf7'
          : '#010117',
      fontWeight: 'bold',
    },
  });
};
