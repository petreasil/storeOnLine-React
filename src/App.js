import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignOutPage from "./pages/sign-in-adn-sign-up/sign-in-and-sign-up.component";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      currentUserEmail: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user, currentUserEmail: user.email });
      console.log(user.email);
      console.log(this.state.currentUserEmail);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          currentUserEmail={this.state.currentUserEmail}
        ></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndSignOutPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
