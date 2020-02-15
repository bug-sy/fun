import { Avatar } from 'react-native-elements';
import React, { Component } from 'react'
import { createUserNote,updateUserNote } from '../SignUpDataLayer'
import { Text, Image, ScrollView, TextInput } from 'react-native';
import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'
import CompoRemind from '../Reminder/CompoRemind'

export default class AddingNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //archiveStatus: false,
            trashStatus: false,
            title: '',
            textNote: '',
            togglePinOrUnpin:false,
            toggleAlertion:false,
            toggleArchive:false,
            noteUpdationId:''
        }
    }

    handlePinResult = () => {
        this.state.archiveStatus==true
        ?
          updateUserNote({
          pinStatus: false,
          archiveStatus: this.state.archiveStatus,
          title: this.state.title,
          textNote: this.state.textNote,
          },this.state.noteUpdationId)
      :
          updateUserNote({
          pinStatus: this.state.pinStatus,
          archiveStatus: this.state.archiveStatus,
          title: this.state.title,
          textNote: this.state.textNote,
          },this.state.noteUpdationId)
      }

    componentDidMount() {
        this.setState({
            noteUpdationId:this.props.navigation.state.params.noteId,
            pinStatus:this.props.navigation.state.params.pin,
            title:this.props.navigation.state.params.titleOfCurrentNote,
            textNote:this.props.navigation.state.params.note,
            archiveStatus:this.props.navigation.state.params.archive })
    }

    render() {
        return (
            <View style={styles.topAndBottomBar}>

                <View style={styles.topBar}>
                    <TouchableOpacity style={{ width: '30%' }} onPress={() => {
                      this.handlePinResult(),this.props.navigation.navigate('Dashboard')
                    }}>
                        <Image
                            style={{ height: 30, width: 40 }}
                            source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/goBack.png')}
                        />
                    </TouchableOpacity>
                    <View style={styles.innerIcons}>
                                {
                                    this.state.pinStatus
                                    ?
                                            <TouchableOpacity  onPress={()=>this.setState({ pinStatus:!this.state.pinStatus })}>
                                         <Image
                                            style={{ height: 30, width: 40 }}
                                            source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/pin.png')}
                                            />
                                            </TouchableOpacity>
                                    :
                                  
                                           <TouchableOpacity  onPress={()=>this.setState({ pinStatus:!this.state.pinStatus })}>
                                           <Image
                                               style={{ height: 30, width: 30 }}
                                               source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/outlinedPin.png')}
                                              
                                           />
                                           </TouchableOpacity>
                                }
                        
                           { 
                        
                            <CompoRemind/>

                           }
                        
                        { 
                            this.state.archiveStatus
                            ?   
                              <TouchableOpacity  onPress={()=>this.setState({  archiveStatus:!this.state.archiveStatus })}>
                              <Image
                                 style={{ height: 30, width: 24 }}
                                 source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/archive.png')}
                                 />
                                 </TouchableOpacity> 
                            :
                            <TouchableOpacity  onPress={()=>this.setState({  archiveStatus:!this.state.archiveStatus })}>
                            <Image
                                 style={{ height: 30, width: 30 }}
                                 source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/forArchive.png')}
                                 />
                            </TouchableOpacity> 
                           }
                    </View>
                </View>

                <View style={styles.titleAndNote} >
                    <TextInput
                        style={{ fontSize: 40 }}
                        placeholder="Title"
                        multiline={true}
                        value={this.state.title}
                        onChangeText={title => this.setState({ title: title })}
                    />
                    <TextInput
                        style={styles.note}
                        placeholder="Note"
                        multiline={true}
                        value={this.state.textNote}
                        onChangeText={textNote => this.setState({ textNote: textNote })}
                    />
                </View>

                <View style={styles.bottomBar}>
                    <TouchableOpacity  >


                        <Image
                            style={{ height: 30, width: 40, top: '5%' }}
                            source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/addition.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <Image
                            style={{ height: 30, width: 20, top: '5%' }}
                            source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/verticalMenu.png')}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        )


    }
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        backgroundColor: '#ddddbb',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        padding: 9
    },
    innerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '40%'
    },
    bottomBar: {
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: '#ddddbb',
        bottom: 0,
        width: '100%',
        justifyContent: 'space-between',
        borderTopWidth: 0.5,
        height: '6%',
        padding: 9
    },
    topAndBottomBar: {
        flexDirection: 'column',
        flex: 1,
        position: "relative",
        elevation: 10
    },
    titleAndNote: {
        flexDirection: 'column',
        width: '100%',
        //backgroundColor:'green',
    },
    note: {
        height: '40%',
        //backgroundColor:'skyblue',
        fontSize: 30,
        textAlignVertical: "top"
    }
})