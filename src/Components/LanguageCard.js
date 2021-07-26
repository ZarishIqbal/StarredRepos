import { Container, Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import React from 'react';
import '../Styles/LanguageCard.css'
function LanguageCard(props) {
    return (
        <Container maxWidth="sm">
            <Box component="h2" className="container">
                language
            </Box>
            <Box className="container">
                <p className="innerContainer"> Popularity: 3</p>

                <p className="innerContainer"> Repos: 20</p>
            </Box>
        </Container>



    );
}

export default LanguageCard;
