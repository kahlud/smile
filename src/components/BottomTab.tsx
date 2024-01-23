import {View} from 'react-native';
import React from 'react';
import HomeIcon from '../assets/images/tab/home.svg';
import WalletIcon from '../assets/images/tab/wallet.svg';
import QrIcon from '../assets/images/tab/qr.svg';
import BalanceIcon from '../assets/images/tab/balance.svg';
import ProfileIcon from '../assets/images/tab/profile.svg';

type Props = {
  route: string;
  isfocused: boolean;
};

export const BottomTab = ({route, isfocused}: Props) => {
  const renderIcon = (route: string, isfocused: boolean) => {
    let height: number = 30;
    let width: number = 30;
    switch (route) {
      case 'Home':
        return (
          <HomeIcon
            width={width}
            height={height}
            stroke={isfocused ? '#FFFFFF' : '#5A5A5A'}
          />
        );

      case 'Wallet':
        return (
          <WalletIcon
            width={width}
            height={height}
            stroke={isfocused ? '#FFFFFF' : '#5A5A5A'}
          />
        );

      case 'Qr':
        return (
          <QrIcon
            width={width}
            height={height}
            stroke={isfocused ? '#FFFFFF' : '#5A5A5A'}
          />
        );

      case 'Balance':
        return (
          <BalanceIcon
            width={width}
            height={height}
            stroke={isfocused ? '#FFFFFF' : '#5A5A5A'}
          />
        );

      case 'Profile':
        return (
          <ProfileIcon
            width={width}
            height={height}
            stroke={isfocused ? '#FFFFFF' : '#5A5A5A'}
          />
        );

      default:
        break;
    }
  };
  return <View style={{marginTop: 12}}>{renderIcon(route, isfocused)}</View>;
};
