import * as React from 'react';
import { View ,TouchableOpacity,Image,Text} from 'react-native';
import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';
import AddNote from './AddNote'

export default class MyComponent extends React.Component {
  state = {
    visible: false,
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  render() {
    return (
    
      <Provider >
             <AddNote/>
        <View
          style={{
            bottom:0,
            position:'absolute',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor:'pink',
            //alignItems:'basel
            width:'100%',
            elevation:40
          }}>
                      <TouchableOpacity  >
                        <Image
                            style={{ height: 30, width: 40, top: '5%'}}
                            source={require('/root/Documents/wesomeProject/image/addition.png')}
                        />
                    </TouchableOpacity>
          <Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={
                <TouchableOpacity onPress={()=>{this._openMenu()}} style={{backgroundColor:'red',width:'100%'}}>
              <Text  style={{fontSize:30}} >Show menu</Text>
              </TouchableOpacity>
            }
            style={{width:'100%',paddingBottom:30}}
          >
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
        </View>
      </Provider>
    );
  }
}