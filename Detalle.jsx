import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';

const dpWidth = parseInt(Dimensions.get('window').width);
const dpHeight = Dimensions.get('window').height;

export default function DetallePokemon({ navigation, route }) {
  const { id } = route.params;
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    //pedirDatos();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.regReceta}>
          <Image style={styles.imgReceta} source={{ uri: datos?.imageURL }} />
        </View>
        <Text>{'\n'}</Text>
        <View style={styles.regReceta}>
          <ScrollView>
            <Text style={styles.recetaGeneral}>Nombre: <Text style={styles.recetaNombre}>{datos?.name} </Text></Text>
            <Text>{'\n'}</Text>
            <Text style={styles.recetaGeneral}>Ingredientes: <Text style={styles.recetaNombre}>{datos?.ingredients.join(', ')} </Text></Text>
            <Text>{'\n'}</Text>
            <Text style={styles.recetaGeneral}>Pasos: <Text style={styles.recetaNombre}>{datos?.steps.join(', ')} </Text></Text>
            <Text>{'\n'}</Text>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: dpWidth,
    height: dpHeight
  },
  imgReceta: {
    width: 200,
    height: 280,
    resizeMode: 'stretch',
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    padding: 1,
  },
  regReceta: {
    display: 'flex',
    flexDirection: 'row',
    width: dpWidth * 0.9,
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    alignContent: 'center',
    alignItems: 'center',
    verticalAlign: 'center'
  },
  recetaNombre: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  recetaGeneral: {
    fontSize: 20,
    padding: 5,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
});
