import {SvgProps} from 'react-native-svg';
import MasterCardLogo from '../../assets/images/icons/tarjetas/MasterCard.svg';
import VisaLogo from '../../assets/images/icons/tarjetas/Visa.svg';

export enum EmiterEnum {
  'MasterCard' = 'MasterCard',
  'Visa' = 'Visa',
}

export const emiterCardLogo: Record<EmiterEnum, React.FC<SvgProps>> = {
  [EmiterEnum.MasterCard]: MasterCardLogo,
  [EmiterEnum.Visa]: VisaLogo,
};
