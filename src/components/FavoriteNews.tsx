import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectedFavorites } from "../app/newsSlice";
import { INews } from "./SearchField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SearchCard, { ISearchedCardProps } from "./SearchCard";

export default function FavoriteNews() {
  const favorites = useSelector(selectedFavorites);

  const favoritesList = favorites.map((news: INews) => (
    <SearchCard
      key={news.id}
      name={news.name}
      avatar={news.avatar}
      authorAvatar={news.author.avatar}
      authorFirstName={news.author.firstName}
      authorLastName={news.author.lastName}
    />
  ));

  return (
    <div className="wrapper">
      <Typography color="textSecondary" variant="h5">
        favorites
      </Typography>
      <div className="wrapper-favorites">{favoritesList}</div>
    </div>
  );
}
