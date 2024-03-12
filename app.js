import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione uma opção:</Text>
      <View style={styles.buttonContainer}>
        <Button title="Verificador de Faixa Etária" onPress={() => navigation.navigate('VerificadorIdade')} style={styles.button} />
        <View style={styles.buttonSpacing}></View> {/* Adicionando um espaço */}
        <Button title="Calculadora de Área de Triângulo" onPress={() => navigation.navigate('CalculadoraTriangulo')} style={styles.button} />
        <View style={styles.buttonSpacing}></View> {/* Adicionando um espaço */}
        <Button title="Calculadora de Área de Quadrado" onPress={() => navigation.navigate('CalculadoraQuadrado')} style={styles.button} />
      </View>
    </View>
  );
};

const VerificadorIdade = ({ navigation }) => {
  const [idad, setIdade] = React.useState('');
  const [resultado, setResultado] = React.useState('');

  const checarIdade = () => {
    const idade = parseInt(idad);

    if (isNaN(idade)) {
      setResultado('Por favor, digite uma idade válida.');
    } else if (idade >= 0 && idade <= 12) {
      setResultado('Criança');
    } else if (idade >= 13 && idade <= 17) {
      setResultado('Adolescente');
    } else if (idade >= 18 && idade <= 20) {
      setResultado('Jovem');
    } else if (idade >= 21 && idade <= 60) {
      setResultado('Adulto');
    } else if (idade > 60) {
      setResultado('Idoso');
    } else {
      setResultado('Idade inválida.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificador de Faixa Etária</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={(text) => setIdade(text)}
        value={idad}
        keyboardType="numeric"
      />
      <Button title="Verificar" onPress={checarIdade} />
      <Text style={styles.result}>{resultado}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} style={styles.button} />
    </View>
  );
};

const CalculadoraTriangulo = ({ navigation }) => {
  const [base, setBase] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [area, setArea] = React.useState(null);

  const calculoArea = () => {
    const trianguloArea = 0.5 * parseFloat(base) * parseFloat(altura);
    setArea(trianguloArea);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área de Triângulo</Text>
      <TextInput
        style={styles.input}
        placeholder="Base do triângulo"
        onChangeText={(text) => setBase(text)}
        keyboardType="numeric"
        value={base}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura do triângulo"
        onChangeText={(text) => setAltura(text)}
        keyboardType="numeric"
        value={altura}
      />
      <Button title="Calcular Área" onPress={calculoArea} />
      {area !== null && <Text style={styles.result}>Área do triângulo: {area}</Text>}
      <Button title="Voltar" onPress={() => navigation.goBack()} style={styles.button} />
    </View>
  );
};

const CalculadoraQuadrado = ({ navigation }) => {
  const [lado, setLado] = React.useState('');
  const [area, setArea] = React.useState(null);

  const calcularArea = () => {
    const areaQuadrado = parseFloat(lado) * parseFloat(lado);
    setArea(areaQuadrado);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área de Quadrado</Text>
      <TextInput
        style={styles.input}
        placeholder="Lado do quadrado"
        onChangeText={(text) => setLado(text)}
        keyboardType="numeric"
        value={lado}
      />
      <Button title="Calcular Área" onPress={calcularArea} />
      {area !== null && <Text style={styles.result}>Área do quadrado: {area}</Text>}
      <Button title="Voltar" onPress={() => navigation.goBack()} style={styles.button} />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="VerificadorIdade" component={VerificadorIdade} />
        <Stack.Screen name="CalculadoraTriangulo" component={CalculadoraTriangulo} />
        <Stack.Screen name="CalculadoraQuadrado" component={CalculadoraQuadrado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 10,
  },
  buttonSpacing: {
    marginVertical: 10, // Adiciona espaço vertical entre os botões
  },
});
