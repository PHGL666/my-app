import React, {Component} from 'react';
import { View, Text, FlatList } from "react-native";
import TextInput from "../kitui/TextInput";
import CompanyItem from "../components/CompanyItem";

class Search extends Component {

  static navigationOptions = {
    title: 'Rechercher une entreprise'
  };

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      companies: []
    }
  }

  searchChangeText(text) {
    fetch(process.env.API_URL + '/companies?search=' + text)
      .then(response => response.json())
      .then(companies => this.setState({ companies: companies }))
    this.setState({ search: text });
  }

  render() {
    return (
      <View>
        <Text>Search Screen</Text>
        <TextInput value={this.state.search} onChangeText={text => this.searchChangeText(text)} placeholder='Votre recherche'/>
        <FlatList data={this.state.companies}
                  renderItem={({item}) => <CompanyItem company={item} onClick={() => this.props.navigation.navigate('Company', { company: item })}/>}
                  keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default Search;