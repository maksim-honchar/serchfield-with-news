import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedData, addFavorites, addNews } from "../app/newsSlice";
import SeacrhCard from "./SearchCard";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Typography from "@material-ui/core/Typography";

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

  return (
    <div className="searchField">
      <Typography gutterBottom variant="h2">
        NEWS
      </Typography>
      <Autocomplete
        id="news-select"
        options={news}
        autoHighlight
        onInputChange={handleChange}
        getOptionLabel={(option: INews) => option.name}
        renderOption={(option) => (
          <React.Fragment>
            <SeacrhCard
              name={option.name}
              avatar={option.avatar}
              authorAvatar={option.author.avatar}
              authorFirstName={option.author.firstName}
              authorLastName={option.author.lastName}
            />
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
    </div>
  );
}
