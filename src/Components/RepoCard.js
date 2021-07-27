import { Box } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";
import "../Styles/LanguageCard.css";
function RepoCard(props) {
    console.log(props);
    const { data } = props;
    return (
        <Container maxWidth="md" style={styles.container}>
            <img src={data.owner.avatar_url} style={styles.image} />
            <Box>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <Box className="container">
                    <p className="innerContainer"> {`Stars: ${data.stargazers_count}`}</p>

                    <p className="innerContainer"> {`Developer: ${data.owner.login}`}</p>
                </Box>
            </Box>
        </Container>
    );
}
const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        margin: 10,
        alignItems: "center",
    },
    image: { marginRight: 15, height: 100, width: 100 }
}
export default RepoCard;
