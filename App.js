import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';
import Component3 from './app/components/Component3/Component3';
import Component4 from './app/components/Component4/Component4';

export default class react_native_app extends Component {
    render() {
        return(
            <View>
                <Component1 message="This is Component 1 message from App.js" />
                <Component2 />
                <Component3 />
                <Component4 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  bigtext: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'red',
  },
});
