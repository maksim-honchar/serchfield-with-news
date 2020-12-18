import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectedFavorites } from "../app/newsSlice";
import { INews } from "./SearchField";

export default function FavoriteNews() {
  const favorites = useSelector(selectedFavorites);

  const favoritesList = favorites.map((news: INews) => (
    <p key={news.id}>{news.name}</p>
  ));

  console.log(favorites);

  return (
    <Fragment>
      <h2>list</h2>
      {favoritesList}
    </Fragment>
  );
}
