import SendMoney from '../assets/images/icons/sendMoney.svg';
import AskForMoney from '../assets/images/icons/askForMoney.svg';
import PayService from '../assets/images/icons/payService.svg';
import Recharge from '../assets/images/icons/recharge.svg';
import Promotions from '../assets/images/icons/promotions.svg';
import Qr from '../assets/images/icons/scanQr.svg';

export const activityHome = [
  {image: SendMoney, text: 'Transferir pesos', onPress: 'TransferNavigation'},
  {image: AskForMoney, text: 'Pedir pesos', onPress: 'AskForMoney'},
  {image: PayService, text: 'Pagar servicio', onPress: 'PayService'},
  {image: Recharge, text: 'Realizar recarga', onPress: 'Recharge'},
  {image: Promotions, text: 'Promos disponibles', onpress: 'Promotions'},
  {image: Qr, text: 'Qr personal', onPress: 'QR'},
];
