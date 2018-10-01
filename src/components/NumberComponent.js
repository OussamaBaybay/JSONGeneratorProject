import React from 'react';
import '../App.css';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
const ComponentNumber = props => {
    return <li className="liNotObject">
        <TextField
            id="outlined-uncontrolled"
            label="Key"
            defaultValue={props.k}
            onBlur={(e)=>props.changeKey(e, props.m, props.k)}
            variant="outlined"
            style={{marginLeft:10}}
            margin="normal"
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Type"
            value={typeof props.data}
            onChange={(e)=>props.handleChange(e, props.m, props.k)}
            margin="normal"
            variant="outlined"
            style={{marginLeft:10}}
          >
            {props.types.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-uncontrolled"
            label="value"
            defaultValue ={props.data}
            onChange={(e)=>props.changeValue(e, props.m, props.k)}
            value={props.data}
            margin="normal"
            variant="outlined"
            style={{marginLeft:10}}
          />
        <Button style={{margin:"15px 0px 0px 10px"}} onClick={()=>props.deleteRow(props.m, props.data, props.k)} variant="fab">
            <DeleteIcon />
          </Button>
          </li>;
  }
  export default ComponentNumber
