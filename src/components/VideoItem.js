import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => (
  <Grid item xs={12} style={{ paddingBottom: "20px", paddingTop: "20px" }}>
    <Paper
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        paddingBottom: "20px",
      }}
      onClick={() => onVideoSelect(video)}
    >
      <img
        style={{ marginRight: "20px" }}
        alt="thumbnail"
        src={video.snippet.thumbnails.medium.url}
      />
      <Typography variant="subtitle1">
        <b>{video.snippet.title}</b>
      </Typography>
    </Paper>
  </Grid>
);

export default VideoItem;
