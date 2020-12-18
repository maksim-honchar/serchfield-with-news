import { useEffect } from "react";
import "./App.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/store";
import { addNews } from "./app/newsSlice";
import Container from "@material-ui/core/Container";

import SearchField from "./components/SearchField";
import FavoriteNews from "./components/FavoriteNews";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNews = () => (dispatch: AppDispatch) => {
      fetch("/test-url/search.json")
        .then((response) => response.json())
        .then((result) => dispatch(addNews(result.list)));
    };
    dispatch(fetchNews());
  }, []);

  return (
    <Container>
      <SearchField />
      <FavoriteNews />
    </Container>
  );
}
