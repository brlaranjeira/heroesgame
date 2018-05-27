import React from 'react';
import { Image, FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class HeroSelectScreen extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {

        picSelected = require('../../img/interroga.png');
        return <View style={{flex:1}}>
            <Image resizeMode="contain" source={picSelected}/>
        </View>;
    }

}