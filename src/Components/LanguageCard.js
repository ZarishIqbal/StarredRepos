import { Container, Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../Styles/LanguageCard.css";
function LanguageCard(props) {
  const [watchers, setWatchers] = useState(0);

  useEffect(() => {
    props.data.repos.map((item) => {
      setWatchers(watchers + item.watchers_count);
    });
  }, []);

  return (
    <Container maxWidth="md" className="outerContainer">
      <Box component="h2" className="container">
        {props.lang}
      </Box>
      <Box className="container">
        <p className="innerContainer"> {`Popularity: ${watchers}`}</p>

        <p className="innerContainer"> {`Repos: ${props.data.repos.length}`}</p>
      </Box>
    </Container>
  );
}

export default LanguageCard;
