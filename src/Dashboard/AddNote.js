import { Tooltip } from 'react-native-elements';
import React, { Component } from 'react'
//import { createUserNote } from '../SignUpDataLayer/'
import { Text, Image, ScrollView, TextInput } from 'react-native';
import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';
import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'
//import CompoRemind from '../Reminder/CompoRemind'


export default class AddingNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pinStatus: false,
            archiveStatus: false,
            trashStatus: false,
            title: '',
            textNote: '',
            togglePinOrUnpin:false,
            toggleAlertion:false,
            toggleArchive:false,
            reminderDate:'',
            reminderTime:'',
        }
    }

    handleDateTime = (date,time) => {
        console.log("jhjhjh->",date,time)
        this.setState({reminderDate:date,reminderTime:time},()=>{
            console.log("what time this time ------->>>>",this.state.reminderDate,this.state.reminderTime)
        })
    }

    handleUserNote = () => {
        const  note = {           
            pinStatus: this.state.pinStatus,
            archiveStatus: this.state.archiveStatus,
            trashStatus: this.state.trashStatus,
            title: this.state.title,
            textNote: this.state.textNote,
            reminderDate:this.state.reminderDate,
            reminderTime:this.state.reminderTime
        }
        if (note.title && note.textNote) {
            createUserNote(note)
        }
     
    } 

    render() {
        return (
            
            <View style={styles.topAndBottomBar}>

                <View style={styles.topBar}>
                    <TouchableOpacity style={{ width: '30%' }} onPress={() => {
                        this.props.navigation.navigate('Dashboard'), this.handleUserNote()
                    }}>
                        <Image
                            style={{ height: 30, width: 40 }}
                            source={require('/root/Documents/wesomeProject/image/goBack.png')}
                        />
                    </TouchableOpacity>
                    <View style={styles.innerIcons}>
                                {
                                    this.state.togglePinOrUnpin!=false
                                    ?
                                            <TouchableOpacity  onPress={()=>this.setState({ togglePinOrUnpin:!this.state.togglePinOrUnpin })}>
                                         <Image
                                            style={{ height: 30, width: 40 }}
                                            source={require('/root/Documents/wesomeProject/image/pin.png')}
                                            />
                                            </TouchableOpacity>
                                    :
                                  
                                           <TouchableOpacity  onPress={()=>this.setState({ togglePinOrUnpin:!this.state.togglePinOrUnpin })}>
                                           <Image
                                               style={{ height: 30, width: 30 }}
                                               source={require('/root/Documents/wesomeProject/image/outlinedPin.png')} 
                                           />
                                           </TouchableOpacity>
                                }
                        
                           {/* {  
                            <CompoRemind
                            handleDateTime={this.handleDateTime}
                            />
                           } */}
                        
                        { 
                            this.state.toggleArchive!=false
                            ?   
                           
                              <TouchableOpacity  onPress={()=>this.setState({ toggleArchive:!this.state.toggleArchive })}>
                              <Image
                                 style={{ height: 30, width: 24 }}
                                 source={require('/root/Documents/wesomeProject/image/archive.png')}
                                 />
                                 </TouchableOpacity> 
                            :
                            <TouchableOpacity  onPress={()=>this.setState({ toggleArchive:!this.state.toggleArchive })}>
                            <Image
                                 style={{ height: 30, width: 30 }}
                                 source={require('/root/Documents/wesomeProject/image/forArchive.png')}
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

              
             
               
         
                  
                    
         
            </View>
          
        )
    }
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
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
        backgroundColor: 'transparent',
        bottom: 0,
        width: '100%',
        justifyContent: 'space-between',
        alignItems:'flex-end',
        borderTopWidth: 0.2,
        height: '6%',
        padding:6
    },
    topAndBottomBar: {
        flexDirection: 'column',
        //flex: 1,
        position: "relative",
    },
    titleAndNote: {
        flexDirection: 'column',
        width: '100%',
        height:'90%',
        backgroundColor:'green',
    },
    note: {
        height: '60%',
        //backgroundColor:'skyblue',
        fontSize: 30,
        textAlignVertical: "top"
    }
})