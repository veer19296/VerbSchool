import React, { Component } from 'react'
import { ScrollView, View, Text, SafeAreaView,Modal, Button,FlatList,TextInput, TouchableOpacity,Image} from 'react-native';
import Style from '../../config/styleSheet';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../config/color';
import firebase from 'firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import {addNewVerb} from '../../actions/verbAction';

class Verb extends Component {
    constructor(props) {
    super(props);
    this.state = {
        isVisible:false,

        setData:[ {
                        V1:'Go',
                        V2:'Went',
                        V3:"Gone",
                        V4:"Going",
                        mean:"जाना",
                        Ves:'Goes'
                    }],

        nextState:
            {
                    V1:"hii",
                    V2:"hello",
                    V3:"how",
                    V4:"are",
                    mean:"you",
                    Ves:"नमस्ते"
            }, 

        ReadVerb:[],
    }
    obj=this;
}


componentDidMount(){
    // let userRef = firebase.database().ref('VerbSchool/');
    // userRef.child('verb').push(this.state.addVerb)    

    // let V1=this.state.V1, V2=this.state.V2, V3=this.state.V3, V4=this.state.V4, mean=this.state.mean, Ves=this.state.Ves;

    let userRef = firebase.database().ref('VerbSchool/');
    userRef.child('verb').set(this.state.setData)    


        const rootRef= firebase.database().ref().child('VerbSchool');
        const modeRef= rootRef.child('verb');
        modeRef.on('value', snap => {
            this.setState({
                ReadVerb : snap.val()
            });
        });       
}

onCancel(){
    // let V1=this.state.V1, V2=this.state.V2, V3=this.state.V3, V4=this.state.V4, mean=this.state.mean, Ves=this.state.Ves;

    let userRef = firebase.database().ref('VerbSchool/');
    userRef.child('verb').push(this.state.nextState)    
    
}

componentWillReceiveProps(nextProps){
    console.log(nextProps.verb)
    let isVisible = nextProps.verb.hasOwnProperty('addNew')? nextProps.verb.addNew : false;
    this.setState({isVisible})
}


    render() {
        return (
        <ScrollView showsVerticalScrollIndicator={false} style={[Style.cardContainer,{marginTop:0}]}>

                <SafeAreaView style={{ flex:1,marginBottom:wp('10%')}}>
                    <View style={{flex:0.2,flexDirection:'row',marginTop:wp('0.5%'),height:hp('6%'),backgroundColor:'#E39A67'}}>
                                <View style={{flex:0.50,paddingLeft:wp('2%'),borderRightWidth:wp('0.2%'),borderRightColor:Colors.White,justifyContent:'center'}}>
                                    <Text style={{fontSize:wp('4.5%'),color:Colors.White,fontWeight:'500'}}>Verb 1St</Text>
                                </View>
                                <View style={{flex:0.50,paddingLeft:wp('2%'),borderRightWidth:wp('0.2%'),borderRightColor:Colors.White,justifyContent:'center'}}>
                                    <Text style={{fontSize:wp('4.5%'),color:Colors.White,fontWeight:'500'}}>Verb 2nd</Text>
                                </View>
                                <View style={{flex:0.50,paddingLeft:wp('2%'),borderRightWidth:wp('0.2%'),borderRightColor:Colors.White,justifyContent:'center'}}>
                                    <Text style={{fontSize:wp('4.5%'),color:Colors.White,fontWeight:'500'}}>Verb 3rd</Text>
                                </View>
                                <View style={{flex:0.50,paddingLeft:wp('2%'),justifyContent:'center'}}>
                                    <Text style={{fontSize:wp('4.5%'),color:Colors.White,fontWeight:'500'}}>Verb 4th</Text>
                                </View>
                    </View>

                  
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.ReadVerb}
                        renderItem={({item, index})=>(

                        <View key={index}>
                            <View style={{flex:0.8,flexDirection:'row'}}>
                            <View style={{flex:0.50,paddingLeft:wp('2%'),paddingTop:wp('3%'),borderRightWidth:wp('0.2%'),borderRightColor:'#E39A67'}}>
                                <Text>{item.V1}</Text>
                                <Text>{item.Ves}</Text>
                                <Text>{item.mean}</Text>
                            </View>
                            <View style={{flex:0.50,paddingLeft:wp('2%'),paddingTop:wp('3%'),borderRightWidth:wp('0.2%'),borderRightColor:'#E39A67'}}>
                                <Text>{item.V2}</Text>
                            </View>
                            <View style={{flex:0.50,paddingLeft:wp('2%'),paddingTop:wp('3%'),borderRightWidth:wp('0.2%'),borderRightColor:'#E39A67'}}>
                                <Text>{item.V3}</Text>
                            </View>
                            <View style={{flex:0.50,paddingLeft:wp('2%'),paddingTop:wp('3%')}}>
                                <Text>{item.V4}</Text>
                            </View>
                            </View>
                        </View>
                        )}
                        />
                       
                    <View style={{padding:wp('2%'),alignItems:'flex-end',borderTopWidth:wp('0.3%'),borderTopColor:'#E39A67'}}/>

                </SafeAreaView>



    <Modal
    animationType="none"
    transparent={false}
    visible={this.state.isVisible}>

    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={Style.cardContainer}>
        <View style={{ flex:1,margin:wp('2%'),justifyContent:'space-between',marginTop:wp('20%'),marginBottom:wp('10%')}}>
            <View style={{flex:0.7}}> 
            
                <View style={{paddingTop:wp('3%')}} >

                    <View style={{justifyContent:'flex-start',paddingBottom:5}}>
                    <Text style={{fontSize:wp('4%'),color:'#1F3454'}} > Verb 1st:</Text>
                    </View>

                    <View style={{justifyContent:'center',borderColor:Colors.LightGrey,borderWidth:1,borderRadius:5,height:hp('5%')}} >

                    <TextInput
                    underlineColorAndroid='transparent'
                    autoFocus={true}
                    style={{paddingLeft:7,padding:0,flex:1,fontSize:wp('4%'),color:Colors.DarkGrey}}
                    placeholder='Enter First Form of Verb'          
                    error={obj.state.error}
                    // value={this.state.V1}
                    // onChangeText={(text) =>obj.setState(prevState => ({newVerb: {...prevState.newVerb,v1:text}}))}
                    />
                    </View>
                </View>

                <View style={{paddingTop:wp('2%')}} >

                    <View style={{justifyContent:'flex-start',paddingBottom:5}}>
                    <Text style={{fontSize:wp('4%'),color:'#1F3454'}} > Verb 2nd :</Text>
                    </View>

                    <View style={{justifyContent:'center',borderColor:Colors.LightGrey,borderWidth:1,borderRadius:5,height:hp('5%')}} >

                    <TextInput
                    underlineColorAndroid='transparent'
                    autoFocus={true}
                    style={{paddingLeft:7,padding:0,flex:1,fontSize:wp('4%'),color:Colors.DarkGrey}}
                    placeholder='Enter Second Form of Verb'          
                    error={obj.state.error}
                    // onChangeText={(text) =>obj.setState({customGoalName:text},()=>{ obj.state.customGoalName == ""?obj.setState({errorColor:Colors.Red,error:true}):obj.setState({errorColor:Colors.DarkGrey,error:false})})}
                    />
                    </View>
                </View>

                <View style={{paddingTop:wp('2%')}} >

                    <View style={{justifyContent:'flex-start',paddingBottom:5}}>
                    <Text style={{fontSize:wp('4%'),color:'#1F3454'}} > Verb 3rd :</Text>
                    </View>

                    <View style={{justifyContent:'center',borderColor:Colors.LightGrey,borderWidth:1,borderRadius:5,height:hp('5%')}} >

                    <TextInput
                    underlineColorAndroid='transparent'
                    autoFocus={true}
                    style={{paddingLeft:7,padding:0,flex:1,fontSize:wp('4%'),color:Colors.DarkGrey}}
                    placeholder='Enter Third Form of Verb'          
                    value={obj.state.customGoalName}	
                    error={obj.state.error}
                    // onChangeText={(text) =>obj.setState({customGoalName:text},()=>{ obj.state.customGoalName == ""?obj.setState({errorColor:Colors.Red,error:true}):obj.setState({errorColor:Colors.DarkGrey,error:false})})}
                    />
                    </View>

                </View>
                
                <View style={{paddingTop:wp('2%')}} >

                    <View style={{justifyContent:'flex-start',paddingBottom:5}}>
                        <Text style={{fontSize:wp('4%'),color:'#1F3454'}} > Verb 4th :</Text>
                    </View>

                    <View style={{justifyContent:'center',borderColor:Colors.LightGrey,borderWidth:1,borderRadius:5,height:hp('5%')}} >

                    <TextInput
                        underlineColorAndroid='transparent'
                        autoFocus={true}
                        style={{paddingLeft:7,padding:0,flex:1,fontSize:wp('4%'),color:Colors.DarkGrey}}
                        placeholder='Enter Verb+Ing Form'          
                        value={obj.state.customGoalName}	
                        error={obj.state.error}
                        // onChangeText={(text) =>obj.setState({customGoalName:text},()=>{ obj.state.customGoalName == ""?obj.setState({errorColor:Colors.Red,error:true}):obj.setState({errorColor:Colors.DarkGrey,error:false})})}
                    />
                    </View>
                    
                </View>

                <View style={{paddingTop:wp('2%')}} >

                    <View style={{justifyContent:'flex-start',paddingBottom:5}}>
                        <Text style={{fontSize:wp('4%'),color:'#1F3454'}} > Verb 5th :</Text>
                    </View>

                    <View style={{justifyContent:'center',borderColor:Colors.LightGrey,borderWidth:1,borderRadius:5,height:hp('5%')}} >

                    <TextInput
                        underlineColorAndroid='transparent'
                        autoFocus={true}
                        style={{paddingLeft:7,padding:0,flex:1,fontSize:wp('4%'),color:Colors.DarkGrey}}
                        placeholder='Enter Verb+s/es Form'          
                        value={obj.state.customGoalName}	
                        error={obj.state.error}
                        // onChangeText={(text) =>obj.setState({customGoalName:text},()=>{ obj.state.customGoalName == ""?obj.setState({errorColor:Colors.Red,error:true}):obj.setState({errorColor:Colors.DarkGrey,error:false})})}
                    />
                    </View>
                    
                </View>

                <View style={{paddingTop:wp('2%')}} >

                    <View style={{justifyContent:'flex-start',paddingBottom:5}}>
                        <Text style={{fontSize:wp('4%'),color:'#1F3454'}} > Meaning :</Text>
                    </View>

                    <View style={{justifyContent:'center',borderColor:Colors.LightGrey,borderWidth:1,borderRadius:5,height:hp('5%')}} >

                    <TextInput
                        underlineColorAndroid='transparent'
                        autoFocus={true}
                        style={{paddingLeft:7,padding:0,flex:1,fontSize:wp('4%'),color:Colors.DarkGrey}}
                        placeholder='क्रिया(Verb) का अर्थ दर्ज करें'          
                        value={obj.state.customGoalName}	
                        error={obj.state.error}
                        // onChangeText={(text) =>obj.setState({customGoalName:text},()=>{ obj.state.customGoalName == ""?obj.setState({errorColor:Colors.Red,error:true}):obj.setState({errorColor:Colors.DarkGrey,error:false})})}
                    />
                    </View>

                    </View>

                </View>

                <View style={{flex:0.2,marginTop:wp('10%'),flexDirection:'row',justifyContent:'space-around'}}>

                    <View style={{flex:0.47}}>
                        <TouchableOpacity onPress={() => this.setState({isVisible:false})}
                            style={{backgroundColor:Colors.BackGround,
                                borderWidth:wp('0.2%'),borderRadius:15,elevation:5,
                                borderColor:'#E53631',
                                shadowColor:'#000',height:wp('13%'),
                                shadowOffset:{width:0, height:1},
                                shadowOpacity:0.8,
                                shadowRadius:1}}>
                            <Text style={{color:'#E53631',padding:10,paddingLeft:30,paddingRight:30,
                                fontSize:wp('5%'),fontWeight:'700',alignSelf:'center'}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex:0.43}}>
                        <TouchableOpacity 
                            style={{backgroundColor:Colors.BackGround,
                                borderWidth:wp('0.2%'),borderRadius:15,elevation:5,
                                borderColor:'#1B4633',
                                shadowColor:'#000',height:wp('13%'),
                                shadowOffset:{width:0, height:1},
                                shadowOpacity:0.8,
                                shadowRadius:1}}>
                            <Text style={{color:'#1B4633',padding:10,paddingLeft:30,paddingRight:30,
                                fontSize:wp('5%'),fontWeight:'700',alignSelf:'center'}}>Save</Text>
                        </TouchableOpacity>
                    </View>

                </View>

        </View>
        </KeyboardAwareScrollView>

    </Modal>
            
            
    </ScrollView>
        );
    }
}

const mapStateToProps = state =>{
    return {
       ...state
    }
  }
  
  module.exports = connect(mapStateToProps,{addNewVerb})(Verb);