import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import LeetCodeIcon from '../images/leetcode.jpg'; // Replace with actual image path
import GFGIcon from '../images/gfg.webp'; // Replace with actual image path
import CodeChefIcon from '../images/codechef.png'; // Replace with actual image path
import HackerRankIcon from '../images/hackerrank.png'; // Replace with actual image path
import CodingNinjasIcon from '../images/codingninjas.jpeg'; // Replace with actual image path
import AtCoderIcon from '../images/atcoder.png'; // Replace with actual image path
import CodeforcesIcon from '../images/codeforces.jpg'; // Replace with actual image path

const codingProfiles = [
  { name: 'LeetCode', image: LeetCodeIcon, url: 'https://leetcode.com/RevanthKumarJ', // Replace with your actual link
  },
  { name: 'GeeksforGeeks', image: GFGIcon, url: 'https://www.geeksforgeeks.org/user-profile/jrevanth', // Replace with your actual link
  },
  { name: 'CodeChef', image: CodeChefIcon, url: 'https://www.codechef.com/users/revanthkumarj1', // Replace with your actual link
  },
  { name: 'HackerRank', image: HackerRankIcon, url: 'https://www.hackerrank.com/jrevanth101', // Replace with your actual link
  },
  { name: 'Coding Ninjas', image: CodingNinjasIcon, url: 'https://www.codingninjas.com/codestudio/profile/revanthKumarJ', // Replace with your actual link
  },
  { name: 'AtCoder', image: AtCoderIcon, url: 'https://atcoder.jp/users/your-username', // Replace with your actual link
  },
  { name: 'Codeforces', image: CodeforcesIcon, url: 'https://codeforces.com/profile/your-username', // Replace with your actual link
  },
];

const CodingProfiles = () => {
  return (
    <Box sx={{ padding: '4rem', color: 'white' }}>
      <Typography variant="h3" sx={{ marginBottom: '2rem', textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
        My Coding Profiles
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem', // Space between icons
        }}
      >
        {codingProfiles.map((profile, index) => (
          <IconButton
            key={index}
            onClick={() => window.open(profile.url, '_blank')} // Open in new tab
            sx={{
              backgroundColor: 'transparent',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <img
              src={profile.image}
              alt={profile.name}
              style={{
                width: '60px', // Adjust the size as needed
                height: '60px', // Adjust the size as needed
              }}
            />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default CodingProfiles;
