import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from './firebaseConfig';
import Detalle from './Detalle';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const dpWidth = parseInt(Dimensions.get('window').width);
const dpHeight = Dimensions.get('window').height;



function HomeScreen(){
  return (
    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}



function LoginScreen(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Account created!')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('Home');
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }

const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Signed in!')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('Home');
      
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }

  useEffect(() => {
    navigation.setOptions({
      tabBarVisible: false,
      headerLargeTitle: false,
      headerTitle: "Hom"
      
    });
  }, [navigation]);

  return (
  <View style={styles.container}>
    <Text style={styles.title}>Iniciar sesión</Text>
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Correo electrónico:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        autoCapitalize="none"
      />
    </View>
    <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
      <Text style={styles.loginButtonText}>Iniciar sesión</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.CreateButton} onPress={handleCreateAccount}>
      <Text style={styles.loginButtonText}>Crear Cuenta</Text>
    </TouchableOpacity>
  </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {  
  
  return (
    
    
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
    
      
    
 );

}
 

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: dpWidth
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: dpWidth * 0.8,
    marginBottom: 15
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5
  },
  loginButton: {
    backgroundColor: '#808080',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  CreateButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10
    
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});
