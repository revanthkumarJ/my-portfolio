
import React from 'react';
import { Box } from '@mui/material';
import CertificateCard from '../components/CertficateCard'; // Fixed import path
import GFG_Summer from '../images/GFG_SummerTraining.png';
import GFG_Manipur from '../images/GFG_IIITMANIPUR.png'; 
import FlipkartGrid from '../images/FlipkartGrid.png'; 

function EventCertificates() {
    const sampleCertificates = [
        {
            image: GFG_Summer,
            name: 'Summer Training Program by GeeksforGeeks',
            issuedBy: 'GeeksforGeeks',
            issuedOn: 'Sep 2024',
            verifyLink: 'https://media.geeksforgeeks.org/certificates/1725557145/8f83cecbb5dee4751ad74ee5d1867446.pdf' // Add a link for verification
        },
        {
            image: GFG_Manipur, // Use your actual certificate image path
            name: 'CodeSprint Challenge by IIIT Manipur organized by GeeksforGeeks',
            issuedBy: 'GeeksforGeeks',
            issuedOn: 'June 2024',
            verifyLink: 'https://media.geeksforgeeks.org/certificates/1718614324/2b75e4b1b118583bad59e270c63576d3.pdf' // Add a link for verification
        },
        {
            image: FlipkartGrid, // Use your actual certificate image path
            name: 'Certificate of Participation in Flipkart Grid 6.0',
            issuedBy: 'Unstop',
            issuedOn: '2024',
            verifyLink: 'https://unstop.com/certificate-preview/3dccf736-f35c-4f02-a869-a6309cb92f14' // Add a link for verification
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
                    <CertificateCard
                        image={cert.image}
                        name={cert.name}
                        issuedBy={cert.issuedBy}
                        issuedOn={cert.issuedOn}
                        verifyLink={cert.verifyLink} // Pass verify link to CertificateCard
                    />
                </Box>
            ))}
        </Box>
    );
}

export default EventCertificates;
