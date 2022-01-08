import './App.css';
import React from 'react';
import {BrowserRouter as Router,
        Routes,
        Route,
        Navigate } from 'react-router-dom';
import {connect} from 'react-redux';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndOut from './pages/sign-in-sign-up/sign-in-sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
 
  unsubscribeFromAuth = null
 
  componentDidMount(){

    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        })
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/shop' element={<ShopPage />}/>
          <Route exact path='/signin' 
            element ={ this.props.currentUser ? (
              <Navigate to ='/'/>
              ) : (
              <SignInAndOut/>
              )} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
