import {View, Text, StyleSheet, StatusBar} from 'react-native'
import styles from './styles'
import {Cosas} from './components'


export default function App() {
    return(
        
        <View style={styles.container}>
            <View>
                <Cosas /> 
            </View>
            
        </View>
    )
}
