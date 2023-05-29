import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import {makeStyles} from '@mui/styles';
import React from 'react'

const useStyles = makeStyles({
  select: {
    "&:after": {
      borderBottomColor: "darkred",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
});

function SelectSortingOption() {
  const [sort, setSort] = React.useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label" sx={{
          color: 'white',
        }}>Сортувати</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          className={classes.select}
          value={sort}
          onChange={handleChange}
          label="Sort"
          sx={{
              color: 'white',
          }}
        >
          <MenuItem value={10}>За спаданням</MenuItem>
          <MenuItem value={20}>За зростанням</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectSortingOption