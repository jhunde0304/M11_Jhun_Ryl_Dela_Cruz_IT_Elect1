import { View, StyleSheet,SafeAreaView,ScrollView } from 'react-native';
import SimpleCommentApp from './simpleCommentApp';

import MessageApp from './MessengerApp';
export default function App(){
  return(
    
  
    <SafeAreaView style={styles.container}>

       <SimpleCommentApp/>
           <MessengerApp/>
</SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container:{flex: 1}
})