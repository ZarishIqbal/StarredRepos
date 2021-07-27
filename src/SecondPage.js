import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as actionsCreators from "./actions/index";
import RepoCard from "./Components/RepoCard";

function SecondPage(props) {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    props.loadRepoData();
  }, []);
  useEffect(() => {
    setRepos(props.repoData);
  }, [props]);

  return (
    <div>
      {repos &&
        repos.map((item, index) => {
          return <RepoCard key={index} data={item} />;
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, actionsCreators)(SecondPage);
