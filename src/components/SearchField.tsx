import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedData, addFavorites, addNews } from "../app/newsSlice";

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

export interface INews {
  id: string;
  name: string;
  avatar: string;
  author: { firstName: string; lastname: string; avatar: string };
}

export default function SearchField() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const news = useSelector(selectedData);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newInputValue: string
  ) => {
    const filterNews = news.filter(
      (element: INews) => element.name === newInputValue
    );

    const clearedList = news.filter(
      (element: INews) => element.name !== newInputValue
    );

    dispatch(addFavorites(filterNews));
    dispatch(addNews(clearedList));
  };

  return (
    <Autocomplete
      id="news-select"
      style={{ width: 300 }}
      options={news}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      onInputChange={handleChange}
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
