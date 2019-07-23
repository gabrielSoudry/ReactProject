// Components/Search.js

import React from 'react'
import { StyleSheet,View, TextInput, Button,FlatList} from 'react-native'

const styles = StyleSheet.create ({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
});

class Search extends React.Component {

  render() {
    return (
      <View style= {{ marginTop:40 }}>

        <TextInput style={styles.textinput}  placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
 
      </View>
    )
  }
}



export default Search
