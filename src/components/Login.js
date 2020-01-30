import * as React from 'react';
import { Button } from 'react-native-elements';
import { TextInput, Paragraph, Headline } from 'react-native-paper';
import { Text, View, Image, ScrollView } from 'react-native';
import { TextField } from 'material-bread';
import { SignIn } from '../SignUpDataLayer'
import {AsyncStorage} from 'react-native';


export default class Login extends React.Component {
    state = {
        username: '',
        password: '',
        emailerror: '',
        emailError: '',
        passwordError: '',
        passworderror: '',
    };

    handleEmailandPassword = (email,password) => {
        if (!email || !password) {
            if (!email && !password) {
                this.setState({
                    emailerror: "please enter email",
                    emailError: true,
                    passworderror: "please enter password",
                    passwordError: true
                })
                //console.log('error')
            }

            else if (!email) {
                this.setState({
                    emailerror: "please enter email",
                    emailError: true
                })
                //console.log('email')
            }

            else if (!password) {
                 this.setState({
                     passworderror: "please enter password",
                     passwordError: true
                 })
                 console.log("password")
             }
        }

        else {
                console.log('email=',email)
         
 SignIn(email,password,(notes)=>{
     console.log('inside callback signin email =', notes)
     this.props.navigation.navigate('Dashboard')
  
AsyncStorage.getItem('key').then((success)=>{
    console.log("key is =>",success);
    
})
 
    console.log("end of callback Sigin = ")   
 })
        

            
        }
    

    }









    render() {
        return (

            <ScrollView>
                <View style={{ justifyContent: 'flex-start', flex: 1, alignItems: 'center' }}>


                    <View style={{ alignItems: 'center', justifyContent: 'space-around', height: 280 }} >
                        <Headline>LogIn Page</Headline>

                        <Image
                            style={{ height: 100, width: 100, tintColor: 'black' }}
                            source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/account_1.png')}
                        />


                    </View>

                    <View style={{ width: 280, height: 180, justifyContent: 'space-around' }} >
                    <TextField
                            type={'outlined'}
                            label='Username'
                            labelStyle={{backgroundColor:'transparent'}}
                           // error={true}
                            error={this.state.emailError}
                            value={this.state.username}
                            onChangeText={username => this.setState({ username: username })}
                            helperText={this.state.emailerror}
                        />

                        <TextField
                            type={'outlined'}
                            label='Password'
                            labelStyle={{backgroundColor:'transparent'}}
                            error={this.state.passwordError}
                            helperText={this.state.passworderror}
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password: password })}
                        />

                    </View>

                    <View style={{ height: 80, justifyContent: 'center',  width: 240 }}>
                        <Button
                            title="Sign In"
                            type="outline"
                            raised="true"
                            onPress={(e) =>this.handleEmailandPassword(this.state.username,this.state.password)}
                        />

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 140, height: 300, width: 280 }}>

                        <Paragraph >Forgot Password?</Paragraph>

                        <Paragraph  onPress={() => this.props.navigation.navigate('SignUp')}>Sign UP</Paragraph>

                    </View>

                </View>
            </ScrollView>

        );
    }
}