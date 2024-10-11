
import React from 'react';
import { Box } from '@mui/material';
import InternShipCard from '../components/InternShipCard'; // Fixed import path
import CoreJava from '../images/CoreJava.jpg';
import intenship1 from '../images/gfg_internship.png'; 

function Internships() {
    const sampleCertificates = [
        {
            image: intenship1,
            internshipName: 'Campus Ambassador',
            companyName: 'Geeks For Geeks',
            duration: 'One year',
            description: 'https://coursera.org/verify/specialization/Q5RFAZVJ7DMZ' // Add a link for verification
        }
        // Add more sample certificates here
    ];

    return (

        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
            }}
        >
            {sampleCertificates.map((cert, index) => (
                <Box key={index} sx={{ margin: '10px', flex: '1 0 calc(33.33% - 20px)' }}> {/* Responsive box for each card */}
                <InternShipCard
                image={cert.image}
                internshipName={cert.internshipName}
                companyName={cert.companyName}
                duration={cert.duration}
                description={cert.description}

                />
                </Box>
            ))}
        </Box>
    );
}

export default Internships;
