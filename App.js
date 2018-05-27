import React from 'react';
import { Alert, FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class HeroGame extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            heroSelected: {},
            screen: HeroSelectScreen
        }
    }





    render(){
        return(
            switch (this.state.screen) {
                case HeroSelectScreen:
                    return <Text>A</Text>;
                default:
                    return <Text>B</Text>
            }
        );
    }
}
