import React, { useState } from "react";
// styles
import styled from "styled-components";
// Mui Component
import { Avatar, Button } from "@material-ui/core";

// firebase database
import db from "../firebase";
import { collection, addDoc } from "@firebase/firestore";

function Tweetbox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const tweetTextSubmit = (e) => {
        const target = e.target.value;
        setTweetMessage(target);
    };

    const tweetImageSubmit = (e) => {
        const target = e.target.value;
        setTweetImage(target);
    };

    const tweetSendSubmit = (e) => {
        e.preventDefault();
        const colRef = collection(db, "posts");
        async function sendTweet() {
            const data = await addDoc(colRef, {
                displayName: "legend",
                username: "gudimba",
                verified: true,
                text: { tweetMessage },
                image: { tweetImage },
                avatar: "https://images.unsplash.com/photo-1645894096014-51dddfdd027a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
            });
            console.log(data);
            return data;
        }
        sendTweet();
        setTweetImage("");
        setTweetMessage("");
    };

    return (
        <TweetBox>
            <form>
                <TweetInput>
                    <Avatar src='https://images.unsplash.com/photo-1645894096014-51dddfdd027a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80' />
                    <input
                        onChange={tweetTextSubmit}
                        value={tweetMessage || ""}
                        type='text'
                        placeholder='What is poppin?'
                    />
                </TweetInput>
                <input
                    className='input-image'
                    onChange={tweetImageSubmit}
                    value={tweetImage || ""}
                    type='text'
                    placeholder='Optional: Enter image URL'
                />
                <Button
                    className='sidebar-btn'
                    fullWidth={true}
                    variant='outlined'
                    onClick={tweetSendSubmit}
                >
                    Tweet
                </Button>
            </form>
        </TweetBox>
    );
}

const TweetBox = styled.div`
    /* border: 1px solid #e64; */
    border-bottom: 1px solid #7c7a7a;
    padding-bottom: 20px;
    form {
        display: flex;
        flex-direction: column;
    }

    .input-image {
        /* border: 1px solid #e64; */
        border: 0.5px solid #7c7a7a;

        padding: 20px;
        width: 100%;
        outline: none;
    }

    .sidebar-btn {
        background: #000 !important;
        width: 80px !important;
        font-weight: 900 !important;
        border: none !important;
        color: #ffffff !important;
        border-radius: 30px !important;
        font-weight: 900 !important;
        margin-top: 20px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        height: 50px !important;
        text-transform: inherit !important;
    }
    .sidebar-btn:hover {
        background: #ff5d73;
        border-radius: 30px;
        color: #fff;
        /* opacity: 0.6; */
    }
`;

const TweetInput = styled.div`
    /* border: 1px solid #e64; */
    display: flex;
    padding: 15px;

    input {
        display: flex;
        width: 100%;
        margin-left: 20px;
        border: none;
        outline: none;
    }
`;

export default Tweetbox;
