import React, { Fragment } from 'react';
import '../App.css';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const ComponentObject = props =>{
    let counter = Math.random().toString(36).substring(7);
    return <Fragment>
      <li>
        <input className="checkcheck"  type="checkbox" id={"cb-" + counter} />
        <label className="labelCheck" for={"cb-" + counter}>
        <span>
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
          <Button style={{margin:"15px 0px 0px 10px"}} onClick={()=>props.addRow(props.data)} variant="fab">
            <AddIcon />
          </Button>
          <Button style={{margin:"15px 0px 0px 10px"}} onClick={()=>props.deleteRow(props.m, props.data, props.k)} variant="fab">
            <DeleteIcon />
          </Button>

          </span>
          </label>
      <ul>{Object.keys(props.data).map((r, i) => {
        return props.switchFunc(props.data , props.data[r], r)
      })}</ul>
      </li>
        </Fragment>
  }
export default ComponentObject;
