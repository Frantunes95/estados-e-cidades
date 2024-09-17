import * as React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SaoPaulo from './components/saopaulo';
import Roraima from './components/roraima';
import Ceara from './components/ceara';
import Amapa from './components/amapa';
import styles from './components/style';
import sampaImage from './assets/sampa.png';
import roraimaImage from './assets/roraima.png';
import cearaImage from './assets/ceara.png';
import amapaImage from './assets/amapa.png';
import estyles from './components/estyle';
import estilos from './components/estilo';

function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <View style={styles.buttonContainer}>

        <TouchableOpacity onPress={() => navigation.navigate('São Paulo')} style={estyles.touchableContainer}>
          <Text style={estilos.title}>Estado de São Paulo</Text>
          <Image source={sampaImage} style={estyles.imageButton}/>
            <Text style={estilos.description}>11% da população brasileira vive no interior de São Paulo. 
            A cidade de Campinas, em São Paulo, é a maior cidade interiorana do Brasil. Lá, mora mais de 1 milhão de habitantes. 
            Em seguida vêm São José dos Campos (SP), Ribeirão Preto (SP), Uberlândia (MG) e Sorocaba (SP).</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Roraima')} style={estyles.touchableContainer}>
          <Text style={estilos.title}>Estado de Roraima</Text>
          <Image source={roraimaImage} style={estyles.imageButton}/>
            <Text style={estilos.description}>Roraima tem a maior população indígena de todo o Brasil. 
            São 49.637 pessoas que se consideram indígenas no estado, vivendo em 32 terras indígenas em todo o seu território</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Ceará')} style={estyles.touchableContainer}>
          <Text style={estilos.title}>Estado do Ceará</Text>
          <Image source={cearaImage} style={estyles.imageButton}/>
           <Text style={estilos.description}>Banhado pelo oceano Atlântico, o litoral cearense tem 573 quilômetros de praias, 
           é o quarto maior estado do Nordeste e possui 184 municípios.</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Amapá')} style={estyles.touchableContainer}>
          <Text style={estilos.title}>Estado do Amapá</Text>
          <Image source={amapaImage} style={estyles.imageButton}/>
            <Text style={estilos.description}>Quase 40% da rede hidrográfica do Amapá faz parte da bacia do Rio Amazonas. 
            Os rios têm uma importância econômica para a região: lá, são exercidas atividades pesqueiras.</Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarLabelStyle: {fontSize: 12, color: 'black', fontWeight: 'bold'}, tabBarStyle: { backgroundColor: 'powderblue' }}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="São Paulo" component={SaoPaulo} />
        <Tab.Screen name="Roraima" component={Roraima} />
        <Tab.Screen name="Ceará" component={Ceara} />
        <Tab.Screen name="Amapá" component={Amapa} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

