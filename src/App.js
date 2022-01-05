import './App.css';
import React from 'react';
import {BrowserRouter as Router,
        Routes,
        Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndOut from './pages/sign-in-sign-up/sign-in-sign-up';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: null
    };
  }

  unsubscribeFromAuth = null
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser ={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/shop' element={<ShopPage />}/>
          <Route exact path='/signin' element={<SignInAndOut />}/>
        </Routes>
      </div>
    );
  }
}

export default App;
