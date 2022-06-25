import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOperateur() {

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const [selected, setSelected] = useState("");

  function handleChange(event) {
    setSelected(event.target.value);
  }

  return (
    <FormControl>
      <InputLabel htmlFor="agent-simple">Agent</InputLabel>
      <Select
        value={selected}
        onChange={handleChange}
        inputProps={{
          name: "agent",
          id: "age-simple"
        }}
      >
        {values.map((e, index=0) => {
          return <MenuItem key={index+1} value={e}>{e}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
  
}
