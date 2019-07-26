// Components/Search.js

import React from 'react'
import { Text, StyleSheet, View, TextInput, Button, FlatList } from 'react-native'
import FilmItem from './FilmItem'
import  {getFilmsFromApiWithSearchedText} from '../API/TMDBApi.js'

const styles = StyleSheet.create({
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

  constructor(props) {
    super(props)
    this.state = { films: [] }
  }

  _loadFilms() {
    getFilmsFromApiWithSearchedText("star").then(data => {
        this.setState({ films: data.results })
    })
}

  render() {
    return (
      <View style={{ marginTop: 40 }}>

        <TextInput style={styles.textinput} placeholder='Titre du film' />
        <Button title='Rechercher' onPress={() => this._loadFilms()} />

        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />

      </View>
    )
  }
}



export default Search
