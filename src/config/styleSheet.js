import {StyleSheet,Platform,Dimensions} from 'react-native';
import Colors from '../config/color';

var {height, width} = Dimensions.get('window');


const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor: Colors.BackGround
    },
    cardContainer:{
        flex:1, 
        backgroundColor:Colors.White, 
    },
    headerContainer:{
        margin:0,
        marginBottom:0,
        height:70,
    },
    sidebarContainer:{
        flex:1,
        backgroundColor: Colors.Blue,
        paddingTop: Platform.OS == 'ios' ? 40 : 15
    },
    sidebarIcon:{
        color:Colors.White,
        paddingLeft:15,
        alignSelf:'center',
        fontSize:25
    },
    sidebarText:{
        margin: 10,
        marginTop:6,
        paddingLeft: 10,
        fontSize: 15,
        textAlign: 'left',
        color: Colors.White,
        width:width-width/4,
    },
    tabBar: {
        width:'100%',
        height: 50,
        borderTopColor:Colors.White,
        borderRadius:0.7*width,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
    topTabBar: {
        width:'100%',
        height: 50,
        borderBottomColor:Colors.White,
      },
    navigation: {
        backgroundColor: Colors.Blue,
        height: Platform.OS === 'ios' ? 60 : 60,
        borderBottomColor:Colors.Blue,
        },
    title: {
        color: Colors.DarkGrey,
        fontSize: 18,
        alignSelf: 'flex-start',
        textAlign:'center',
        marginTop:Platform.OS==='ios'? 18:16
    },
    searchBar: {
        borderRadius:5,borderWidth:1,
        borderColor:Colors.White,
        height:Platform.OS =='ios' ? 40 : 40,
        // left:60, right: 0,top:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Colors.White
    },
    searchBarInput: {
      flex: 83,
      fontWeight: 'normal',
      color: Colors.Black,
      backgroundColor: Colors.White,
    },
    appleSwitch: {
        marginTop: 7,
        marginBottom: 7,
      },

      rightSwipeItem: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20
      },

})


module.exports=styles;