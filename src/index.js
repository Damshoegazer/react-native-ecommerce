import {View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList, Image} from 'react-native'
import { useState } from 'react'
import styles from './styles'
import {Cosas} from './components'
import prods from './constants/productos.json'

export default function App() {
    
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    
    const filtrarPorCategoria = () => {
        return prods.filter(prod => prod.idCategoria === categoriaSeleccionada);
      }
    

    return(
        
        <View style={styles.container}>
            <Text>Categotia seleccionada:{categoriaSeleccionada} </Text>
            <View style={styles.buttons}>
                
                <TouchableOpacity style={styles.button}  onPress={() => setCategoriaSeleccionada("teles")}>
                    <Text>press1</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button}  onPress={() => setCategoriaSeleccionada("smartphones")}>
                    <Text>press2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => setCategoriaSeleccionada("gatgets")}>
                    <Text>press3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => setCategoriaSeleccionada("tablets")}>
                    <Text>press4</Text>
                </TouchableOpacity>
            </View>
            <FlatList

        data={filtrarPorCategoria()}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
            
            
          <View style={styles.flat}>
            <Text>{item.name}</Text>
            <Image source={{uri: item.image}} style={styles.img}/>
            <Text>Descripción: {item.descripcion}</Text>
            <Text>Precio: {item.price}</Text>
            <View style={styles.separador}></View>
          </View>
          
        )}
      />
        </View>
    )
}
