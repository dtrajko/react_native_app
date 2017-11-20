import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ListView} from 'react-native';

const users = [
    {name: 'Veljko Trajkovic'},
    {name: 'Dejan Trajkovic'},
    {name: 'Marija Nokovic'},
]

export default class Component4 extends Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userDataSource: ds.cloneWithRows(users),
        }
    }

    renderRow(user, sectionId, rowId, highlightRow) {
        return(
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name}</Text>
            </View>
        );
    }

    render() {

        return(
            <ListView
                dataSource={this.state.userDataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'black',
        margin: 3,
        marginTop: 0,
    },
    rowText: {
        flex: 1,
        color: 'cyan',
        fontWeight: 'bold',
    },
});

AppRegistry.registerComponent('Component4', () => Component4);
