

import { View, Text, FlatList, Button } from "react-native";
import { useState } from "react";
import prods from '../../constants/productos.json'
import styles from "./styles"

const Cosas = () => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(1);
    
    const filtrarPorCategoria = () => {
        return prods.filter(prod => prod.idCategoria === categoriaSeleccionada);
      }


    return(
        <View style={styles.supContainer}>
            <Text>Categotia seleccionada:{categoriaSeleccionada} </Text>
            <View style={{ flexDirection: 'row' }}>
                <Button title= "apretar1" onPress={() => setCategoriaSeleccionada(1)}></Button>
                <Button title="apretar2" onPress={() => setCategoriaSeleccionada(2)}></Button>
                <Button title="apretar3" onPress={() => setCategoriaSeleccionada(3)}></Button>
            </View>
            <View>
            <FlatList
        data={filtrarPorCategoria()}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>Descripción: {item.descripcion}</Text>
            <Text>Precio: {item.price}</Text>
          </View>
        )}
      />
            </View>
        </View>
    )
}

export default Cosas;