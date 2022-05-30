import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <input placeholder="What's happening?" type="text" />
        </div>
        <button className="tweetBoxBtn"> Tweet</button>
      </form>
    </div>
  );
}

export default TweetBox;
