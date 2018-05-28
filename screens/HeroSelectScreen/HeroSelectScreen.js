import React from 'react';
import { Image, FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class HeroSelectScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        herolist=['batman','superman','wonderwoman','flash'];
        heroes = herolist.map((item) => {
            return {
                key: item.toUpperCase(),
                name: item.toUpperCase(),
                imgBody: item + '-body.png',
                imgLogo: item + '-logo.png'
            };
        });
        if (Object.keys(this.props.heroSelected).length > 0) {
            picSelected = {uri: '../../img/'+this.props.heroSelected.imgBody};
            //picSelected = require('../../img/interroga.png');
        } else {
            picSelected = require('../../img/interroga.png');
        }
        return <View style={{flex:1}}>
            <Image style={{flex:3}} resizeMode="contain" source={picSelected}/>
            <FlatList
                data={heroes}
                horizontal={true}
                renderItem={( item ) => <Image resizeMode="contain" source={{uri:'../../'+item.imgLogo}}/>}
            />
        </View>;
    }

}