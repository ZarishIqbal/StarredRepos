import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";
import * as actionsCreators from "./actions/index";
import RepoCard from "./Components/RepoCard";

function SecondPage(props) {
  //main repositories data
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    //loading repositories
    props.loadRepoData(1, true);
  }, []);

  useEffect(() => {
    setRepos(props.repoData);
  }, [props]);

  //function for pagination
  const loadData = (page) => {
    console.log(page);
    props.loadRepoData(page, true);
    setRepos(props.repoData);
  };
  return (
    <InfiniteScroll
      pageStart={1}
      loadMore={loadData}
      hasMore={props.hasMore}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      {repos &&
        repos.map((item, index) => {
          return <RepoCard key={index} data={item} />;
        })}
    </InfiniteScroll>
  );
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, actionsCreators)(SecondPage);
