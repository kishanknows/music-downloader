import {TouchableOpacity, Text} from 'react-native';
import Styles from '../styles';

type props = {
    onPress: () => void;
    title: string;
}

const CustomButton = ({onPress, title}:props) => {
  return (
    <TouchableOpacity style={Styles.customButtonStyle} onPress={onPress}>
      <Text style={Styles.customButtonFontStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
