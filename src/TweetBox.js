import React, { useState } from "react";
import "./TweetBox.css";
import axios from "axios";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = async () => {
    console.log(tweetMessage);
    const response = await axios
      .post("/contents", {
        userId: 1,
        contents: tweetMessage,
      })
      .catch((e) => console.log(response));
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <button onClick={sendTweet} type="submit" className="tweetBoxBtn">
          {" "}
          Tweet
        </button>
      </form>
    </div>
  );
}

export default TweetBox;
