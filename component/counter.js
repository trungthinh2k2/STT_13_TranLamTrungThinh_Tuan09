import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {store} from '../redux/store'
import {connect} from 'react-redux';
function Counter({state}) {
    return (
        <View style={styles.container}>
          <TouchableOpacity style={{width: 150, height: 50, marginBottom: 30, backgroundColor: 'red'}} onPress={() => {
            store.dispatch({type: 'decrement'})
          }}>
            <Text style={styles.btn}>Decrement</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: 150, height: 50, marginBottom: 30, backgroundColor: 'blue'}} onPress={() => {
            store.dispatch({type: 'increment'}) 
          }}>
            <Text style={styles.btn}>Increment</Text>
          </TouchableOpacity>
         
          
          <Text style={{fontSize: 30}}>Count: {state}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 50,
    }
  });
const mapsToProps = (state) => (
    {state}
)
export default connect(mapsToProps, null)(Counter)