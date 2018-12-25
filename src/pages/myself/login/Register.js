import React from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import globalStyle from '../../../../assets/nativeStyles/global';
import Goback from '../../../common/Goback';
import styles from './styles';
import MyCountTime from './MyCountTime';
import Entypo from 'react-native-vector-icons/Entypo';

import {LOGGED_IN} from './LoginType';

const GET_CODE='GET_CODE';
const WAIT_CODE='WAIT_CODE';
export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mobile: null,
      code: null,
      password: null,
      getCodeType: GET_CODE,
      showPassword: false,
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: '注册',
    headerTitleStyle: globalStyle.black15,
    headerLeft: <Goback navigation={navigation}/> ,
  });

  getCode=()=>{
    this.setState({
      getCodeType: WAIT_CODE
    })

    fetch("https://cnodejs.org/api/v1/topics?page=1&limit=1")
      .then((response) => response.json())
      .then((responseData) => {   // 获取到的数据处理

      })
      .catch((error) => {
        console.log('==> fetch error', error);
        this.setState({ error: error, loading: false, refreshing: false});
      })
      .done();
  }

  register=()=>{
    fetch("https://cnodejs.org/api/v1/topics?page=1&limit=1")
      .then((response) => response.json())
      .then((responseData) => {   // 获取到的数据处理

        let fakeUser = {
          id: 1,
          mobile: '13816978323',
          nickname: 'poha',
          token: 'test-token',
          portal: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
          loginStatus: LOGGED_IN
        }

        this.props.navigation.navigate('MySelfHome', {user: fakeUser});
      })
      .catch((error) => {
        console.log('==> fetch error', error);
        this.setState({ error: error, loading: false, refreshing: false});
      })
      .done();
  }

  renderCode =()=> {
    return (
      <View style={{marginLeft: 170, marginTop: -20}}>
      {
        this.state.getCodeType === GET_CODE ?
        <TouchableOpacity onPress={this.getCode}>
          <View style={{
              width: 68,
              height: 18,
              color: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              backgroundColor: 'black',
              marginTop: 10,
            }}>
            <Text style={globalStyle.white10}>获取验证码</Text>
          </View>
        </TouchableOpacity>
        :
        <View style={{marginTop: 10}}>
          <MyCountTime
            ref='myCountTime'
            timeLeft={5} //倒计时的总时间
            width={68}
            height={18}
            color={'#fff'}
            fontSize={10}
            fontWeight={'normal'}
            borderColor={'transparent'}
            borderRadius={4}
            let backgroundColor={'gray'}
            textContent = {'秒再次获取'}
            afterEnd={()=>{
              this.setState({ getCodeType: GET_CODE });
            }}
            />
        </View>
      }
      </View>
    )
  }

  renderEye =()=> {
    return (
      <View style={{marginLeft: 190, marginTop: -20}}>
        <TouchableOpacity onPress={()=>{
            let temp = this.state.showPassword;
            this.setState({
              showPassword : !temp
            })
          }}>
          <View style={{
              width: 68,
              height: 18,
              color: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            {
              this.state.showPassword === true ? <Entypo name={'eye'} size={14} /> : <Entypo name={'eye-with-line'} size={14} />
            }
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.inputWrap}>

          <View style={styles.input}>
            <Text>+86</Text>
            <View style={{width: 180, marginLeft: 50, marginTop: -20}}>
              <TextInput
                onChangeText={(mobile) => this.setState({mobile})}
                blurOnSubmit={true}
                maxLength={50}
                clearButtonMode={'while-editing'}
                placeholder={'请输入手机号'}
              />
            </View>
          </View>
        <View style={styles.input}>
          <View style={{width: 150}}>
            <TextInput
              onChangeText={(code) => this.setState({code})}
              blurOnSubmit={true}
              maxLength={50}
              clearButtonMode={'while-editing'}
              placeholder={'请获取验证码'}
            />
          </View>
          {
            this.renderCode()
          }
        </View>
        <View style={styles.input}>
          <View style={{width: 200}}>
            <TextInput
              onChangeText={(password) => this.setState({password})}
              blurOnSubmit={true}
              maxLength={50}
              clearButtonMode={'while-editing'}
              placeholder={'请输入密码'}
              secureTextEntry={!this.state.showPassword}
            />
          </View>
          {
            this.renderEye()
          }
        </View>

        {
          this.state.mobile && this.state.code && this.state.password ?
          <TouchableOpacity onPress={this.register}>
            <View style={styles.validBtn}>
              <Text style={globalStyle.white12}>注 册</Text>
            </View>
          </TouchableOpacity>
          :
          <View style={styles.invalidBtn}>
            <Text style={globalStyle.white12}>注 册</Text>
          </View>
        }
      </View>

    );
  }
}