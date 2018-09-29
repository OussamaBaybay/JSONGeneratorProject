import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ComponentObject = props =>{


  return Object.keys(props.json).map((r, i) => {
  
  return <li>{r + ' '+ typeof props.json[r]}</li>
});

}
const ComponentString = props => {
  return <li>{props.data + " " + typeof props.data}</li>;
}
const ComponentNumber = props => {
  return <li>{props.data + " " + typeof props.data}</li>;
}
const ComponentArray = props => {
  return <li>{props.mockData}</li>;
}
const ComponentBolean = props => {
  return <li>{props.data + " " + typeof props.data}</li>;
}

const switchFunc = (data)=>{
  switch(typeof data){
    case "boolean":
      return <ComponentBolean data={data} />
    case "string":
      return <ComponentString data={data} />; 
    case "number":
      return <ComponentNumber data={data} />; 
    case "object":
      if (Array.isArray(data)){
        return <ComponentArray data={data} />;  
    }
        return <ComponentObject data={data} />;  
  }
}

const mockData = {
  "info": {},
  "info2": {"name":"ahmed"},
  "id": 1,
  "country": "fuckinMorocco",
  "modules": ["xxdf": {
    "name": "Mitarbeiter",
    "Authorized": true
  }, 'number':123],
  "Authorized": true
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  addRaw = () => {
    let data1 =[];
    
  }

  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input type="button" value="add1" />
      <ul>
        <ComponentObject json={mockData} />
      </ul>
      </div>;
  }
}

export default App;
