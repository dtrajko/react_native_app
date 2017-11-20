import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Component2 extends Component {

    constructor(props) {
        super(props);
    }

    onPress() {
        console.log('Area Pressed');
    }

    onPress2() {
        console.log('Area 2 Pressed');
    }

    render() {

        return(
            <View>
                <View style={styles.myView}>
                    <Text style={styles.myText}>Component2: "Hello Dejan!"</Text>
                </View>
                <View style={styles.container}>
                    <TouchableHighlight
                        style={styles.v1}
                        onPress={this.onPress}
                        underlayColor="cyan">
                        <View>
                            <Text style={styles.vText}>View 1</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableOpacity
                        style={styles.v2}
                        onPress={this.onPress}
                        underlayColor="cyan">
                        <View>
                            <Text style={styles.vText}>View 2</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableHighlight
                        style={styles.v3}
                        onPress={this.onPress}
                        underlayColor="cyan">
                        <View>
                            <Text style={styles.vText}>View 3</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'black',
    },
    myText: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        flexDirection: 'row',
        height: 100,
    },
    v1: {
        flex: 1,
        backgroundColor: 'red',
        padding: 10,
    },
    v2: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 10,
    },
    v3: {
        flex: 1,
        backgroundColor: 'green',
        padding: 10,
    },
    vText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

AppRegistry.registerComponent('Component2', () => Component2);
