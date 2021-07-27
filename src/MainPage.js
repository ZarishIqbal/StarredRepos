import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import LanguageCard from "./Components/LanguageCard";
import * as actionsCreators from "./actions/index";
import InfiniteScroll from "react-infinite-scroller";
function MainPage(props) {
  const [keys, setKeys] = useState([]);
  const [languages, setLanguages] = useState();
  useEffect(() => {
    props.loadRepoData(1);
  }, []);
  useEffect(() => {
    setLanguages(props.languages);
    setKeys(Array.from(props.languages.keys()));
  }, [props.languages]);

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.loadRepoData}
      hasMore={props.hasMore}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      {languages &&
        keys.map((item) => {
          const languageData = languages.get(item) ?? null;
          return <LanguageCard data={languageData} lang={item} />;
        })}
    </InfiniteScroll>
  );
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, actionsCreators)(MainPage);
