import { Icon, Text } from 'native-base';
import React, { Component } from 'react';
import { Platform, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Actions } from 'react-native-router-flux';
import Colors from '../../config/color';
import styles from '../../config/styleSheet';
import {connect} from 'react-redux';
import {changeLoginStatus} from '../../actions/commonAction';
import {addNewVerb} from '../../actions/verbAction';

var pageName = ['Read Verb','Add Verb'];
var pageKey = ['readverb','addverb'];

class VerbHeader extends Component {
  constructor(props) {
    super(props);
    this.state={
      status:'User',
      date:null,
      month:null
    }
    context=this;
  }

  componentDidMount(){
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    this.setState({date,month})

    let status = this.props.common.hasOwnProperty('status')? this.props.common.status : 'User';
    this.setState({status})

  }

  componentWillReceiveProps(nextProps){
    let status = nextProps.common.hasOwnProperty('status')? nextProps.common.status : 'User';
    this.setState({status})
  }

  addNewVerb(){
    this.props.addNewVerb(true)
  }

  render(){

    if(Platform.OS=='ios'){
        return(
    <SafeAreaView style={{backgroundColor:'#EE5535'}} >

        <View style={styles.headerContainer} >
        {this.HeaderPage()}
        </View>

    </SafeAreaView>)
    }

    return (
        <SafeAreaView style={[styles.headerContainer,{backgroundColor:'#EE5535'}]} >
        
            {this.HeaderPage()}
       
        </SafeAreaView>
    );
  }

HeaderPage(){

  let CurDate=this.state.date;
  let Month=this.state.month;
  switch(Month){
    case 1:
      Month='Jan';
      break;

    case 2:
        Month='Feb';
        break;

    case 3:
        Month='Mar';
        break;
      
    case 4:
        Month='Apr';
        break;

    case 5:
        Month='May';
        break;

    case 6:
        Month='jun';
        break;

    case 7:
        Month='jul';
        break;

    case 8:
        Month='Aug';
        break;

    case 9:
        Month='Sep';
        break;

    case 10:
        Month='Oct';
        break;

    case 11:
        Month='Nov';
        break;

    case 11:
        Month='Dec';
        break;
                                                                                                                                       
  }

        return (
          <View style={{flex:1}} >
          <View style={{flexDirection:'row',flex:1}} >
  
              <View style={{flex:0.14,justifyContent:'center',alignItems:'center'}}>
                 <Icon type='FontAwesome5' name="user-graduate" style={{color:Colors.White}} />
              </View>


              <View style={{flex:0.54,justifyContent:'center',paddingTop:wp('2%')}} >
                    <Text style={{color:Colors.White,fontSize:wp('8%'), fontWeight:'bold'}} >{Actions.currentParams.title}</Text>
              </View>

              <View  style={{flex:0.32,justifyContent:'center',alignItems:'flex-start'}} >
              {this.state.status == "SuperUser"?
              <TouchableOpacity onPress={() => this.addNewVerb()}
                  style={{backgroundColor:'#ffffff',
                    borderWidth:wp('0.2%'),borderRadius:15,elevation:5,
                    borderColor:'#E93A41',
                    shadowColor:'#000',height:wp('11%'),
                    shadowOffset:{width:0, height:1},
                    shadowOpacity:0.8,marginLeft:wp('2%'),
                    shadowRadius:1}}>
                    <Text style={{color:'#E93A41',textAlign:'center',padding:wp('2%'),fontWeight:'600',
                      fontSize:wp('5%'),alignSelf:'center'}}>Add New</Text>
              </TouchableOpacity>
              :              
              <View
                style={{backgroundColor:'#ffffff',
                borderWidth:wp('0.2%'),borderRadius:15,elevation:5,
                borderColor:'#E93A41',
                shadowColor:'#000',height:wp('11%'),
                shadowOffset:{width:0, height:1},
                shadowOpacity:0.8,marginLeft:wp('5%'),
                shadowRadius:1}}>
                <Text style={{color:'#E93A41',textAlign:'center',padding:wp('2%'),paddingLeft:wp('5%'),paddingRight:wp('5%'),fontWeight:'600',
                  fontSize:wp('5%'),alignSelf:'center'}}>{CurDate+'-'+Month}</Text>
              </View>
              }
            </View>

          </View>

             </View>
         )
    }
}

const mapStateToProps = state =>{
  return {
     ...state
  }
}

module.exports = connect(mapStateToProps,{changeLoginStatus,addNewVerb})(VerbHeader);