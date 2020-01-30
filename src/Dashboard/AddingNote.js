import { Avatar } from 'react-native-elements';
import React, { Component } from 'react'
import { Text, Image, ScrollView,TextInput } from 'react-native';
import {
    StyleSheet,
    TouchableOpacity,

    View,
} from 'react-native'

export default class AddingNote extends Component {
    constructor(props) {
        super(props)
        this.state = {  pinStatus: false,
                        archiveStatus: false,
                        trashStatus:false,
                        title:'',
                        textNote:''   
                        }
    }




    render() {
        return (
            <View style={styles. topAndBottomBar}>


            <View style={styles.topBar}>
                <TouchableOpacity style={{  width: '30%' }}  onPress={() => {this.props.navigation.navigate('Dashboard'),console.log(this.state.textNote)}}>
                    <Image
                        style={{ height: 30, width: 40 }}
                        source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/goBack.png')}
                    />
                </TouchableOpacity>
                <View style={styles.innerIcons}>
                    <TouchableOpacity >


                        <Image
                            style={{ height: 30, width: 40 }}
                            source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/pin.png')}
                        />

                    </TouchableOpacity>
                    <TouchableOpacity  >


                        <Image
                            style={{ height: 30, width: 20 }}
                            source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/alert.png')}
                        />

                    </TouchableOpacity>
                    <TouchableOpacity  >


                        <Image
                            style={{ height: 30, width: 20 }}
                            source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/archive.png')}
                        />

                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.titleAndNote} >
                <TextInput 
                style={{fontSize:40}} 
                placeholder="Title" 
                multiline={true}
                value={this.state.title}
                onChangeText={ title => this.setState({ title: title })}
                />
                <TextInput 
                style={styles.note} 
                placeholder="Note" 
                multiline={true}
                value={this.state.textNote}
                onChangeText={ textNote => this.setState({textNote: textNote })}
                />
            </View>





            <View style={styles.bottomBar}>
            <TouchableOpacity  >


                    <Image
                        style={{ height: 30, width: 40,top:'5%' }}
                        source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/addition.png')}
                    />

            </TouchableOpacity>
            <TouchableOpacity  >


                <Image
                    style={{ height: 30, width: 20,top:'5%' }}
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
        backgroundColor: 'grey',
        justifyContent: 'space-between',
        borderBottomWidth : 0.5,    
    },
    innerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '40%'
    },
    bottomBar:{
        flexDirection: 'row',
        position:'absolute',
        backgroundColor: 'grey',
        bottom:0,
        width:'100%',
        justifyContent:'space-between',
        borderTopWidth:0.5,
        height:'6%',    
    },
    topAndBottomBar:{
        flexDirection:'column',
        flex:1,
        position:"relative",
        elevation:10
    },
    titleAndNote:{
        flexDirection:'column',
        width:'100%',
        //backgroundColor:'green',
    },
    note:{
        height:'40%',
        //backgroundColor:'skyblue',
        fontSize:30,
        textAlignVertical:"top"
        
    }


})