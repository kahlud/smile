import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {Card} from '../../components/card/Card';
import {cardsDetails} from '../../mock/card';
import Notifications from '../../assets/images/icons/notification.svg';
import {BotomHeader} from '../../components/BotomHeader';
import StyleHome from './StyleHome';
import {activityHome} from '../../utils/activityHome';
import {HomeActivityButton} from '../../components/HomeActivityButton';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={StyleHome.headerContainer}>
        <Text style={StyleHome.textHeader}>¡Hola Bruno! Bienvenido</Text>
        <BotomHeader onPressBotton={() => {}} imageBotton={Notifications} />
      </View>
      <View>
        <FlatList
          style={StyleHome.flatListCards}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={cardsDetails}
          contentContainerStyle={StyleHome.flatListCardsContainer}
          ItemSeparatorComponent={<View style={StyleHome.itemSeparatorCards} />}
          renderItem={({item, index}) => (
            <View
              style={{
                shadowColor: '#000000',
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.18,
                shadowRadius: 4.59,
                elevation: 5,
              }}>
              <Card
                isOddBackground={index % 2 === 0}
                bank={item.bank}
                cardType={item.cardType}
                numberCard={item.numberCard}
                expiration={item.expiration}
                cardEmiter={item.cardEmiter}
                availableMoney={item.availableMoney}
              />
            </View>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        {activityHome.map(item => {
          return (
            <HomeActivityButton
              onPressBotton={() => {}}
              text={item.text}
              image={item.image}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};
