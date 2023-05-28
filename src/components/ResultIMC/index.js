import React from "react";
import {View, Text} from 'react-native'
import styles from "./style"

function ResultIMC({resultIMC, messageResultIMC}){
  return(
    <View style={styles.resultIMC}>
      <Text style={styles.information}>{messageResultIMC}</Text>
      <Text style={styles.numberIMC}>{resultIMC}</Text>
    </View>
  )
}

export default ResultIMC