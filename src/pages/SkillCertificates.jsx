
import React from 'react';
import { Box } from '@mui/material';
import CertificateCard from '../components/CertficateCard'; // Fixed import path
import python from '../images/HR_python.png';
import java from '../images/HR_java.png'; 
import ps from '../images/HR_PS.png'; 

function SkillCertificates() {
    const sampleCertificates = [
        {
            image: ps,
            name: 'Problem Solving (Basic)',
            issuedBy: 'HackerRank',
            issuedOn: 'Sep 2023',
            verifyLink: 'https://coursera.org/verify/specialization/Q5RFAZVJ7DMZ' // Add a link for verification
        },
        {
            image: java, // Use your actual certificate image path
            name: 'Java (Basic)',
            issuedBy: 'HackerRank',
            issuedOn: 'Aug 2023',
            verifyLink: 'https://coursera.org/verify/specialization/2KAXELVS3VQF' // Add a link for verification
        },
        {
            image: python, // Use your actual certificate image path
            name: 'Python (Basic)',
            issuedBy: 'HackerRank',
            issuedOn: 'Mar 2023',
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

export default SkillCertificates;
