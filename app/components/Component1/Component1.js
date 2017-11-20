import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class Component1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Veljko',
            dad: 'Dejan',
            mum: 'Marija',
            showName: true,
            message: this.props.message,
        }
    }

    static defaultProps = {
        message: 'Hi there!',
    }

    render() {

        let name = this.state.showName ? this.state.name : 'No name';

        return(
            <View>
                <Text>:: {this.state.message} ::</Text>
                <Text>Ja se zovem {name}</Text>
                <Text>Moj tata se zove {this.state.dad}</Text>
                <Text>Moja mama se zove {this.state.mum}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Component1', () => Component1);
