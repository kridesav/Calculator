import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: '60%',
      marginBottom: 10,
      textAlign: 'center',
      marginTop: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '30%',
      marginBottom: 20,
    },
    button: {
      width: 50,
    },
    list: {
      maxHeight: 200,
    }
  });
  