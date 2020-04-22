import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoList, VideoDetail } from "./components";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    handleSubmit("pdf generation with react and node");
  }, []);
  const handleSubmit = async (query) => {
    const resp = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        q: query,
      },
    });
    setVideos(resp.data.items);
    setVideo(resp.data.items[0]);
  };
  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={video} />
          </Grid>
          <Grid item xs={4}>
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setVideo(video)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
