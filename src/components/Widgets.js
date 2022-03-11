import React from "react";
// styles
import styled from "styled-components";
import {
    TwitterTimelineEmbed,
    TwitterFollowButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
    return (
        <WidgetContainer>
            <WidgetInput>
                <SearchIcon className='search-icon' />
                <input type='text' placeholder='Search Twitter' />
            </WidgetInput>
            <Widget>
                <h2>Whats Happening</h2>
                <TwitterTweetEmbed tweetId='1445409346305892353' />
                <TwitterTimelineEmbed
                    options={{
                        height: 400,
                    }}
                    screenName='fvckimba'
                    sourceType='profile'
                />
                <TwitterFollowButton screenName='fvckimba' />
            </Widget>
        </WidgetContainer>
    );
}
const WidgetContainer = styled.div`
    /* border: 1px solid #7c7a7a; */
    flex: 0.3;
`;

const WidgetInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff5d73;
    padding: 10px;
    border-radius: 30px;
    margin-top: 10px;
    margin-left: 20px;
    input {
        border: none;
        outline: none;
        background: #ff5d73;
        &::placeholder {
            color: #ffffff;
        }
    }
    .search-icon {
        color: #ffffff;
    }
`;

const Widget = styled.div`
    border: 1px solid #ff5d73;
    margin-top: 15px;
    margin-left: 15px;
    background: #fff;
    padding: 20px;
    border-radius: 20px;
    h2 {
        color: #ff5d73;
        text-align: center;
    }
`;

export default Widgets;
