import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

import image from "../images/profile.jpeg"; // Main logo image
import LeetCodeIcon from '../images/leetcode.jpg'; // Replace with actual image path
import GFGIcon from '../images/gfg.webp'; // Replace with actual image path
import CodeChefIcon from '../images/codechef.png'; // Replace with actual image path
import HackerRankIcon from '../images/hackerrank.png'; // Replace with actual image path
import CodingNinjasIcon from '../images/codingninjas.jpeg'; // Replace with actual image path
import AtCoderIcon from '../images/atcoder.png'; // Replace with actual image path
import CodeforcesIcon from '../images/codeforces.jpg'; // Replace with actual image path

const codingProfiles = [
  {
    platform: "GFG",
    link: "https://www.geeksforgeeks.org/user/jrevanth/",
    problemsSolved: "1200+",
    maxRating: "1892",
    title: "Campus Ambassador",
    achievements: "Institute 1st rank",
    logo: GFGIcon, // Main logo image
  },
  {
    platform: "Coding Ninjas",
    link: "https://www.naukri.com/code360/profile/revanthKumarJ",
    problemsSolved: "900+",
    maxRating: "2525",
    achievements: "Overall score college Topper badge",
    logo: CodingNinjasIcon,
    
  },
  {
    platform: "HackerRank",
    link: "https://www.hackerrank.com/profile/jrevanth101",
    problemsSolved: "500+",
    achievements: "5-star badge in Java, Problem Solving, Python",
    logo: HackerRankIcon,
    
  },
  {
    platform: "LeetCode",
    link: "https://leetcode.com/u/RevanthKumarJ/",
    problemsSolved: "800+",
    maxRating: "1872",
    title: "Knight badge holder",
    logo: LeetCodeIcon
  },
  {
    platform: "Code Forces",
    link: "https://www.hackerrank.com/profile/jrevanth101",
    problemsSolved: "50+",
    logo: CodeforcesIcon, 
  },
  {
    platform: "CodeChef",
    link: "https://www.codechef.com/users/revanthkumarj1",
    problemsSolved: "800+",
    maxRating: "1547",
    logo: CodeChefIcon,
   
  }
];

const CodingProfile = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: 'black', color: 'white' }}>
  <Typography variant="h3" align="center" gutterBottom>
    Coding Profiles
  </Typography>
  <Box
    display="flex"
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
    gap={2} // Space between cards
  >
    {codingProfiles.map((profile, index) => (
      <Box key={index} flexBasis={{ xs: '100%', sm: '48%', md: '30%' }}>
        <Card style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '1rem' }}>
          <CardContent style={{ display: 'flex', alignItems: 'center' }}>
            {/* Images on the left */}
            <img
              src={profile.logo}
              alt={profile.platform}
              style={{ width: '70px', height: '70px', marginBottom: '5px', padding: '10px' }} // Increased size and added padding
            />
            {/* Text on the right */}
            <Box style={{ paddingLeft: '10px' }}> {/* Added padding to the text box */}
              <Typography variant="h5" gutterBottom>{profile.platform}</Typography>
              <Typography>Problems Solved: {profile.problemsSolved}</Typography>
              {profile.maxRating && <Typography>Max Rating: {profile.maxRating}</Typography>}
              {profile.title && <Typography>Title: {profile.title}</Typography>}
              {profile.achievements && (
                <Typography>Achievements: {profile.achievements}</Typography>
              )}
            </Box>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}> {/* Center buttons */}
            <Button size="small" color="primary" href={profile.link} target="_blank" rel="noopener noreferrer">
              View Profile
            </Button>
          </CardActions>
        </Card>
      </Box>
    ))}
  </Box>
</div>

  );
};

export default CodingProfile;
