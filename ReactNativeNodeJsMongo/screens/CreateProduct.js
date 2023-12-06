import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const CreateProduct = ({ navigation, route }) => {
  const getDetails = (type) => {
    if (route.params) {
      switch (type) {
        case 'name':
          return route.params.name;
        case 'preco':
          return route.params.preco;
        case 'tipo':
          return route.params.tipo;
        case 'paisOrigem':
          return route.params.paisOrigem;
        case 'regiao':
          return route.params.regiao;
        case 'descricao':
          return route.params.descricao;
        case 'imagemURL':
          return route.params.imagemURL;
  
      }
    }
    return '';
  };

  const [name, setName] = useState(getDetails('name'));
  const [preco, setPreco] = useState(getDetails('preco'));
  const [tipo, setTipo] = useState(getDetails('tipo'));
  const [paisOrigem, setPaisOrigem] = useState(getDetails('paisOrigem'));
  const [regiao, setRegiao] = useState(getDetails('regiao'));
  const [descricao, setDescricao] = useState(getDetails('descricao'));
  const [imagemURL, setImagemURL] = useState(getDetails('imagemURL'));
  const [modal, setModal] = useState(false);
  const [enableShift, setEnableShift] = useState(false);
  const [descricaoHeight, setDescricaoHeight] = useState(40); 

  const submitData = () => {
    fetch('http://192.168.1.9:3000/send-data', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        preco,
        tipo,
        paisOrigem,
        regiao,
        descricao,
        imagemURL,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.name} foi cadastrado com sucesso!`);
        navigation.navigate('Home');
      })
      .catch((err) => {
        Alert.alert('Alguma coisa deu errado' + err);
      });
  };

  const updateDetails = () => {
    fetch('http://192.168.1.9:3000/update', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: route.params._id,
        name,
        preco,
        tipo,
        paisOrigem,
        regiao,
        descricao,
        imagemURL,
        comentarios: [],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.name} foi editado com sucesso!`);
        navigation.navigate('Home');
      })
      .catch((err) => {
        Alert.alert('Alguma coisa deu errado');
      });
  };

  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split('.')[1]}`,
          name: `test.${data.uri.split('.')[1]}`,
        };
        handleUpload(newfile);
      }
    } else {
      Alert.alert('Você precisa de permissão para isso');
    }
  };

  const pickFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split('.')[1]}`,
          name: `test.${data.uri.split('.')[1]}`,
        };
        handleUpload(newfile);
      }
    } else {
      Alert.alert('Você precisa de permissão para isso');
    }
  };

  const handleUpload = (image) => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'adegaApp');
    data.append('cloud_name', 'dxnoiuj66');

    fetch('https://api.cloudinary.com/v1_1/dxnoiuj66/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPicture(data.url);
        setModal(false);
      })
      .catch((err) => {
        Alert.alert('Erro durante o upload');
      });
  };
        const formatPrice = (value) => {
          // Remove caracteres não numéricos
          const numericValue = value.replace(/[^0-9]/g, '');

          // Formata o valor como uma string monetária
          const formattedValue = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(numericValue / 100);

          return formattedValue;
        };
  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles.root}
      enabled={enableShift}
    >
      <View>
      <TextInput
          label="Nome"
          style={styles.inputStyle}
          value={name}
          onFocus={() => setEnableShift(false)}
          theme={theme}
          mode="outlined"
          onChangeText={(text) => setName(text)}
        />
       <TextInput
          label="Preço"
          style={styles.inputStyle}
          value={formatPrice(preco)}
          onFocus={() => setEnableShift(false)}
          theme={theme}
          mode="outlined"
          onChangeText={(text) => setPreco(formatPrice(text))}
        />

        <TextInput
          label="Tipo"
          style={styles.inputStyle}
          value={tipo}
          theme={theme}
          onFocus={() => setEnableShift(false)}
          mode="outlined"
          onChangeText={(text) => setTipo(text)}
          />
          <TextInput
          label="País de Origem"
          style={styles.inputStyle}
          value={paisOrigem}
          theme={theme}
          onFocus={() => setEnableShift(false)}
          mode="outlined"
          onChangeText={(text) => setPaisOrigem(text)}
        />
        <TextInput
          label="Região"
          style={styles.inputStyle}
          value={regiao}
          theme={theme}
          onFocus={() => setEnableShift(false)}
          mode="outlined"
          onChangeText={(text) => setRegiao(text)}
        />
           <TextInput
          label="Descrição"
          style={styles.inputStyle}
          value={descricao}
          theme={theme}
          onFocus={() => setEnableShift(false)}
          mode="outlined"
          multiline={true}
          numberOfLines={5}
          onContentSizeChange={(event) => {
            const newHeight = Math.max(
              event.nativeEvent.contentSize.height, 40 
            );
            setDescricaoHeight(newHeight);
          }}
          onChangeText={(text) => setDescricao(text)}
        />
        <Button
          style={styles.inputStyle}
          icon={imagemURL === '' ? 'upload' : 'check'}
          mode="contained"
          theme={theme}
          onPress={() => setModal(true)}
        >
          Upload de Imagem
        </Button>
        {route.params ? (
          <Button
            style={styles.inputStyle}
            icon="content-save"
            mode="contained"
            theme={theme}
            onPress={() => updateDetails()}
          >
            Atualizar Detalhes
          </Button>
        ) : (
          <Button
            style={styles.inputStyle}
            icon="content-save"
            mode="contained"
            theme={theme}
            onPress={() => submitData()}
          >
            Salvar
          </Button>
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            setModal(false);
          }}
        >
          <View style={styles.modalView}>
            <View style={styles.modalButtonView}>
              <Button
                icon="camera"
                theme={theme}
                mode="contained"
                onPress={() => pickFromCamera()}
              >
                Câmera
              </Button>
              <Button
                icon="image-area"
                mode="contained"
                theme={theme}
                onPress={() => pickFromGallery()}
              >
                Galeria
              </Button>
            </View>
            <Button theme={theme} onPress={() => setModal(false)}>
              Cancelar
            </Button>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
};

const theme = {
  colors: {
    primary: '#8B0000',
  },
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
    margin: 5,
  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: 'white',
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default CreateProduct;