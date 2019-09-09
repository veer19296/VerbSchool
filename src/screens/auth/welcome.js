import React, { Component } from 'react';
import { View,Text,TextInput,TouchableOpacity,Modal,StyleSheet } from 'react-native';
import Colors from '../../config/color';
import { Actions } from 'react-native-router-flux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {changeLoginStatus} from '../../actions/commonAction';
import {connect} from 'react-redux';

var obj;
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state={
      isSuperUserLogin:false,
      error:false,
      errorColor:'',
      errorMessage:'',
      superUsername:'Veer',
      passWord:'Veerey@123'
    }
    obj=this;
  }

  userLogin(){
    Actions.verb()
    this.props.changeLoginStatus('User')
  }

  superUserLogin(){
    this.setState({isSuperUserLogin:true});
  }

  varifyUser(){
    if(this.state.superUsername === 'Veer@life.com' || this.state.passWord === 'Veer@123456'){
      Actions.verb()
      this.props.changeLoginStatus('SuperUser')
      this.setState({isSuperUserLogin:false})
    }
    else{
      this.setState({errorColor:Colors.Red,error:true,errorMessage:'Please Enter Right Credentials!'})
    }
  }

  render() {
    return (
      
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:Colors.White}}> 

          <View style={{flex:0.60, justifyContent:'flex-end'}}>

          <View style={{flex:1,justifyContent:'space-between'}}>
            <View style={{flex:0.5}}>
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity
                onPress={()=> this.superUserLogin()} 
                style={{backgroundColor:Colors.BackGround,
                borderWidth:wp('0.2%'),borderRadius:18,elevation:5,
                borderColor:'#1B4633',
                shadowColor:'#000',
                shadowOffset:{width:1, height:1},
                shadowOpacity:0.8,
                shadowRadius:0}}>
                <Text style={{color:'#1B4633',padding:10,paddingLeft:30,paddingRight:30,
                    fontSize:wp('8%'),fontFamily:'Courier',alignSelf:'center'}}>Super User</Text>
              </TouchableOpacity>
            </View>
            
            <View style={{marginTop:wp('5%'),alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity
                onPress={()=> this.userLogin()} 
                style={{backgroundColor:Colors.BackGround,
                borderWidth:wp('0.2%'),borderRadius:18,elevation:5,
                borderColor:Colors.SkyBlue,
                shadowColor:'#000',
                shadowOffset:{width:1, height:1},
                shadowOpacity:0.8,
                shadowRadius:0}}>
                <Text style={{color:Colors.SkyBlue,padding:10,paddingLeft:30,paddingRight:30,
                    fontSize:wp('8%'),fontFamily:'Courier',alignSelf:'center'}}>User</Text>
              </TouchableOpacity>
            </View>
            </View>

            <View style={{flex:0.5}}>
              <Text style={{color:'#EE5535', textAlign:'center',fontFamily:'Courier-Oblique',textDecorationLine:'underline',fontSize:wp('5%')}}>
                Let's Study <Text style={{fontStyle:'italic'}}>together !</Text>
                </Text>
            </View>

          </View>
          </View>
        
          <Modal transparent animationType='slide' visible={this.state.isSuperUserLogin==true} >
          <View style={styles.modal} >
				  <View style={styles.wrapper}>
              <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                      <View style={{paddingTop:wp('2%')}} >

                        <View style={{justifyContent:'flex-start',paddingBottom:5}}>
                        <Text style={{fontSize:wp('4%'),color:Colors.DarkGrey}} > Super Username</Text>
                        </View>

                        <View style={{justifyContent:'center',borderColor:Colors.DarkGrey,borderWidth:1,borderRadius:5,height:wp('12%')}} >

                        <TextInput
                        underlineColorAndroid='transparent'
                        autoFocus={true}
                        style={{paddingLeft:7,padding:0,flex:1,fontSize:wp('4%'),color:Colors.DarkGrey}}
                        placeholder='Enter Super Username'          
                        error={obj.state.error}
                        onChangeText={(text) =>obj.setState({superUsername:text},()=>{ obj.state.superUsername == ""?obj.setState({errorColor:Colors.Red,error:true,errorMessage:'Username can not be Empty!'}):obj.setState({errorColor:Colors.DarkGrey,error:false,errorMessage:''})})}
                        />
                        </View>

                      </View>

                      <View style={{paddingTop:wp('5%')}} >

                        <View style={{justifyContent:'flex-start',paddingBottom:5}}>
                        <Text style={{fontSize:wp('4%'),color:Colors.DarkGrey}} > Password</Text>
                        </View>

                        <View style={{justifyContent:'center',borderColor:Colors.DarkGrey,borderWidth:1,borderRadius:5,height:wp('12%')}} >

                        <TextInput
                        underlineColorAndroid='transparent'
                        autoFocus={true}
                        style={{paddingLeft:7,padding:0,flex:1,fontSize:wp('4%'),color:Colors.DarkGrey}}
                        placeholder='Enter Password'          
                        error={obj.state.error}
                        onChangeText={(text) =>obj.setState({passWord:text},()=>{ obj.state.passWord == ""?obj.setState({errorColor:Colors.Red,error:true,errorMessage:'Password can not be Empty!'}):obj.setState({errorColor:Colors.DarkGrey,error:false,errorMessage:''})})}
                        />
                        </View>

                      </View>	

                      <View style={{paddingTop:wp('10%'),alignItems:'center'}}>
                        <TouchableOpacity onPress={() => this.varifyUser()}
                              style={{backgroundColor:'#E2EEEB',
                                borderWidth:wp('0.2%'),borderRadius:18,elevation:5,
                                borderColor:'#E2EEEB',
                                shadowColor:'#000',height:wp('14%'),width:wp('50%'),
                                shadowOffset:{width:1, height:2},
                                shadowOpacity:0.8,justifyContent:'center',
                                shadowRadius:1}}>
                            <Text style={{color:Colors.DarkGrey,paddingLeft:30,paddingRight:30,
                                fontSize:wp('5%'),alignSelf:'center'}}>Sign In</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={{paddingTop:wp('5%'),alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>this.setState({isSuperUserLogin:false})}
                              style={{backgroundColor:Colors.Google,
                                borderWidth:wp('0.2%'),borderRadius:18,elevation:5,
                                borderColor:Colors.Google,
                                shadowColor:'#000',height:wp('14%'),width:wp('50%'),
                                shadowOffset:{width:1, height:2},
                                shadowOpacity:0.8,justifyContent:'center',
                                shadowRadius:1}}>
                            <Text style={{color:Colors.White,paddingLeft:30,paddingRight:30,
                                fontSize:wp('5%'),alignSelf:'center'}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingTop:wp('5%'),alignItems:'center'}}>
                        <Text style={{color:this.state.errorColor}}>{this.state.errorMessage}</Text>
                    </View>
              </KeyboardAwareScrollView>
          </View>
					</View>
          </Modal>
            
        </View>
     
    );
  }
}

const styles = StyleSheet.create({

	modal: {
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor: 'rgba(226,238,235,0.1)'
		},
	  wrapper:{
		height: wp('130%'),
    width: wp('90%'),
    padding:wp('10%'),
		borderRadius: 8,
		backgroundColor: 'rgb(74,206,173)'
	  }  
});

const mapStateToProps = state =>{
  return {
     ...state
  }
}

module.exports = connect(mapStateToProps,{changeLoginStatus})(Welcome);