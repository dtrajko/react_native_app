import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ListView} from 'react-native';

export default class Component5 extends Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userDataSource: ds,
        }
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((response) => {
            this.setState({
                userDataSource: this.state.userDataSource.cloneWithRows(response),
            });
        });
    }

    renderRow(user, sectionId, rowId, highlightRow) {
        return(
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name}: &lt;{user.email}&gt;</Text>
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

AppRegistry.registerComponent('Component5', () => Component5);
