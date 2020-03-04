import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Menu, Provider } from 'react-native-paper';
import EditNotes from '../EditNotes/EditNotes'
import { deleteUserNote } from '../SignUpDataLayer'
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

    componentDidMount() {
        
        this.setState({
            noteId : this.props.navigation.state.params.noteId,
            pinStatus : this.props.navigation.state.params.pin,
            title : this.props.navigation.state.params.titleOfCurrentNote,
            textNote : this.props.navigation.state.params.note,
            archiveStatus : this.props.navigation.state.params.archive,
            label : this.props.navigation.state.params.label,
            bgColor : this.props.navigation.state.params.bgColor
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
                        <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/trash.png') } onPress = { () => { deleteUserNote(this.state.noteId),this.props.navigation.navigate('Dashboard') }} title = "Delete" />
                        <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/CopyIcon.png') } onPress = { () => { } } title = "Make a copy" />
                        <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/SendIcon.png') } onPress = { () => { } } title = "Send" />
                        <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/addaccount.png') } onPress = { () => { } } title = "Collaborator" />
                        <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/outline_label_black_48dp.png') } onPress = { () => {this.props.navigation.navigate('LabelInNote',{"noteId" :this.state.noteId,"label":this.state.label}),console.log("---------------------------",this.state.noteId)} } title = "Labels" />
                        <ColorPalette
              title = ''
              onChange =  { color => this.setState({ bgColor: color }, () => { this.handleBgColour(this.state.bgColor) }) }
              defaultColor = { '#ffff' }
              colors={[
                '#ffffff', '#f28b82', 
                '#fbbc04', '#fff475',
                '#ccff90', '#a7ffeb', 
                '#d7aefb', 
              ]}/>
                    </Menu>
                </View>
            
            </Provider>
        );
    }
}