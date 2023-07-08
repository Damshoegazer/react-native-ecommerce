

import { View, Text, FlatList } from "react-native";
import prods from '../../constants/productos.json'
import styles from "./styles"

const Cosas = () => {
    return(
        <View style={styles.supContainer}>
            <FlatList 
            data={prods}
            renderItem= {({item}) => 
            <View style={styles.flat}>
            <Text style={styles.textito}>{item.name}{item.price} </Text>
            <Text style={styles.textito}>{item.name}{item.price} </Text>
            <Text style={styles.textito}>{item.name}{item.price} </Text>
            </View>
            }
            keyExtractor={(item) => item.id}
            style={styles.container}
            />
        </View>
    )
}

export default Cosas;