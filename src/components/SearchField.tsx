import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedData, addFavorites, addNews } from "../app/newsSlice";
import SeacrhCard from "./SearchCard";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

export interface INews {
  id: string;
  name: string;
  avatar: string;
  author: { firstName: string; lastName: string; avatar: string };
}

export default function SearchField() {
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

  console.log(news);
  return (
    <Autocomplete
      id="news-select"
      style={{ maxWidth: 600 }}
      options={news}
      autoHighlight
      onInputChange={handleChange}
      getOptionLabel={(option: INews) => option.name}
      renderOption={(option) => (
        <React.Fragment>
          <div>
            <SeacrhCard
              name={option.name}
              avatar={option.avatar}
              authorAvatar={option.author.avatar}
              authorFirstName={option.author.firstName}
              authorLastName={option.author.lastName}
            />
          </div>
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
