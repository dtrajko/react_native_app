import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TextInput} from 'react-native';

export default class Component3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textValue: 'Hello',
        }
    }

    onChangeText(value) {
        this.setState({
            textValue: value,
        });
    }

    render() {

        return(
            <View>
                <TextInput
                    placeholder="Enter Text"
                    value={this.state.textValue}
                    onChangeText={(value) => this.onChangeText(value)}
                />
                <Text>{this.state.textValue}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('Component3', () => Component3);
