import React, { Component } from 'react'
import { updateUserNote } from '../SignUpDataLayer'
import { Image, TextInput } from 'react-native';
import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'
import CompoRemind from '../Reminder/CompoRemind'

export default class EditNotesPinned extends Component {
    constructor(props) {
        super(props)

        this.state = {
            archiveStatus : false,
            trashStatus : false,
            title : '',
            textNote : '',
            togglePinOrUnpin : false,
            toggleAlertion : false,
            toggleArchive : false,
        }
    }

    handlePinResult = () => {
        this.state.archiveStatus == true
            ?
            updateUserNote( {
                pinStatus : false,
                archiveStatus : this.state.archiveStatus,
                title : this.state.title,
                textNote : this.state.textNote,
                bgColor : this.props.bgColor
            }, this.state.noteUpdationId)
            :
            updateUserNote({
                pinStatus : this.state.pinStatus,
                archiveStatus : this.state.archiveStatus,
                title : this.state.title,
                textNote : this.state.textNote,
                bgColor : this.props.bgColor,
            }, this.state.noteUpdationId)
    }

    componentDidMount() {

        this.setState({
            noteUpdationId : this.props.navigation.state.params.noteId,
            pinStatus : this.props.navigation.state.params.pin,
            title : this.props.navigation.state.params.titleOfCurrentNote,
            textNote : this.props.navigation.state.params.note,
            archiveStatus : this.props.navigation.state.params.archive,
            bgColor : this.props.navigation.state.params.bgColor,
        })
    }

    render() {
        return (
            <View style = { styles.topAndBottomBar }>

                <View style = { styles.topBar }>
                    <TouchableOpacity style = {{ width : '30%' }} onPress = { () => {
                        this.handlePinResult(), this.props.navigation.navigate('Dashboard')
                    }}>
                        <Image
                            style = {{ height : 30, width : 40 }}
                            source = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/goBack.png') }
                        />
                    </TouchableOpacity>
                    <View style = { styles.innerIcons }>
                        {
                            this.state.pinStatus
                                ?
                                <TouchableOpacity 
                                onPress = { () => this.setState({ pinStatus: !this.state.pinStatus }) }
                                
                                >
                                    <Image
                                        style = {{ height : 30, width : 32 }}
                                        source = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/pinned.png') } 
                                    />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress = { () => this.setState({ pinStatus: !this.state.pinStatus }) }>
                                    <Image
                                        style = {{ height : 26, width : 32 }}
                                        source = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/pin.png') }
                                    />
                                </TouchableOpacity>
                        }

                        {
                            <CompoRemind/>
                        }

                        {
                            this.state.archiveStatus
                                ?
                                <TouchableOpacity onPress = { () => this.setState({ archiveStatus: !this.state.archiveStatus }) }>
                                    <Image
                                        style = {{ height : 33, width : 24 }}
                                        source = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/unArchive.png') }
                                    />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress = { () => this.setState({ archiveStatus: !this.state.archiveStatus }) }>
                                    <Image
                                        style = {{ height : 33, width : 30  }}
                                        source = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/archive.png') }
                                    />
                                </TouchableOpacity>
                        }
                    </View>
                </View>

                <View style =   {{
                        flexDirection : 'column',
                        width : '100%',
                        backgroundColor : this.props.bgColor
                        }} >
                    <TextInput
                        style = {{ fontSize: 40 }}
                        placeholder = "Title"
                        multiline = { true }
                        value = { this.state.title }
                        onChangeText = { title => this.setState({ title: title }) }
                    />
                    <TextInput
                        style = { styles.note }
                        placeholder = "Note"
                        multiline = { true }
                        value = { this.state.textNote }
                        onChangeText = { textNote => this.setState({ textNote: textNote }) }
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    topBar : {
        flexDirection : 'row',
        backgroundColor : 'transparent',
        justifyContent : 'space-between',
        borderBottomWidth : 0.5,
        padding : 9,
    },
    innerIcons : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        width : '40%'
    },
    bottomBar : {
        flexDirection : 'row',
        position : 'absolute',
        backgroundColor : 'transparent',
        bottom : 0,
        width : '100%',
        justifyContent : 'space-between',
        height : '6%',
        padding : 9,
        alignItems : 'flex-end',
    },
    topAndBottomBar : {
        flexDirection : 'column',
        flex : 1,
        position : "relative",
    },
    titleAndNote : {
        flexDirection : 'column',
        width : '100%',
    },
    note : {
        height : '40%',
        fontSize : 30,
        textAlignVertical : "top"
    }
})