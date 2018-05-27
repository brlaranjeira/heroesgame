import React from 'react';
import { Alert, FlatList, ActivityIndicator, Text, View  } from 'react-native';
import HeroSelectScreen from './screens/HeroSelectScreen/HeroSelectScreen';

export default class HeroGame extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            heroSelected: {},
            screen: HeroSelectScreen
        }
    }





    render(){
        switch (this.state.screen) {
            case HeroSelectScreen:
                return <HeroSelectScreen heroSelected={this.state.heroSelected} onHeroChange={(hero) => this.setState({heroSelected: hero})}/>;
            default:
                return <Text>B</Text>
        }
    }
}
