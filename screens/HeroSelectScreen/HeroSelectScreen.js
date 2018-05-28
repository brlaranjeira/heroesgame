import React from 'react';
import { TouchableWithoutFeedback, Image, FlatList, Alert, Text, View  } from 'react-native';
import Heroes from '../../Heroes/Heroes';

export default class HeroSelectScreen extends React.Component{



    constructor(props) {
        super(props);
        this.state = {}
        heroesResources = new Heroes();
    }

    render() {
        herolist=['batman','superman','wonderwoman','flash'];
        heroes = herolist.map((item) => {
            return {
                key: item.toUpperCase(),
                name: item.toUpperCase(),
                imgBody: heroesResources.resources.heroes[item+'Body'],
                imgLogo: heroesResources.resources.heroes[item+'Logo'],
            };
        });
        if (Object.keys(this.props.heroSelected).length > 0) {
            picSelected = this.props.heroSelected.imgBody;
        } else {
            picSelected = heroesResources.resources.interroga;

        }
        selectFunction = this.props.onHeroChange;
        return <View style={{flex:1}}>
            <Image style={{flex:3}} resizeMode="cover" source={picSelected}/>
            <FlatList
                style={{flex:1}}
                data={heroes}
                horizontal={true}
                renderItem={( item ) =>(<TouchableWithoutFeedback onPress={ () => this.props.onHeroChange(item.item) }>
                        <View>
                            <Image  style={{flex:1,width:100}} resizeMode="stretch" source={item.item.imgLogo} />
                        </View>
                    </TouchableWithoutFeedback>)}
            />
            <Text>A{this.props.heroSelected.name}</Text>
        </View>;
    }

}//ugr pi empenho qtde