import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionsCreators from "./actions/index";
function MainPage(props) {
    useEffect(() => {
        props.loadRepoData();
    }, []);
    return <div></div>;
}

const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps, actionsCreators)(MainPage);
