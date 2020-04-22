import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@material-ui/core";

const VideoList = ({ videos, onVideoSelect }) => (
  <>
    {videos.map((video, index) => (
      <Grid container spacing={8}>
        <div key={`${index}`}>
          <VideoItem video={video} onVideoSelect={onVideoSelect} />
        </div>
      </Grid>
    ))}
  </>
);

export default VideoList;
