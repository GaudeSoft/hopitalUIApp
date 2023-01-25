import { 
  View, 
  Text, 
  ScrollView, 
  Image, 
  FlatList,
  TouchableOpacity 
} from 'react-native'
import React from 'react'
import dashbordStyles from'./style';
import { FakeActivity } from '../../fakeData/fakeActivity';
import ActivityItem from '../../compsantes/ActivityItem';

import { FakeSymptome } from '../../fakeData/fakeSymptome';
import SymptomItem from '../../compsantes/SymptomItem';
import { fakeDoctor } from '../../fakeData/fakeDoctor';
const Home = () => {
  return (
    <ScrollView>

        {/* Debut du header */}
      <View style={dashbordStyles.header}>
        <Text style={dashbordStyles.userName}>Geli</Text>
        <Image source={require('./../../assets/woman.jpg')} style={dashbordStyles.userImg}/>
      </View>
      {/* Fin du header */}

      {/* Liste des activités */}
      <FlatList 
        data={FakeActivity} 
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={dashbordStyles.scrollableList}
        renderItem={({item})=>{
          return (
            <ActivityItem item={item}/>
          );
        }}
      />
      {/* Fin de liste des activités */}


      {/* Liste des symptômes */}
      <View style={dashbordStyles.title}>
        <Text style={dashbordStyles.titleBold}>Quel symptômes avez-vous ?</Text>  
      </View>
      <FlatList 
        data={FakeSymptome} 
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={dashbordStyles.scrollableList}
        renderItem={({item})=>{
          return (
            <SymptomItem item={item}/>
          );
        }}
      />
      {/* Fin de liste des symptômes */}

      {/* Liste des docteurs */}
      <View style={dashbordStyles.title_space_between}>
        <Text style={dashbordStyles.titleBold}>Nos docteurs</Text>  
        <TouchableOpacity>
          <Text style={dashbordStyles.link}>Afficher tout</Text>  
        </TouchableOpacity>
      </View>

      <View style={dashbordStyles.doctorsContainer}>
        {fakeDoctor.splice(0, 5).map((doctor)=>{
          return (
            <TouchableOpacity key={doctor.id} style={dashbordStyles.doctorsCard}>
              <Image 
                source={{uri: `${doctor.img}`}}
                style={dashbordStyles.doctorImg}
              />
              <View style={dashbordStyles.doctorInfo}>   
                <Text style={dashbordStyles.doctorName}>{doctor.fullName}</Text>
                <Text style={dashbordStyles.doctorSpec}>{doctor.speciallity}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>

      {/* Fin de la liste des docteurs */}
    </ScrollView>
  )
}

export default Home