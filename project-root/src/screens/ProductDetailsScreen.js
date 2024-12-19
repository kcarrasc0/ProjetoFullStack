import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getProductById, createProduct, updateProduct } from '../services/api';

export default function ProductDetailsScreen({ route, navigation }) {
  const [product, setProduct] = useState({ name: '', description: '', quantity: '', image: '' });
  const { id } = route.params || {};

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    const data = await getProductById(id);
    setProduct(data);
  };

  const handleSave = async () => {
    if (id) {
      await updateProduct(id, product);
    } else {
      await createProduct(product);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        value={product.name}
        onChangeText={(text) => setProduct({ ...product, name: text })}
      />
      <Text>Descrição:</Text>
      <TextInput
        style={styles.input}
        value={product.description}
        onChangeText={(text) => setProduct({ ...product, description: text })}
      />
      <Text>Quantidade:</Text>
      <TextInput
        style={styles.input}
        value={product.quantity}
        keyboardType="numeric"
        onChangeText={(text) => setProduct({ ...product, quantity: text })}
      />
      <Text>URL da Imagem:</Text>
      <TextInput
        style={styles.input}
        value={product.image}
        onChangeText={(text) => setProduct({ ...product, image: text })}
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
});
