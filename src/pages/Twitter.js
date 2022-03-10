import React from "react";
// Styles
import styled from "styled-components";
// Component
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

function Twitter() {
    return (
        <AppContainer>
            <Sidebar />
            <Feed />
        </AppContainer>
    );
}

const AppContainer = styled.div`
    /* border: 5px solid pink; */
    display: flex;
    min-height: 100vh;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
`;

export default Twitter;
