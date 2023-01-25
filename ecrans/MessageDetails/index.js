import { View, FlatList } from 'react-native';
import React, {useEffect} from 'react';
import { fakeConversations } from '../../fakeData/fakeConversations';
import Message from '../../compsantes/Message';
import MessageInput from '../../compsantes/MessageInput';

const MessageDetails = ({route, navigation}) => {
    const {item} = route.params;
    useEffect(() => {
        navigation.setOptions({title: item.fullname});
    })
  return (
    <View style={{flex:1}}>
      <FlatList 
        data={fakeConversations}
        keyExtractor={item => item.id}
        renderItem={({item})=>{
          return <Message item={item}/>;
        }}
      />
      <MessageInput />
    </View>
  )
}

export default MessageDetails