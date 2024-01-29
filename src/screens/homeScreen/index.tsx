import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {Card} from '../../components/card/Card';
import {cardsDetails} from '../../mock/card';
import Notifications from '../../assets/images/icons/notification.svg';
import {BotomHeader} from '../../components/BotomHeader';
import StyleHome from './StyleHome';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={StyleHome.headerContainer}>
        <Text style={StyleHome.textHeader}>¡Hola Bruno! Bienvenido</Text>
        <BotomHeader onPressBotton={() => {}} imageBotton={Notifications} />
      </View>
      <FlatList
        style={StyleHome.flatListCards}
        horizontal={true}
        data={cardsDetails}
        contentContainerStyle={StyleHome.flatListCardsContainer}
        ItemSeparatorComponent={<View style={StyleHome.itemSeparatorCards} />}
        renderItem={({item, index}) => (
          <Card
            isOddBackground={index % 2 === 0}
            bank={item.bank}
            cardType={item.cardType}
            numberCard={item.numberCard}
            expiration={item.expiration}
            cardEmiter={item.cardEmiter}
            availableMoney={item.availableMoney}
          />
        )}
      />
    </SafeAreaView>
  );
};
