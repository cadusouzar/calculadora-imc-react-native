import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import ResultIMC from "../ResultIMC";
import styles from "./style";

function Form(){

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura")
  const [imc, setIMC] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")
  const [errorMessage, setErrorMessage] = useState(null)

  function imcCalculator(){
    return setIMC((weight/(height * height)).toFixed(2))
  }

  function verificationIMC(){
    if(imc == null){
      setErrorMessage("campo obrigatório")
    }
  }

  function validationIMC(){
    if(weight != null && height != null){
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageIMC("Seu IMC é igual a:")
      setTextButton("Calcular novamente")
      return
    }
    setIMC(null)
    setTextButton("Calcular")
    setMessageIMC("Preencha o peso e altura")
  }

  return(
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput 
        style={styles.Input}
        placeholder="Ex. 1.75"
        keyboardType="numeric"
        onChangeText={setHeight}
        value={height}
        />

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
        style={styles.Input} 
        placeholder="Ex. 75.365"
        keyboardType="numeric"
        onChangeText={setWeight}
        value={weight}
        />

        <TouchableOpacity
        style={styles.buttonCalculator}
        onPress={() => {validationIMC()}}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
        
      </View>

      <ResultIMC messageResultIMC={messageIMC} resultIMC={imc}/>
    </View>
  )
}

export default Form