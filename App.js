import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';
import Component3 from './app/components/Component3/Component3';
import Component4 from './app/components/Component4/Component4';
import Component5 from './app/components/Component5/Component5';

export default class react_native_app extends Component {
    render() {
        return(
            <View>
                <Component5 />
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
