import React from 'react';
import { Typography, Box } from '@mui/material';
import CertificateCard from '../components/CertficateCard'; // Fixed import path

import metajs from '../images/metaJS.png';

import CoreJava from '../images/CoreJava.jpg';
import learnQuestIntroToJAVA from '../images/learnQuestIntroToJAVA.png';
import learnQuestIntroToOOPS from '../images/learnQuestIntroToOOPS.png';
import learnQuestJavaClass from '../images/learnQuestJavaClass.png';
import LearnQuestOOPSHierarchies from '../images/LearnQuestOOPSHierarchies.png';

import PythonForEveryBody from '../images/PythonForEveryBody.jpg';
import michigan_css from "../images/michigan_css.png"
import michigan_ds from "../images/michigan_ds.png"
import michigan_html from "../images/michigan_html.png"
import michigan_js from "../images/michigan_js.png"
import google_python from "../images/google_python.png"
import ibm1 from "../images/ibm1.png"
import ibm2 from "../images/ibm2.png"

import codechef_LinkedLists from "../images/codechef_LinkedLists.png"
import codechef_Recursion from "../images/codechef_Recursion.png"
import codechef_java_ps_2 from "../images/codechef_java_ps_2.png"
import codechef_TimeComplexity from "../images/codechef_TimeComplexity.png"
import codechef_advanceJava from "../images/codechef_advanceJava.png"
import codechef_cplusplus from "../images/codechef_c++.png"
import codechef_cplusplusps1 from "../images/codechef_c++_ps1.png"
import codechef_c from "../images/codechef_c.png"
import codechef_java from "../images/codechef_java.png"
import codechef_java_ps_1 from "../images/codechef_java_ps_1.png"

function AllCertificates() {
    const sampleCertificates = [
        {
            image: metajs,
            name: 'Programming with JavaScript',
            issuedBy: 'Meta through Coursera',
            issuedOn: 'May 2024',
            verifyLink: 'https://www.coursera.org/verify/HTBYQ9V6PUCW' // Add a link for verification
        },

        {
            image: learnQuestIntroToJAVA,
            name: 'Introduction to  java',
            issuedBy: 'LearnQuest through Coursera',
            issuedOn: 'Jan 2024',
            verifyLink: 'https://coursera.org/verify/KC48C8NKHB6L' // Add a link for verification
        },
        {
            image: learnQuestIntroToOOPS,
            name: 'Introduction to Object-Oriented Programming with Java',
            issuedBy: 'LearnQuest through Coursera',
            issuedOn: 'Feb 2024',
            verifyLink: 'https://coursera.org/verify/WU3YCKHQTSLV' // Add a link for verification
        },
        {
            image: LearnQuestOOPSHierarchies,
            name: 'Object Oriented Hierarchies in java',
            issuedBy: 'LearnQuest through Coursera',
            issuedOn: 'Feb 2024',
            verifyLink: 'https://coursera.org/verify/KWZJQD8549R2' // Add a link for verification
        },
        {
            image: learnQuestJavaClass,
            name: 'Java class Library',
            issuedBy: 'LearnQuest through Coursera',
            issuedOn: 'Feb 2024',
            verifyLink: 'https://coursera.org/verify/7C2JE7E42CJN' // Add a link for verification
        },
        {
            image: CoreJava,
            name: 'Core java Specialization',
            issuedBy: 'LearnQuest through Coursera',
            issuedOn: 'Feb 2024',
            verifyLink: 'https://coursera.org/verify/specialization/Q5RFAZVJ7DMZ' // Add a link for verification
        },


        
        
        
        
        
        
        
        
        
        {
            image: codechef_java, // Use your actual certificate image path
            name: 'Learn Java',
            issuedBy: 'CodeChef',
            issuedOn: 'August 2023',
            verifyLink: 'https://www.codechef.com/certificates/public/92248d9' // Add a link for verification
        },
        {
            image: codechef_advanceJava, // Use your actual certificate image path
            name: 'Learn Advance Java ',
            issuedBy: 'CodeChef',
            issuedOn: 'August 2023',
            verifyLink: 'https://www.codechef.com/certificates/public/8078409' // Add a link for verification
        },
        {
            image: codechef_java_ps_1, // Use your actual certificate image path
            name: 'Java for problem solving 1',
            issuedBy: 'CodeChef',
            issuedOn: 'August 2023',
            verifyLink: 'https://www.codechef.com/certificates/public/839ac72' // Add a link for verification
        },
        {
            image: codechef_java_ps_2, // Use your actual certificate image path
            name: 'Java for problem solving 2',
            issuedBy: 'CodeChef',
            issuedOn: 'August 2023',
            verifyLink: 'https://www.codechef.com/certificates/public/a9e0dda' // Add a link for verification
        },
        {
            image: codechef_LinkedLists, // Use your actual certificate image path
            name: 'Linked Lists',
            issuedBy: 'CodeChef',
            issuedOn: 'April 2024',
            verifyLink: 'https://www.codechef.com/certificates/public/93024b3' // Add a link for verification
        },
        {
            image: codechef_Recursion, // Use your actual certificate image path
            name: 'Recursion',
            issuedBy: 'CodeChef',
            issuedOn: 'April 2024',
            verifyLink: 'https://www.codechef.com/certificates/public/ce8b3fa' // Add a link for verification
        },
        {
            image: codechef_TimeComplexity, // Use your actual certificate image path
            name: 'Time Complexity',
            issuedBy: 'CodeChef',
            issuedOn: 'April 2024',
            verifyLink: 'https://www.codechef.com/certificates/public/fe0349d' // Add a link for verification
        },
        {
            image: codechef_c, // Use your actual certificate image path
            name: 'Learn C',
            issuedBy: 'CodeChef',
            issuedOn: 'August 2023',
            verifyLink: 'https://www.codechef.com/certificates/public/943f442' // Add a link for verification
        },
        
        {
            image: codechef_cplusplus, // Use your actual certificate image path
            name: 'Learn C++',
            issuedBy: 'CodeChef',
            issuedOn: 'August 2023',
            verifyLink: 'https://www.codechef.com/certificates/public/370e027' // Add a link for verification
        },
        {
            image: codechef_cplusplusps1, // Use your actual certificate image path
            name: 'C++ for problem solving 1',
            issuedBy: 'CodeChef',
            issuedOn: 'August 2023',
            verifyLink: 'https://www.codechef.com/certificates/public/c3d7cb4' // Add a link for verification
        },
        


        {
            image: michigan_html,
            name: 'Introduction to HTML 5',
            issuedBy: 'University of Michigan through Coursera',
            issuedOn: 'Feb 2024',
            verifyLink: 'https://coursera.org/verify/UPE7C99B98M6' // Add a link for verification
        },
        {
            image: michigan_css,
            name: 'Introduction to CSS 3',
            issuedBy: 'University of Michigan through Coursera',
            issuedOn: 'March 2024',
            verifyLink: 'https://coursera.org/verify/AGH236663GSQ' // Add a link for verification
        },
        {
            image: michigan_js,
            name: 'Interactivity with javaScript',
            issuedBy: 'University of Michigan through Coursera',
            issuedOn: 'March 2024',
            verifyLink: 'https://coursera.org/verify/3Z742DEZR52P' // Add a link for verification
        },



        {
            image: PythonForEveryBody, // Use your actual certificate image path
            name: 'Python for Everybody Specialization',
            issuedBy: 'University of Michigan through Coursera',
            issuedOn: 'March 2024',
            verifyLink: 'https://coursera.org/verify/specialization/2KAXELVS3VQF' // Add a link for verification
        },
        {
            image: michigan_ds, // Use your actual certificate image path
            name: 'Python Data Structures',
            issuedBy: 'University of Michigan through Coursera',
            issuedOn: 'Jan 2024',
            verifyLink: 'https://coursera.org/verify/WQTD6D7SDSAW' // Add a link for verification
        },
        {
            image: google_python, // Use your actual certificate image path
            name: 'Crash Course on Python',
            issuedBy: 'Google through Coursera',
            issuedOn: 'Jan 2024',
            verifyLink: 'https://coursera.org/verify/WBYJARECXFGU' // Add a link for verification
        },
        {
            image: ibm1, // Use your actual certificate image path
            name: 'Python for Data Science, AI , and Development',
            issuedBy: 'IBM through Coursera',
            issuedOn: 'March 2024',
            verifyLink: 'https://coursera.org/verify/BXVZQYHQN5KH' // Add a link for verification
        },
        {
            image: ibm2, // Use your actual certificate image path
            name: 'Databases and sql for Data Science in python',
            issuedBy: 'IBM through Coursera',
            issuedOn: 'April 2024',
            verifyLink: 'https://coursera.org/verify/N5J7R94G93MZ' // Add a link for verification
        },

        

        
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

export default AllCertificates;
