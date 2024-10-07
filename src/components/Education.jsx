import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box } from "@mui/material";

const Education = () => {
  const educationList = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2022 - Present",
      institution: "Rajiv Gandhi University of Knowledge Technologies, RK Valley",
      cgpa: "CGPA: 9.12/10",
    },
    {
      degree: "Pre-University Course (MBiPC)",
      duration: "2020 - 2022",
      institution: "Rajiv Gandhi University of Knowledge Technologies, RK Valley",
      cgpa: "CGPA: 9.88/10",
    },
    {
      degree: "Higher Education",
      duration: "2015 - 2020",
      institution: "AP Model School",
      marks: "Marks: 582/600",
    },
  ];

  return (
    <Box marginTop={4}>
      <Typography variant="h3" align="center" gutterBottom style={{ color: 'white' }}>
        Education
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: 'white' }}><strong>Degree</strong></TableCell>
              <TableCell style={{ color: 'white' }}><strong>Duration</strong></TableCell>
              <TableCell style={{ color: 'white' }}><strong>Institution</strong></TableCell>
              <TableCell style={{ color: 'white' }}><strong>Details</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {educationList.map((edu, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: 'white' }}>{edu.degree}</TableCell>
                <TableCell style={{ color: 'white' }}>{edu.duration}</TableCell>
                <TableCell style={{ color: 'white' }}>{edu.institution}</TableCell>
                <TableCell style={{ color: 'white' }}>{edu.cgpa || edu.marks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Education;
