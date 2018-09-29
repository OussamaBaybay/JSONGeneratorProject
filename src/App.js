import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ComponentObject = props =>{
  let counter = Math.random().toString(36).substring(7);
  return <React.Fragment>
    <li>
      <input type="checkbox" id={"cb-" + counter} />
      <label for={"cb-" + counter}>
          <span>{'key: ' + props.k + '| type: Object'}</span>
        </label>
    <ul>{Object.keys(props.data).map((r, i) => {
      return switchFunc(props.data[r], r)
    })}</ul>
    </li>
      </React.Fragment>
}

const arrayTest = [
  {"name": "moha"},
  {"age": 555}
];

const ComponentString = props => {
  return <li>{'key: ' +props.k + "|  type: " + typeof props.data + '| value: '+ props.data}</li>;
}
const ComponentNumber = props => {
  return <li>{'key: ' +props.k + "|  type: " + typeof props.data + '| value: '+ props.data}</li>;
}
const ComponentArray = props => {
  let counter = Math.random().toString(36).substring(7);
  return <React.Fragment>
    <li>
      <input type="checkbox" id={"cb-" + counter} />
      <label for={"cb-" + counter}>
        <span>{'key: ' + props.k + '| type: Array'}</span>
    </label>
            <ul>{props.data.map((r) => Object.keys(r).map((k) =>{
                return <li>{'key: ' + k + '| type: '+ typeof r[k]+ '| value: '+r[k] }</li>
      }))}</ul></li>
        </React.Fragment>
}
const ComponentBolean = props => {
  return <li>{'key: ' + props.k + "|  type: " + typeof props.data + '| value: '+ props.data}</li>;
}

const switchFunc = (data, key)=>{
  switch(typeof data){
    case "boolean":
      return <ComponentBolean data={data} k={key} />
    case "string":
      return <ComponentString data={data} k={key} />;
    case "object":
      if (Array.isArray(data)){
        return <ComponentArray data={data} k={key} />;
    }else {
      return <ComponentObject data={data} k={key} />;
    }
    case "number":
      return <ComponentNumber data={data} k={key} />;
  }
}

const mockData = {
  "name": "Revenue",
  "id": 13,
  "type": "C",
  "structor": {
    "structorText": "text",
    "bolean": false,
    "substructor": {
      "substructorNumber": 15,
      "sutractor3": {
        "nestedbolean3": true,
      }
    }
  }, "subModules": [{
    "Authorized": false
  }, {
    "id": 13
  }]
}
// const mockData = {
//   "infos": {},
//   "infos2": { "name": "jamal", "age": 33 },
//   "id": 1,
//   "country": "fuckinMorocco",
//   "modules": [{ "xxdf": "wcxwdsf" }, { "number": 123 }],
//   "Authorized": true
// }

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
      <div class="treeview hover">
      <ul>
        {Object.keys(mockData).map((r, i) => {
          return <li>{switchFunc(mockData[r], r)}</li>})}
      </ul>
      </div>
      </div>;
  }
}

export default App;
