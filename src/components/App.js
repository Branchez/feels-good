import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      people: {}
    }
  }

  componentDidMount() {
    console.log("Mounted")
    fetch("https://swapi.dev/api/people").
    then(response => response.json()).
    then(data => this.setState({
      people: data
    }))
    const t = this.state.people.results
  }

  // componentWillReceiveProps(props) {

  // }

  static getDerivedStatedFromProps(props, state) {

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    console.log(nextState)
    return true
  }

  // getSnapshotBeforeUpdate() {

  // }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    console.log("Unmounted")
  }

  render () {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
