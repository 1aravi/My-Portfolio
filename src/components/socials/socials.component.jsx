import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

import SociaLink from '../social-link/social-link.component';

import {
  FaLinkedin,
  FaGithubSquare,
} from 'react-icons/fa';

const socialsInfo = [
  {
    name: 'github',
    socialUrl: 'https://github.com/1aravi',
    svgIcon: FaGithubSquare,
    color: 'black',
  },
  {
    name: 'linkedin',
    socialUrl: 'https://www.linkedin.com/in/vasamsetti-sai-aravind-ab49b8248/',
    svgIcon: FaLinkedin,
    color: 'linkedin',
  },
  
 ];

const Socials = () => {
  return (
    <Box p={4}>
      <Text fontSize="lg" fontWeight="bold">
        <h1>Contact:</h1>
      Email: aravindvasamsetti@gmail.com<br/>
      Phone: 8790519721<br/><br/>
        Click below to see my Github and Linkedin profiles:
      </Text>

      <br />
      <Flex maxW="120px" justify="space-between">
        {socialsInfo.map((socialInfo) => (
          <SociaLink
            key={socialInfo.name}
            color={socialInfo.color}
            socialUrl={socialInfo.socialUrl}
            svgIcon={socialInfo.svgIcon}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Socials;