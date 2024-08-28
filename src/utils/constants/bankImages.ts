import {SvgProps} from 'react-native-svg';
import BBVALogo from '../../assets/images/icons/tarjetas/BBVA.svg';
import ICBCLogo from '../../assets/images/icons/tarjetas/ICBC.svg';

export enum BanksEnum {
  'BBVA' = 'BBVA',
  'ICBC' = 'ICBC',
}

export const bankLogo: Record<BanksEnum, React.FC<SvgProps>> = {
  [BanksEnum.BBVA]: BBVALogo,
  [BanksEnum.ICBC]: ICBCLogo,
};
