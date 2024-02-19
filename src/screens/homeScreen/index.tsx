import React from 'react';
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Card} from '../../components/card/Card';
import {cardsDetails} from '../../mock/card';
import Notifications from '../../assets/images/icons/notification.svg';
import {BotomHeader} from '../../components/header/BotomHeader';
import StyleHome from './StyleHome';
import {activityHome} from '../../utils/activityHome';
import {HomeActivityButton} from '../../components/bottomActivity/HomeActivityButton';
import {activityInformation} from '../../mock/activityInformation';
import {ActivityInformation} from '../../components/activityInformation/ActivityInformation';
import {PrimaryBotton} from '../../components/PrimaryBotton';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigtion = useNavigation();
  return (
    <SafeAreaView style={StyleHome.safeAreaHome}>
      <ScrollView style={StyleHome.scrollView}>
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
            ItemSeparatorComponent={
              <View style={StyleHome.itemSeparatorCards} />
            }
            renderItem={({item, index}) => (
              <View style={StyleHome.shadowCard}>
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
        <View style={StyleHome.containerBottonActivity}>
          {activityHome.map(item => {
            return (
              <HomeActivityButton
                onPressBotton={() => navigtion.navigate(item.onPress)}
                text={item.text}
                image={item.image}
              />
            );
          })}
        </View>
        <View>
          <Text style={StyleHome.recentActivity}>Actividad reciente</Text>
          {activityInformation.map(item => {
            return (
              <ActivityInformation
                transactionType={item.transactionType}
                transactionAmount={item.amount}
                transactionDate={item.date}
                transactionInformation={item.information}
              />
            );
          })}
        </View>
        <View style={StyleHome.containerBotton}>
          <PrimaryBotton
            nameButton="Ver màs"
            width={140}
            direction="END"
            color="PINK"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
