import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectedData } from "./newsSlice";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

interface INews {
  id: string;
  name: string;
  avatar: string;
  author: { firstName: string; lastname: string; avatar: string };
}

export default function SearchField() {
  // const [countries, setCountries] = useState<INews[]>([]);
  const news = useSelector(selectedData);
  const classes = useStyles();

  console.log(news);
  return (
    <Autocomplete
      id="news-select"
      style={{ width: 300 }}
      options={news}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option: INews) => option.name}
      renderOption={(option) => (
        <React.Fragment>
          <div>{option.name}</div>
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a news"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
}
