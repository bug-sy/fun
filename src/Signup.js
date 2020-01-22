import * as React from 'react';
import { Button,Input } from 'react-native-elements';
import { TextField } from 'material-bread';
import { TextInput, Paragraph, Headline, Card } from 'react-native-paper';
import { Text, View, Image, ScrollView } from 'react-native';
import { SignUp } from './SignUpDataLayer'

export default class MyComponent extends React.Component {
    state = {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        confirm_password: '',
        emailerror: '',
        emailError: '',
        passwordError: '',
        passworderror: '',
    };


    handleEmailandPassword = (first_name,last_name,email,password) => {
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

            SignUp(first_name,last_name,email,password,()=>{
                console.log("hgfds");
                
            })
            
        }
    

    }

    


    render() {
        return (


            <ScrollView>
                <View style={{ justifyContent: 'flex-start', flex: 1, alignItems: 'center' }}>
                    <View style={{ width: 280, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', height: 120 }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'skyblue' }} h1>Fundoo</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                            <View ><Text style={{ color: '#4285F4', fontSize: 40, fontWeight: 'bold', }}>G</Text></View>
                            <View><Text style={{ color: '#DB4437', fontSize: 40, fontWeight: 'bold' }}>o</Text></View>
                            <View ><Text style={{ color: '#F4B400', fontSize: 40, fontWeight: 'bold' }}>o</Text></View>
                            <View ><Text style={{ color: '#4285F4', fontSize: 40, fontWeight: 'bold' }}>g</Text></View>
                            <View ><Text style={{ color: '#0F9D58', fontSize: 40, fontWeight: 'bold' }}>l</Text></View>
                            <View ><Text style={{ color: '#DB4437', fontSize: 40, fontWeight: 'bold' }}>e</Text></View>
                        </View>

                    </View>
                    <View style={{ width: 200, alignItems: 'center', justifyContent: 'center', height: 80 }} >
                        <Text style={{ fontSize: 30 }}>Signup Page</Text>
                    </View>

                    <View style={{ width: 320, height: 340, justifyContent: 'space-between' }} >
                        <TextField
                            
                            label='First Name'
                            errorMessage='Please Enter The First Name '
                            type={'outlined'}
                            //error='true'
                            value={this.state.first_name}
                            onChangeText={first_name => this.setState({ first_name: first_name })}
                        />

                         <TextField
                            type={'outlined'}
                            label='Last Name'
                            errorMessage='ENTER A VALID ERROR HERE'
                            value={this.state.last_name}
                            onChangeText={last_name => this.setState({ last_name: last_name })}
                        />

                        <TextField
                            type={'outlined'}
                            label='Username'
                           // error={true}
                            error={this.state.emailError}
                            value={this.state.username}
                            onChangeText={username => this.setState({ username: username })}
                            helperText={this.state.emailerror}
                        />

                        <TextField
                            type={'outlined'}
                            label='Password'
                            error={this.state.passwordError}
                            helperText={this.state.passworderror}
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password: password })}
                        />

                        <TextField
                            type={'outlined'}
                            label='Confirm Password'
                            secureTextEntry={true}
                           // error={this.state.passwordError}
                           
                            value={this.state.confirm_password}
                            onChangeText={confirm_password => this.setState({ confirm_password: confirm_password })}
                        /> 

                    </View>

                    <View style={{ height: 80, justifyContent: 'center', top: 0, width: 210 }}>
                        <Button
                            title="Sign UP"
                            type="outline"
                            raised="true"
                            onPress={(e) =>this.handleEmailandPassword(this.state.first_name,this.state.last_name,this.state.username,this.state.password)}
                        />
                    </View>
                </View>
            </ScrollView>

        );
    }



}