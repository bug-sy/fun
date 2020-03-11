
import { Avatar } from 'react-native-elements';
import React, { Component } from 'react'
import { Text, Image, ScrollView } from 'react-native';
import Drawer from '../components/Drawer'
import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'
import TrashNotes from '../FlatlistNotes/TrashNote'

class ReminderPage extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            toggleGridOrList : false,
        }
    }

    render() {
        return (
            <View
                style={styles.container}
            >

                <View style={styles.topBar}>
                    <View style={{ flexDirection: 'row', width: '80%' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ width: '12%' }}
                                onPress={() => this.props.navigation.toggleDrawer(Drawer)}
                            >
                                <Image
                                    style={{ height: 34, width: 40 }}
                                    source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/menuIcon2.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '87%', height: '100%', justifyContent: 'center', flexDirection: 'row' }}>
                                <Text
                                    style={{ fontSize: 25 }}
                                >
                                    Trash Notes
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '25%' }}>
                            {
                                this.state.toggleGridOrList != false
                                    ?
                                    <TouchableOpacity onPress={() => this.setState({ toggleGridOrList: !this.state.toggleGridOrList })}>
                                        <Image
                                            style={{ height: 39, width: 30 }}
                                            source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/grid.png')}
                                        />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.setState({ toggleGridOrList: !this.state.toggleGridOrList })}>
                                        <Image
                                            style={{ height: 39, width: 30 }}
                                            source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/list.png')}
                                        />
                                    </TouchableOpacity>
                            }
                         
                        </View>
                    </View>
                </View>

                <ScrollView>
                    <View style={{ justifyContent: 'center' }}>
                        <TrashNotes
                            navigation = { this.props.navigation }
                            toggleGridOrList = { this.state.toggleGridOrList }
                           
                        />
                    </View>
                </ScrollView>

            </View>
        )
    }
}

export default ReminderPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        width: '100%',
        flexDirection: 'row',
        height: 45,
        backgroundColor: '#999966',
        padding: 4,
        elevation: 8
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    },
    appbar: {
        width: '100%',
        justifyContent: "center",
        flex: 1,
        alignItems: "stretch",
        backgroundColor: 'pink',
        elevation: 10
    },
    bottom: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'green',
        width: '90%',
        justifyContent: 'flex-start',
        elevation: 10
    },
    bottomicons: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-around',
    },
    fullPage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
})