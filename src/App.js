import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  state = { advice:''};

  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    const id= Math.floor(Math.random() * 100) - 1
    axios.get(`https://api.adviceslip.com/advice/${id}`)
      .then((response) => {
        const data = JSON.parse(response.data + "}")
        const { advice } = data.slip;
        
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render(){
    const {advice} = this.state;
    return(
      <div className="app">
        <div className="card">
          <h2 className="heading">{advice}</h2>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE !!</span>
          </button>
        </div>
      </div>
    );
  }
}
export default App;