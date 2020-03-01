import * as React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';
import AddingNote from '../Dashboard/AddingNote'
import ColorPalette from 'react-native-color-palette'
import { Icon } from 'react-native-vector-icons' 
import { log } from 'react-native-reanimated';
import { createUserNote } from '../SignUpDataLayer'

export default class VerticalIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    visible : false,
    pin : false,
    text : '',
    pinStatus : false,
    archiveStatus : false,
    trashStatus : false,
    title : '',
    textNote : '',
    togglePinOrUnpin : false,
    toggleAlertion : false,
    archive : false,
    reminderDate : '',
    reminderTime : '',
  }
}

  handleUserNote = () => {
    const note = {
        pinStatus : this.state.pinStatus,
        archiveStatus : this.state.archiveStatus,
        trashStatus : this.state.trashStatus,
        title : this.state.title,
        textNote : this.state.textNote,
        reminderDate : this.state.reminderDate,
        reminderTime : this.state.reminderTime
    }
    if (note.title && note.textNote) {
        createUserNote(note)
    }
  }

  _openMenu = () => this.setState({ visible : true });
  _closeMenu = () => this.setState({ visible : false });

  globalChangePin(pin){
    this.setState({ pin : pin },()=>{
      console.log("Hi there checkToggle  ----->", this.state.pin)
    })
  }

  globalChangeArchive(archive){
    this.setState({ archive : archive },()=>{
      console.log("archive status is  ----->", this.state.archive)
    })
  }

  globalChangeTitle(title){
    this.setState({ title : title },()=>{
      console.log("text is  ----->", this.state.title)
    })
  }

  globalChangeTextNote(textNote){
    this.setState({ textNote : textNote },()=>{
      console.log("textNote is  ----->",this.state.textNote)
    })
  }

  handleDateTime = (date, time) => {
    console.log("jhjhjh->", date, time)
    this.setState({ reminderDate: date, reminderTime: time }, () => {
        console.log("what time this time ------->>>>", this.state.reminderDate, this.state.reminderTime)
    })
  }

  handleBgColour = (col) => {
    console.log("is color ",col)
  }

  render() {
    return (
      <Provider >

        <AddingNote
          navigation = { this.props.navigation } 
          pin = { this.state.pin }
          globalChangePin = { this.globalChangePin.bind(this) }
          archive = { this.state.archive }
          globalChangeArchive = { this.globalChangeArchive.bind(this) }
          title = { this.state.title }
          globalChangeTitle = { this.globalChangeTitle.bind(this)}
          textNote = { this.state.textNote }
          globalChangeTextNote = { this.globalChangeTextNote.bind(this)}
          handleUserNote = { this.handleUserNote }
          handleDateTime = { this.handleDateTime }
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
              style = {{ height: 30, width: 40, top: '5%' }}
              source = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/addition.png') }
            />
          </TouchableOpacity>
          <Menu
            visible = { this.state.visible }
            onDismiss = { this._closeMenu }
            anchor = {
              <TouchableOpacity onPress = { () => { this._openMenu() }} style = {{ width: '100%' }}>
                <Image
                  style = {{ height : 30, width : 30, top : '5%' }}
                  source = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/verticalMenu.png') }
                />
              </TouchableOpacity>
            }
            style = {{ width : '100%', paddingBottom : 30 }}
          >
            <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/trash.png') } onPress = { () => { } } title = "Delete" />
            <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/CopyIcon.png') } onPress = { () => { } } title = "Make a copy" />
            <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/SendIcon.png') } onPress = { () => { } } title = "Send" />
            <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/addaccount.png') } onPress = { () => { } } title = "Collaborator" />
            <Menu.Item icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/outline_label_black_48dp.png')} onPress = { () => { } }  title = "Labels" />
            <ColorPalette
              title = ''
              onChange =  { color => this.setState({ bgColor: color }, () => { this.handleBgColour(this.state.bgColor) }) }
              defaultColor = { '#ffff' }
              colors={[
                '#ffffff', '#f28b82', 
                '#fbbc04', '#fff475',
                '#ccff90', '#a7ffeb', 
                '#d7aefb', 
              ]}
           
            />
          
          </Menu>
        </View>

      </Provider>
    );
  }
}