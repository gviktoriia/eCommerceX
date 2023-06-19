import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import {makeStyles} from '@mui/styles';
import React, {useContext} from 'react'
import {SortingContext} from './MainPageCatalogue'

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
  const {sorting, setSorting} = useContext(SortingContext)
  //const [sort, setSort] = React.useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    setSorting(event.target.value);
    console.log(sorting)
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
          value={sorting}
          onChange={handleChange}
          label="Sort"
          sx={{
              color: 'white',
          }}
        >
          <MenuItem value={10}>Спочатку дорожчі</MenuItem>
          <MenuItem value={20}>Спочатку дешевші</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectSortingOption