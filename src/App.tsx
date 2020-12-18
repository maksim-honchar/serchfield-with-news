import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNews } from "./features/search_filed/newsSlice";
import { AppDispatch } from "./app/store";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ProTip from "./ProTip";

import SearchField from "./features/search_filed/SearchField";

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

  return <Container>{<SearchField />}</Container>;
}
