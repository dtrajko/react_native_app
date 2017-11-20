import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TextInput, Switch} from 'react-native';

export default class Component3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textValue: 'Hello',
            switchValue: false,
        }
    }

    onChangeText(value) {
        this.setState({
            textValue: value,
        });
    }

    onSwitchChange(value) {
        this.setState({
            switchValue: value,
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
                <Switch
                    value={this.state.switchValue}
                    onValueChange={(value) => this.onSwitchChange(value)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('Component3', () => Component3);
