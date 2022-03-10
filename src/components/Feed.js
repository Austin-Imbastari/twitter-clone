import React from "react";
//Styles
import styled from "styled-components";
// components
import Tweetbox from "./Tweetbox";
import Post from "./Post";

function Feed() {
    return (
        <FeedContainer>
            <FeedHeader>
                <h2>Home</h2>
            </FeedHeader>
            <Tweetbox />
            <Post />
            <Post />
        </FeedContainer>
    );
}

const FeedContainer = styled.div`
    /* border: 5px solid black; */
    flex: 0.4;
    height: 100vh;
    border-right: 1px solid #7c7a7a;
    min-width: fit-content;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const FeedHeader = styled.div`
    /* border: 5px solid black; */
    border-bottom: 1px solid #7c7a7a;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 6969;
    border-bottom: 1px solid #7c7a7a;
    padding: 15px 20px;

    h2 {
        font-size: 20px;
        font-weight: 800;
    }
`;

export default Feed;
