import { View, Text, FlatList,Image } from 'react-native'
import React from 'react'
import { fakeSettings } from '../../fakeData/fakeSettings';

import styles from './style'
import SettingItem from '../../compsantes/SettingItem';
const Parametres = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('./../../assets/woman.jpg')}
          style={styles.image}
          />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Geli Tier</Text>
          <Text style={styles.userEmail}>geli@tier.gmail.com</Text>
          <Text>+229 676 271 57</Text>
        </View>
      </View>
      {/* Fin du Header */}

      <FlatList 
        data={fakeSettings}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}

        renderItem={({item})=>{
          return <SettingItem item={item}/>;
        }}
      />
    </View>
  )
}

export default Parametres