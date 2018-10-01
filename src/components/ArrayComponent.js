import React, { Fragment } from 'react';
import '../App.css';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
const ComponentArray = props => {
    let counter = Math.random().toString(36).substring(7);
    return <Fragment>
      <li>
        <input className="checkcheck" type="checkbox" id={"cb-" + counter} />
        <label className="labelCheck" for={"cb-" + counter}>
          <span>
        <TextField
            id="outlined-uncontrolled"
            label="Key"
            defaultValue={props.k}
            onBlur={(e)=>props.changeKey(e, props.m ,props.k)}
            margin="normal"
            variant="outlined"
            style={{marginLeft:10}}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Type"
            value={Array.isArray(props.data)?"array":typeof props.data}
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
        <Button 
          style={{margin:"15px 0px 0px 10px"}} 
          onClick={()=>props.addRow(props.data)} 
          variant="fab">
            <AddIcon />
          </Button>
        <Button 
          style={{margin:"15px 0px 0px 10px"}} 
          onClick={()=>props.deleteRow(props.m, props.data, props.k)} 
          variant="fab">
            <DeleteIcon />
        </Button>
          </span>
        </label>
          <ul>
          {props.data.map((r, i) => Object.keys(r).map((k) =>{
        return <li className="liNotObject">
          <TextField
            id="outlined-uncontrolled"
            label="Key"
            defaultValue={k}
            onBlur={(e)=>props.changeKey(e, r, k)}
            margin="normal"
            variant="outlined"
            style={{marginLeft:10}}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Type"
            value={typeof r[k]}
            onChange={(e)=>props.handleChange(e, r, k)}
            margin="normal"
            variant="outlined"
            style={{marginLeft:10}}
          >
            {props.arrayTypes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-uncontrolled"
            label="Value"
            defaultValue={r[k]}
            onChange={(e)=>props.changeValue(e, r, k)}
            value={r[k]}
            margin="normal"
            variant="outlined"
            style={{marginLeft:10}}
          />
        <Button 
          style={{margin:"15px 0px 0px 10px"}} 
          onClick={()=>props.deleteRow(props.data, r, i)} 
          variant="fab">
            <DeleteIcon />
          </Button>
          </li>
        }))}
          </ul>
      </li>
          </Fragment>
  }
  export default ComponentArray
