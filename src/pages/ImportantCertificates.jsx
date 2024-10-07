
import React from 'react';
import { Box } from '@mui/material';
import CertificateCard from '../components/CertficateCard'; // Fixed import path
import CoreJava from '../images/CoreJava.jpg';
import PythonForEveryBody from '../images/PythonForEveryBody.jpg'; 

function ImportantCertificates() {
    const sampleCertificates = [
        {
            image: CoreJava,
            name: 'Core java Specialization',
            issuedBy: 'LearnQuest through Coursera',
            issuedOn: 'Feb 2024',
            verifyLink: 'https://coursera.org/verify/specialization/Q5RFAZVJ7DMZ' // Add a link for verification
        },
        {
            image: PythonForEveryBody, // Use your actual certificate image path
            name: 'Python for Everybody Specialization',
            issuedBy: 'University of Michigan through Coursera',
            issuedOn: 'March 2024',
            verifyLink: 'https://coursera.org/verify/specialization/2KAXELVS3VQF' // Add a link for verification
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

export default ImportantCertificates;
