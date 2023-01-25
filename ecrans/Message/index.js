import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import { fakeChats } from '../../fakeData/fakeChats'
import MessageList from '../../compsantes/MessageList'
const Messages = ({navigation}) => {
  return (
    <FlatList 
      data={fakeChats}
      keyExtractor={item => item.id}
      style={styles.root}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=>{
        return <MessageList item={item} navigation={navigation}/>
      }}
    />
  )
}

export default Messages