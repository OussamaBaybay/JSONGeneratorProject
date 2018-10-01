import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import ComponentBolean from './components/BoleanComponent'
import ComponentString from './components/StringComponent'
import ComponentArray from './components/ArrayComponent'
import ComponentObject from './components/ObjectComponent'
import ComponentNumber from './components/NumberComponent'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //get data from localstorage
      mockData: JSON.parse(localStorage.getItem('mockData'))
                ?JSON.parse(localStorage.getItem('mockData'))
                :{},
      types: [
        {
          value: "object",
          label: "object"
        },
        {
          value: "array",
          label: "array"
        },
        {
          value: "string",
          label: "string"
        },
        {
          value: "boolean",
          label: "boolean"
        },
        {
          value: "number",
          label: "number"
        }
      ],
      arrayTypes: [
        {
          value: "string",
          label: "string"
        },
        {
          value: "boolean",
          label: "boolean"
        },
        {
          value: "number",
          label: "number"
        }
      ]

    };

  }

  addRow = (m) => {
    //this function takes object or array as a parameter and add an emty proprty with it value
    if (Array.isArray(m)) { // test if is an array
      m.push({"": ""});
    } else {
      m[""] = "";
    }
    //refresh state
    let mockData = this.state.mockData;
    this.setState({
      mockData
    });
    localStorage.setItem('mockData',JSON.stringify(mockData)); //store it in localstorage
  }
  changeKey = (e, m, key) => {
    
    if (key != e.target.value) {//test the old key with the new key
      m[e.target.value] = m[key];
      delete m[key]; //delete the old key and replace it with the new key
    }
    //refresh state
    let mockData = this.state.mockData;
    this.setState({
      mockData
    });
    localStorage.setItem('mockData',JSON.stringify(mockData));//store it in localstorage
  }
  changeValue = (e, m, key) => {
    m[key] = e.target.value;
    //refresh state
    let mockData = this.state.mockData;
    this.setState({
      mockData
    });
    localStorage.setItem('mockData',JSON.stringify(mockData));//store it in localstorage
  }
  handleChange = (e, m, key) => {
    if (e.target.value == "number") {
        m[key] = 0;
    }else if (e.target.value == "string") {
        m[key] = '';
    }else if (e.target.value == "boolean") {
        m[key] = true;
    }else if (e.target.value == "object") {
        m[key] = {};
    }else if (e.target.value == "array") {
        m[key] = [];
    }
    //refresh state
    let mockData = this.state.mockData;
    this.setState({
      mockData
    });
    localStorage.setItem('mockData',JSON.stringify(mockData));//store it in localstorage
  }
  deleteRow = (m, data, key) => {
    if (Array.isArray(m)) {
      let array = m;
      array.splice(key, 1);

    } else {
      delete m[key];
    }
    //refresh state
    let mockData = this.state.mockData;
    this.setState({
      mockData
    });
    localStorage.setItem('mockData',JSON.stringify(mockData));//store it in localstorage
  }

  switchFunc = (m, data, key)=>{
    switch(typeof data){
      case "boolean":
        return <ComponentBolean
                m={m}
                changeValue={(e,m,value)=>this.changeValue(e, m, value)}
                changeKey={(e,m,key)=>this.changeKey(e,m,key)} data={data}
                k={key}
                deleteRow={(m, d, k)=>{this.deleteRow(m, d, k)}}
                types={this.state.types}
                handleChange={(e, m, value)=>this.handleChange(e, m, value)}

                />
      case "string":
        return <ComponentString
                m={m}
                changeValue={(e,m,value)=>this.changeValue(e, m, value)}
                changeKey={(e,m,key)=>this.changeKey(e,m,key)}
                data={data}
                k={key}
                deleteRow={(m, d, k)=>this.deleteRow(m, d, k)}
                types={this.state.types}
                handleChange={(e, m, value)=>this.handleChange(e, m, value)}

                />;
      case "object":
        if (Array.isArray(data)){
          return <ComponentArray
                  m={m}
                  changeValue={(e,m,value)=>this.changeValue(e, m, value)}
                  changeKey={(e,m,key)=>this.changeKey(e,m,key)}
                  data={data} k={key}
                  addRow={(m)=>this.addRow(m)}
                  deleteRow={(m, d, k)=>this.deleteRow(m, d, k)}
                  types={this.state.types}
                  arrayTypes={this.state.arrayTypes}
                  handleChange={(e, m, value)=>this.handleChange(e, m, value)}
                  />;
      }else {
        return <ComponentObject
                m={m}
                changeKey={(e,m,key)=>this.changeKey(e,m,key)}
                addRow={(m)=>this.addRow(m)}
                deleteRow={(m, d, k)=>this.deleteRow(m, d, k)}
                switchFunc={(m, data, k)=>this.switchFunc(m, data, k)}
                data={data}
                k={key}
                types={this.state.types}
                handleChange={(e, m, value)=>this.handleChange(e, m, value)}
                />;
      }
      case "number":
        return <ComponentNumber
                m={m} changeValue={(e,m,value)=>this.changeValue(e, m, value)}
                changeKey={(e,m,key)=>this.changeKey(e,m,key)}
                data={data}
                k={key}
                deleteRow={(m, d, k)=>{this.deleteRow(m, d, k)}}
                types={this.state.types}
                handleChange={(e, m, value)=>this.handleChange(e, m, value)}
                />;
    }
  }

  render() {
    return <div className="App">
    <AppBar position="static">
        <Toolbar>
          <Tooltip title="Add">
            <IconButton color="inherit" aria-label="Menu" onClick={()=>this.addRow(this.state.mockData)}>
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="title" color="inherit">
            Json Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <div class="treeview hover">
      <ul>
        {Object.keys(this.state.mockData).map((r, i) => {
          return <li>{this.switchFunc(this.state.mockData, this.state.mockData[r], r)}</li>})}
      </ul>
      </div>
      </div>;
  }
}

export default App;
