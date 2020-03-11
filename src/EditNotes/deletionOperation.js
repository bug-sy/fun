import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Menu, Provider } from 'react-native-paper';
import EditNotes from '../EditNotes/EditNotes'
import { deleteUserNote, updateUserNote } from '../SignUpDataLayer'
import ColorPalette from 'react-native-color-palette'

export default class VerticalIconOfEdit extends React.Component {
    state = {
        visible : false,
        check : false,
        keyForDeletion : null
    };

    _openMenu = () => this.setState({ visible : true });
    _closeMenu = () => this.setState({ visible : false });

    globalDeletion(keyForDeletion)
    {
        this.setState({keyForDeletion : keyForDeletion})
    }

    handleBgColour = (col) => {
        console.log(" color in updation ",col)
    }

    handleTrashStatus = () => {
            updateUserNote({
                pinStatus : this.state.pinStatus,
                archiveStatus : this.state.archiveStatus,
                trashStatus : true,
                title : this.state.title,
                textNote : this.state.textNote,
            }, this.state.noteUpdationId)
            
    }

    componentDidMount() {
        
        this.setState({
            noteUpdationId : this.props.navigation.state.params.noteId,
            noteId : this.props.navigation.state.params.noteId,
            pinStatus : this.props.navigation.state.params.pin,
            title : this.props.navigation.state.params.titleOfCurrentNote,
            textNote : this.props.navigation.state.params.note,
            archiveStatus : this.props.navigation.state.params.archive,
            label : this.props.navigation.state.params.label,
            bgColor : this.props.navigation.state.params.bgColor,
            trashTag : this.props.navigation.state.params.trashTag
            
        })
    }

    render() {
        return (
            <Provider >

                <EditNotes
                    navigation = { this.props.navigation }
                     check = { this.state.check }
                     bgColor = { this.state.bgColor }
                     globalDeletion = { this.globalDeletion.bind(this) }
                />
                <View
                    style = {{
                        bottom : 0,
                        position : 'absolute',
                        flexDirection : 'row',
                        justifyContent : 'space-between',
                        width : '100%',
                        elevation : 40,
                        padding : 8
                    }}>
                    <TouchableOpacity  >
                        <Image
                            style = {{ height : 30, width : 40, top : '5%' }}
                            source = {require('/home/admin1/Documents/FundooApp/AwesomeProject/image/addition.png')}
                        />
                    </TouchableOpacity>
                    <Menu
                        visible = { this.state.visible }
                        onDismiss = { this._closeMenu }
                        anchor = {
                            <TouchableOpacity onPress = {() => { this._openMenu() }} style = {{ width : '100%' }}>
                                <Image
                                    style = {{ height : 30, width : 30, top : '5%' }}
                                    source = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/verticalMenu.png') }
                                />
                            </TouchableOpacity>
                        }
                        style = {{ width : '100%', paddingBottom : 30 }}
                    >

                        <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/trash.png') } onPress = { () => { deleteUserNote(this.state.noteUpdationId),this.props.navigation.navigate('Dashboard') }} title = "Delete" />
                        <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/CopyIcon.png') } onPress = { () => { } } title = "Make a copy" />
                        <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/SendIcon.png') } onPress = { () => { } } title = "Send" />
                     
              </Menu>
                </View>
            
            </Provider>
        );
    }
}