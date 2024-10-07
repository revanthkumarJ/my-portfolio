import React from "react";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";

const Achievements = () => {
  const achievementsList = [
    "LeetCode Knight Badge holder with a contest rating of 1865.",
    "GFG Institute 1st Rank with 1200+ problems solved.",
    "Aadhya 2023 conducted by CSE Department RGUKT RKV - Quiz second prize.",
    "HHO Coding Contest 2022 - First Prize.",
    "Qualified NMMS in 8th class.",
  ];

  return (
    <Box marginTop={4}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "'Roboto Slab', serif", // Change font style for the heading
          fontWeight: 'bold',
        }}
      >
        Achievements
      </Typography>
      <List style={{  paddingLeft: "2rem" }}>
        {achievementsList.map((achievement, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={achievement}
              primaryTypographyProps={{
                style: {
                  fontFamily: "'Open Sans', sans-serif", // Custom font for list items
                  fontSize: "1.3rem",
                  letterSpacing: "0.5px",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Achievements;
