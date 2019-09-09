import React, { Component } from 'react';
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux';

//Auth
import Welcome from './screens/auth/welcome';

//Verb
import Verb from './screens/verb/verb';

//Header
import VerbHeader from './components/Header/header';

class Routes extends Component {
    render() {

        return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene initial type={'reset'} key="auth">
            
                    <Scene
                    initial
                    key="welcome"
                    hideNavBar
                    type="reset"
                    component={Welcome}
                    title="Welcome"
                    />

                </Scene>
                    
                <Scene key="headSection" title="Head" navBar={()=><VerbHeader/> }> 

                    <Tabs>    
                    <Scene
                    initial
                    key="verb"
                    hideNavBar
                    hideTabBar
                    component={Verb}
                    title="Verb School"
                    />
                    </Tabs>
  
                </Scene>
            </Stack>
        </Router>
        );
    }
}

module.exports = Routes;