import * as React from 'react';
import { Button } from 'react-native-elements';
import { TextInput, Paragraph, Headline } from 'react-native-paper';
import { Text, View, Image, ScrollView } from 'react-native';

export default class Login extends React.Component {
    state = {
        username: '',
        password: ''
    };

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

                    <View style={{ width: 280, height: 140, justifyContent: 'space-between' }} >
                        <TextInput
                            mode='outlined'
                            label='Email'
                            //error='false'
                            value={this.state.username}
                            onChangeText={username => this.setState({ username: username })}
                        />

                        <TextInput
                            mode='outlined'
                            label='Password'
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password: password })}
                        />
                    </View>

                    <View style={{ height: 80, justifyContent: 'center',  width: 240 }}>
                        <Button
                            title="Sign UP"
                            type="outline"
                            raised="true"
                            onPress={() => console.log('Pressed')}
                        />

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 140, height: 300, width: 280 }}>

                        <Paragraph >Forgot Password?</Paragraph>

                        <Paragraph >Sign UP</Paragraph>

                    </View>

                </View>
            </ScrollView>

        );
    }
}