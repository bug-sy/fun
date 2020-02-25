import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Menu, Provider } from 'react-native-paper';
import EditNotes from '../EditNotes/EditNotes'

export default class VerticalIconOfEdit extends React.Component {
    state = {
        visible : false,
        check : false
    };

    _openMenu = () => this.setState({ visible : true });
    _closeMenu = () => this.setState({ visible : false });

    globalChange(item)
    {
        this.setState({check : item})
    }

    render() {
        return (
            <Provider >

                <EditNotes
                    navigation = { this.props.navigation }
                     check = { this.state.check }

                     globalChange = { this.globalChange.bind(this) }
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
                        <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/trash.png') } onPress = { () => { console.log("noteIdforDeletion----->>>>>>>", this.state.noteUpdationId)} } title = "Delete" />
                        <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/CopyIcon.png') } onPress = { () => { } } title = "Make a copy" />
                        <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/SendIcon.png') } onPress = { () => { } } title = "Send" />
                        <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/addaccount.png') } onPress = { () => { } } title = "Collaborator" />
                        <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/outline_label_black_48dp.png') } onPress = { () => { } } title = "Labels" />
                    </Menu>
                </View>
            
            </Provider>
        );
    }
}