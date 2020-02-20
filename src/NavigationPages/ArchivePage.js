
import React, { Component } from 'react'
import { Text, Image } from 'react-native';
import Drawer from '../components/Drawer'
import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'
import FlatlistNotesArchived from '../FlatlistNotes/FlatlistNotesArchived'

export default class ArchivePage extends Component {
    constructor(props) {
        super(props)
        this.state = { toggleGridOrList: false }
    }

    render() {
        return (
            <View style = {{ flex : 1, flexDirection : 'column', elevation : 10 }}>

                <View style = {{ width : '100%', flexDirection : 'row', height : 45, backgroundColor : '#999966', padding : 4, elevation : 8 }}>
                    <View style = {{ flexDirection : 'row', width : '80%' }}>
                        <View style = {{ flexDirection : 'row' }}>
                            <TouchableOpacity style = {{ width : '12%' }}
                                onPress = { () => this.props.navigation.toggleDrawer(Drawer) }
                            >
                                <Image
                                    style = { { height: 34, width: 40 } }
                                    source = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/menuIcon2.png') }
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style = {{ width : '77%', height : '100%', justifyContent : 'center', flexDirection : 'row' }}>
                                <Text
                                    style = {{ fontSize : 25 }}
                                >
                                    Archive
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {{ flexDirection : 'row', justifyContent : 'space-between', width : '32%' }}>
                            <TouchableOpacity
                            >
                                <Image
                                    style = {{ height : 39, width : 40, justifyContent : "center" }}
                                    source = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/search.png') }
                                />
                            </TouchableOpacity>
                            {
                                this.state.toggleGridOrList != false
                                    ?
                                    <TouchableOpacity onPress = { () => this.setState({ toggleGridOrList : !this.state.toggleGridOrList }) }>
                                        <Image
                                            style = {{ height : 39, width : 30 }}
                                            source = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/grid.png') }
                                        />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress = { () => this.setState({ toggleGridOrList: !this.state.toggleGridOrList }) }>
                                        <Image
                                            style = {{ height : 39, width : 30 }}
                                            source = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/list.png') }
                                        />
                                    </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>

                <View style = {{ justifyContent : 'center', marginBottom : 5, flex : 1 }}>
                    <FlatlistNotesArchived
                        navigation = { this.props.navigation }
                        toggleGridOrList = { this.state.toggleGridOrList }
                    />
                </View>

            </View>
        )
    }
}

