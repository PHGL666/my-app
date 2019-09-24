# INSTALLATION EXPO

INSTALLER AVEC POWERSHELL ADMIN

```
npm install -g expo-cli
```

```
expo init my-project
```

> blank
> choisir le nom
> ne pas installer yarn pas utile

pour supprimer le dossier installé si besoin
```
rm -R my-app/ 
```

Pour pouvoir faire marcher un émulateur il faut installer Xcode (windows)

lancer l'app
```
  cd my-app
  npm start
```

> puis télécharger Expo sur notre téléphone mobile dans le play store et scanner le QR code sur notre écran pc.

> si ça ne marche pas on peut dl ANDROID STUDIO pour lancer un émulateur de smartphone sur le pc. Il faudra ensuite installer Expo sur l'émulateur comme un vrai tel.

## FICHIER ENV

Il est possible d'utiliser un fichier .env pour configurer les variable d'environnement :

```
npm install --save-dev babel-preset-expo babel-plugin-inline-dotenv
```

puis création du fichier .babelrc à la racine

```
{
  "presets": ["babel-preset-expo"],
  "plugins": ["inline-dotenv"]
}
```

créer fichier .env à la racine
```
API_URL=http://127.0.0.1:8000
```

dans App.js
```
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Text>{process.env.API_URL}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

OBS :
commande sur android debug
ctrl + M

## Lancement de l'application

```
npm start
```

a = pour lancer la synchro avec l'émulateur

OBS :
StatusBar => voir cour de Pierre Jehan



```
expo install expo-constants
```
+ App.js
````
import Constants from 'expo-constants';
````


création dossier screens + fichier Home.js
```
import React, {Component} from 'react';
import { View, Text } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

export default Home;
```
+App.js
```
import Home from "./screens/Home";
```

création dossier components + fichier MovieItem.js
```
import React, {Component} from 'react';
import { View, Text } from "react-native";

class MovieItem extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.movie.title}</Text>
        <Text>{this.props.movie.year}</Text>
      </View>
    );
  }
}

export default MovieItem;
```
+ dans Home.js import
```
import from '../components/MovieItem';
```
+ dans le Flatlist on rajoute le renderItem
```
        <FlatList data={this.state.movies}
                  renderItem={({item}) => <MovieItem movie={item}/>}
                  keyExtractor={(item, index) => index.toString()}
        />
```

OBS : le Flatlist est un composant qui contient 2 paramètres (tableau) : date + renderItem

## CRER UN BOUTON POUR AJOUTER UN FILM TERMINATOR 6

ajouter Button dans l'import dans Home.js
puis ajouter 
```
<Button title='Ajouter un film'/>
```
=> le bouton s'affiche dès lors. 

dans Home.js. Pour le faire fonctionner on crée une méthode addMovie() et on ajoute un onPress sur le button
```
  addMovie() {
    const movie =  { title: 'Terminator 6', year: 2019 };
    this.setState({
      movies: [...this.state.movies, movie]
    });
  }
```

```
<Button onPress={() => this.addMovie()} title='Ajouter un film'/>
```

On met à jour le render, on ajoute un justify content et une heigth sur les <View>
```
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Text>Home</Text>
        <View style={{ height: 250 }}>
          <FlatList data={this.state.movies}
                    renderItem={({item}) => <MovieItem movie={item}/>}
                    keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <Button onPress={() => this.addMovie()} title='Ajouter un film'/>
      </View>
    );
  }
}
```


## ORIENTATION

dans app.json on met orientation en default au lieu de portrait pour que l'écran s'adapte à la position
```
"orientation": "default",
```


OBS : https://docs.nativebase.io



## FORMULAIRE

Home.js mise à jour du constructor
```
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      title: '',
      year: new Date().getFullYear()
    };
  }
```
et de l'import
```
import { View, Text, FlatList, Button, TextInput } from 'react-native';
```
et du render en ajoutant les TextInput
```
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Text>Home</Text>
        <View style={{ height: 250 }}>
          <FlatList data={this.state.movies}
                    renderItem={({item}) => <MovieItem movie={item}/>}
                    keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <TextInput value={this.state.title} placeholder='Titre du film'/>
        <TextInput value={this.state.year.toString()} keyboardType='numeric'/>
        <Button onPress={() => this.addMovie()} title='Ajouter un film'/>
      </View>
    );
  }
}
```

OBS : https://facebook.github.io/react-native/docs/textinput

Nous ajoutons dans le render un onChangeText sur les deux TextInput pour écouter l'évènement et le lier à la valeur. Si le state change la valeur change et vice versa

```
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Text>Home</Text>
        <View style={{ height: 250 }}>
          <FlatList data={this.state.movies}
                    renderItem={({item}) => <MovieItem movie={item}/>}
                    keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <TextInput onChangeText={text => this.setState({ title: text })}
                   value={this.state.title}
                   placeholder='Titre du film'/>
        <TextInput onChangeText={text => this.setState({ year: text })}
                   value={this.state.year.toString()}
                   keyboardType='numeric'/>
        <Button onPress={() => this.addMovie()} title='Ajouter un film'/>
      </View>
    );
  }
}
```

## CORRECTION DU VISUEL LORSQU'ON ECRIT QQCHOSE DANS L'APPLICATION
dans fichier App.js on modifie la view par un KeyboardAvoidingView et on met à jour l'import
```
export default function App() {
  return (
    <View style={styles.container}>

      <Home/>

    </View>
  );
}

```
EST REMPLACE PAR 
```
export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

      <Home/>

    </KeyboardAvoidingView>
  );
}
```
+ l'import
```
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
```

ET mise à jour de Home.js
```
  addMovie() {
    const movie =  { title: this.state.title, year: this.state.year };
    this.setState({
      movies: [...this.state.movies, movie]
    });
  }
```

### RAJOUT DU COMPOSANT SWITCH

update de l'import
```
import { View, Text, FlatList, Button, TextInput, Switch } from 'react-native';
```
+ rajout du composant dans le render <Switch>


## RAJOUT DE STYLE POUR BIEN VOIR LES BLOC SUR L'APP

CREATION DOSSIER KITUI ET FICHIER TextInput.js
```
import React, {Component} from 'react';
import { TextInput } from 'react-native';

class TextInput extends Component {
  render() {
    return (
      <TextInput/>
    );
  }
}

export default TextInput;
```

on rajoute un alias dans l'import pour pas qu'il y ait confusion entre la class et l'import
```
import React, {Component} from 'react';
import { TextInput as DefaultTextInput } from 'react-native';

class TextInput extends Component {
  render() {
    return (
      <DefaultTextInput/>
    );
  }
}

export default TextInput;
```
rajout de style inline
```
<DefaultTextInput style={{ backgroundColor: 'white' }} {...this.props}/>
```

dans Home.js on va importer class TextInput et on met à jour l'import from react native
```
import React, {Component} from 'react';
import { View, Text, FlatList, Button, Switch } from 'react-native';
import TextInput from "../kitui/TextInput";
import MovieItem from '../components/MovieItem';
```

