import React, { useEffect, useState } from "react";
// styles
import styled from "styled-components";
// components
import Tweetbox from "./Tweetbox";
import Post from "./Post";
// uuid
import { v4 as uuidv4 } from "uuid";
// firebase
import db from "../firebase";
import { collection, getDocs } from "@firebase/firestore";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const colRef = collection(db, "posts");
        getDocs(colRef).then((snapshot) => {
            setPosts(snapshot.docs.map((doc) => doc.data()));
        });
        // async function fetchData() {
        //     const data = await getDocs(colRef);
        //     const request = data.docs.forEach((doc) => {
        //         setPosts([doc.data()]);
        //     });
        //     return request;
        // }
        // fetchData();
    }, []);

    console.log(posts);
    return (
        <FeedContainer>
            <FeedHeader>
                <h2>Home</h2>
            </FeedHeader>
            <Tweetbox />
            {posts.map((post) => (
                <div key={uuidv4()}>
                    <Post
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                </div>
            ))}
        </FeedContainer>
    );
}

const FeedContainer = styled.div`
    /* border: 5px solid black; */
    flex: 0.4;

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
