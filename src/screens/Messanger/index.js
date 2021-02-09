import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native';
import { StreamChat,StreamClient } from "stream-chat";
import {
    Chat,
    Channel,
    MessageList,
    MessageInput,
} from "stream-chat-react-native";
const { width, height } = Dimensions.get('window');
//var client = new StreamClient("xpfn73x7yzsh","8df43e8qe826ujzdvzkmhf6q4g9kmqxab6jmw8447qqywqx9uph2szkewvvfaezr");
const chatClient = new StreamChat('vdb7b5xmjh3r');

//console.log("Token",token);
const userToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoid2l0aGVyZWQtc2NlbmUtMyJ9.upmDE_Po0EcsprxFOr3tcQjuiKKe4tmGPxMDaKz_9lE';

const user = {
    id: 'withered-scene-3',
    name: 'Withered scene',
    image:
    'https://getstream.io/random_png/?id=withered-scene-3&amp;name=Withered+scene',
};
//chatClient.connectUser(user);
chatClient.setUser(user, userToken);
const channel = chatClient.channel("messaging", "curly-cake-8");
const ChannelScreen = React.memo(({ navigation }) => {
    return (
    <SafeAreaView>
        <Chat client={chatClient}>
        {/* Setting keyboardVerticalOffset as 0, since we don't have any header yet */}
        <Channel channel={channel} keyboardVerticalOffset={0}>
            <View style={{ flex: 1 }}>
            <MessageList />
            <MessageInput />
            </View>
        </Channel>
        </Chat>
    </SafeAreaView>
    );
});



export default class Messanger extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      messages: [
        {id:1, sent: true,  msg: 'Lorem ipsum dolor',   image:'https://www.bootdey.com/img/Content/avatar/avatar1.png'},
        {id:2, sent: true,  msg: 'sit amet, consectetuer',   image:'https://www.bootdey.com/img/Content/avatar/avatar1.png'},
        {id:3, sent: false, msg: 'adipiscing elit. Aenean ', image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'},
        {id:4, sent: true,  msg: 'commodo ligula eget dolor.',   image:'https://www.bootdey.com/img/Content/avatar/avatar1.png'},
        {id:5, sent: false, msg: 'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes', image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'},
        {id:6, sent: true,  msg: 'nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo',   image:'https://www.bootdey.com/img/Content/avatar/avatar1.png'},
        {id:7, sent: false, msg: 'rhoncus ut, imperdiet', image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'},
        {id:8, sent: false, msg: 'a, venenatis vitae', image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'},
      ]
    };
    this.send = this.send.bind(this);
    this.reply = this.reply.bind(this);
    this.renderItem   = this._renderItem.bind(this);
  }

  reply() {
    var messages = this.state.messages;
    messages.push({
      id:Math.floor((Math.random() * 99999999999999999) + 1),
      sent: false,
      msg: this.state.msg,
      image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'
    });
    this.setState({msg:'', messages:messages});
  }

  send() {
    if (this.state.msg.length > 0) {
      var messages = this.state.messages;
      messages.push({
        id:Math.floor((Math.random() * 99999999999999999) + 1),
        sent: true,
        msg: this.state.msg,
        image:'https://www.bootdey.com/img/Content/avatar/avatar1.png'
      });
      this.setState({messages:messages});
      setTimeout(() => {
        this.reply();
      }, 2000);
    }
  }

  _renderItem = ({item}) => {
    if (item.sent === false) {
      return (
        <View style={styles.eachMsg}>
          <Image source={{ uri: item.image}} style={styles.userPic} />
          <View style={styles.msgBlock}>
            <Text style={styles.msgTxt}>{item.msg}</Text>
          </View>
        </View>
      );
    } else{
      return (
        <View style={styles.rightMsg} >
          <View style={styles.rightBlock} >
            <Text style={styles.rightTxt}>{item.msg}</Text>
          </View>
          <Image source={{uri: item.image}} style={styles.userPic} />
        </View>
      );
    }
  };

  render() {
    return (
        <ChannelScreen />
    );
  }
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width,
    height,
  },
  header: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#075e54',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
  },
  chatTitle: {
    color: '#fff',
    fontWeight: '600',
    margin: 10,
    fontSize: 15,
  },
  chatImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
  input: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 10,
    height: 40,
    width: width - 20,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
    borderColor:'#696969',
    borderWidth:1,
  },
  eachMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
  },
  rightMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
    alignSelf: 'flex-end',
  },
  userPic: {
    height: 40,
    width: 40,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  msgBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    padding: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  rightBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: '#97c163',
    padding: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  msgTxt: {
    fontSize: 15,
    color: '#555',
    fontWeight: '600',
  },
  rightTxt: {
    fontSize: 15,
    color: '#202020',
    fontWeight: '600',
  },
}); 