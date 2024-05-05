import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilters } from '../../slice/filterSlice';
const Filter = () => {
    console.log('filter component loading')
    const filter = useSelector(state => state.filter);
    console.log('filter', filter);
    const dispatch = useDispatch();
    function handleChange(event){
         dispatch(updateFilters({
            name: event.target.name,
            value: event.target.value,
         }));
    }
  return (
      <>
      <div >
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-role">Roles</InputLabel>
      <Select
        
        id="demo-select-role"
        //value={filter[roles] ? filter.roles : ''}
         value=''
        label="Roles"
        onChange={handleChange}
        name='roles'
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'frontend'}>Frontend Developer</MenuItem>
        <MenuItem value={'ios'}>IOS Developer</MenuItem>
        <MenuItem value={'tech lead'}>Tech Lead</MenuItem>
        <MenuItem value={'backend'}>Backend Developer</MenuItem>
        <MenuItem value={'android'}>Android Developer</MenuItem>
      </Select>
    </FormControl>

    <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
      <InputLabel id="demo-select-small-employee">Number of Employees</InputLabel>
      <Select
        
        id="demo-select-employee"
        //value={filter.numOfEmployee ? filter.numOfEmployee : ''}
        value=''
        label="number of employees"
        onChange={handleChange}
        name='numOfEmployee'
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>

      
    </FormControl>

    <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
      <InputLabel id="demo-select-small-experience">Experience</InputLabel>
      <Select
        
        id="demo-select-experience"
        //value={filter.numOfEmployee ? filter.numOfEmployee : ''}
        value=''
        label="experience"
        onChange={handleChange}
        name='experience'
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={3}>Minimum 3</MenuItem>
        <MenuItem value={2}>Minimum 2</MenuItem>
        <MenuItem value={5}>Minimum 5</MenuItem>
        <MenuItem value={1}>Minimum 1</MenuItem>
      </Select>
    </FormControl>

    <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
      <InputLabel id="demo-select-small-location">Location</InputLabel>
      <Select
        
        id="demo-select-location"
        //value={filter.numOfEmployee ? filter.numOfEmployee : ''}
        value=''
        label="location"
        onChange={handleChange}
        name='location'
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"remote"}>Remote</MenuItem>
        <MenuItem value={"chennai"}>Chennai</MenuItem>
        <MenuItem value={"delhi"}>Delhi</MenuItem>
        <MenuItem value={"delhi ncr"}>Delhi NCR</MenuItem>
      </Select>
    </FormControl>

    <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
      <InputLabel id="demo-select-small-salary">Minimum Base Pay Salary</InputLabel>
      <Select
        
        id="demo-select-salary"
        //value={filter.numOfEmployee ? filter.numOfEmployee : ''}
        value=''
        label="minimum base pay salary"
        onChange={handleChange}
        name='salary'
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={3}>3 LPA</MenuItem>
        <MenuItem value={2}>2 LPA</MenuItem>
        <MenuItem value={5}>5 LPA</MenuItem>
        <MenuItem value={1}>1 LPA</MenuItem>
      </Select>
    </FormControl>
     
    </div>

    
      </>
  )
}

export default Filter