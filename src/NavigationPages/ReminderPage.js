
import { Avatar } from 'react-native-elements';
import React, { Component } from 'react'
import { Text, Image, ScrollView } from 'react-native';
import Drawer from '../components/Drawer'
import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'
import ReminderNotes from '../FlatlistNotes/ReminderNotes'

class ReminderPage extends Component {
    constructor(props) {
        super(props)
        this.state = { toggleGridOrList: false }
    }

    render() {
        const { navigation } = this.props
        const xyz =  navigation.getParam('value','no value')
        //const label = navigation.getParam('label','no value')
        console.log("name**********************")
        console.log("name**********************")
        console.log("name**********************")
        console.log("xyz**********************",xyz)
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
                                    Search your Notes
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '25%' }}>
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
                            <TouchableOpacity
                            >
                                <Avatar rounded title="MD" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <ScrollView>
                    <View style={{ justifyContent: 'center' }}>
                        <ReminderNotes
                            navigation={this.props.navigation}
                            toggleGridOrList={this.state.toggleGridOrList}
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