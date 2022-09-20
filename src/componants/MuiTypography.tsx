import React from "react";
import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1"> h1 Heading</Typography>
      <Typography variant="h2"> h2 Heading</Typography>
      <Typography variant="h3"> h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        {" "}
        h4 Heading{" "}
      </Typography>
      <Typography variant="h5"> h5 Heading</Typography>
      <Typography variant="h6"> h6 Heading</Typography>
      <Typography variant="subtitle1"> subtitle1 </Typography>
      <Typography variant="subtitle2"> subtitle2 </Typography>

      <Typography variant="body1">
        {" "}
        I have been feeling okay these days and I know the real reason why I
        feel this way, I am growing and learning. I am contributing at my work
        while i am helping to my family and I feel good about myself .
        Alhamdulillah
      </Typography>
      <Typography variant="body2">
        {" "}
        I have been feeling okay these days and I know the real reason why I
        feel this way, I am growing and learning. I am contributing at my work
        while i am helping to my family and I feel good about myself .
        Alhamdulillah{" "}
      </Typography>
    </div>
  );
};
