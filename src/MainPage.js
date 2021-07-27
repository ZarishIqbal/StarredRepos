import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import LanguageCard from "./Components/LanguageCard";
import * as actionsCreators from "./actions/index";
function MainPage(props) {
    const [keys, setKeys] = useState([]);
    const [languages, setLanguages] = useState();
    useEffect(() => {
        props.loadRepoData();

    }, []);
    useEffect(() => {
        setLanguages(props.languages);
        setKeys(Array.from(props.languages.keys()));
    }, [props.languages]);

    return (
        <div>
            {languages && keys.map(item => {
                const languageData = languages.get(item) ?? null;
                return <LanguageCard data={languageData} lang={item} />;
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps, actionsCreators)(MainPage);
