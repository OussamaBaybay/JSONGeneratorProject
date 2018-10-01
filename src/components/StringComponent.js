import React from 'react';
import '../App.css';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
const ComponentString = props => {
    return <li className="liNotObject">
      <TextField
            id="outlined-uncontrolled"
            label="Key"
            defaultValue={props.k}
            onBlur={(e)=>props.changeKey(e, props.m, props.k)}
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
            onChange={(e)=>props.changeValue(e, props.m ,props.k)}
            value={props.data}
            margin="normal"
            variant="outlined"
            style={{marginLeft:10}}
          />
        <Button style={{margin:"15px 0px 0px 10px"}} onClick={()=>props.deleteRow(props.m,props.data, props.k)} variant="fab">
            <DeleteIcon />
          </Button>
    </li>;
  }
  export default ComponentString