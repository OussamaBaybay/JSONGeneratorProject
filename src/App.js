import React, { Component } from 'react';
import './App.css';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const ComponentObject = props =>{
  let counter = Math.random().toString(36).substring(7);
  return <React.Fragment>
    <li>
      <input className="checkcheck"  type="checkbox" id={"cb-" + counter} />
      <label className="labelCheck" for={"cb-" + counter}>
      <span>
      <TextField
          id="outlined-uncontrolled"
          label="Key"
          defaultValue={props.k}
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <TextField
          id="outlined-uncontrolled"
          label="type"
          defaultValue = "Object"
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <Button style={{margin:"15px 0px 0px 10px"}} variant="fab">
          <DeleteIcon />
        </Button>
        </span>
        </label>
    <ul>{Object.keys(props.data).map((r, i) => {
      return switchFunc(props.data[r], r)
    })}</ul>
    </li>
      </React.Fragment>
}

const types = [
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
    value: "bolean",
    label: "bolean"
  },
  {
    value: "number",
    label: "number"
  }
];

const ComponentString = props => {
  return <li className="liNotObject">
    <TextField
          id="outlined-uncontrolled"
          label="Key"
          defaultValue={props.k}
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <TextField
          id="outlined-uncontrolled"
          label="type"
          defaultValue ={typeof props.data}
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <TextField
          id="outlined-uncontrolled"
          label="value"
          defaultValue ={props.data}
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <Button style={{margin:"15px 0px 0px 10px"}} variant="fab">
          <DeleteIcon />
        </Button>
  </li>;
}
const ComponentNumber = props => {
  return <li className="liNotObject">
      <TextField
          id="outlined-uncontrolled"
          label="Key"
          defaultValue={props.k}
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <TextField
          id="outlined-uncontrolled"
          label="type"
          defaultValue ={typeof props.data}
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <TextField
          id="outlined-uncontrolled"
          label="value"
          defaultValue ={props.data}
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <Button style={{margin:"15px 0px 0px 10px"}} variant="fab">
          <DeleteIcon />
        </Button>
        {/* just a test */}
        {/* <TextField
          id="outlined-select-currency"
          select
          label="Select"
           value={this.state.type}
           onChange={this.handleChange('currency')}
          margin="normal"
          variant="outlined"
        >
          {types.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
        { /* just a test */ }
        </li>;
}
const ComponentArray = props => {
  let counter = Math.random().toString(36).substring(7);
  return <React.Fragment>
    <li>
      <input className="checkcheck" type="checkbox" id={"cb-" + counter} />
      <label className="labelCheck" for={"cb-" + counter}>
        <span>
      <TextField
          id="outlined-uncontrolled"
          label="Key"
          defaultValue={props.k}
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <TextField
          id="outlined-uncontrolled"
          label="type"
          defaultValue = "Array"
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <Button style={{margin:"15px 0px 0px 10px"}} variant="fab">
          <DeleteIcon />
        </Button>
        </span>
      </label>
        <ul>
        {props.data.map((r) => Object.keys(r).map((k) =>{
      return <li className="liNotObject">
        <TextField
          id="outlined-uncontrolled"
          label="Key"
          defaultValue={k}
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <TextField
          id="outlined-uncontrolled"
          label="type"
          defaultValue={typeof r[k]}
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Value"
          defaultValue={r[k]}
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <Button style={{margin:"15px 0px 0px 10px"}} variant="fab">
          <DeleteIcon />
        </Button>
        </li>
      }))}
        </ul>
    </li>
        </React.Fragment>
}
const ComponentBolean = props => {
  return <li className="liNotObject">
        <TextField
          id="outlined-uncontrolled"
          label="Key"
          defaultValue={props.k}
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <TextField
          id="outlined-uncontrolled"
          label="type"
          defaultValue ={typeof props.data}
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <TextField
          id="outlined-uncontrolled"
          label="value"
          defaultValue ={props.data}
          margin="normal"
          variant="outlined"
          style={{marginLeft:10}}
        />
        <Button style={{margin:"15px 0px 0px 10px"}} variant="fab">
          <DeleteIcon />
        </Button>
        </li>;
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
    <AppBar position="static">
        <Toolbar>
          <Tooltip title="Add">
            <IconButton color="inherit" aria-label="Menu">
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
        {Object.keys(mockData).map((r, i) => {
          return <li>{switchFunc(mockData[r], r)}</li>})}
      </ul>
      </div>
      </div>;
  }
}

export default App;
