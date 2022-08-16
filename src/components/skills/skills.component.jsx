import React from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';
import SkillTag from '../skill-tag/skill-tag.component';

const tags = [
  { name: 'HTML', colorScheme: 'red'},
  { name: 'CSS', colorScheme: 'blue'},
  { name: 'JavaScript', colorScheme: 'green' },
  { name: 'ReactJS', colorScheme: 'purple' },
  { name: 'Bootstrap', colorScheme: 'gray' },
  { name: 'Material UI', colorScheme: 'telegram' },
  { name: 'MySQL', colorScheme: 'whatsapp' },
  { name: 'NodeJS', colorScheme: 'orange' },
  { name: 'ExpressJs', colorScheme: 'gray' },
  { name: 'MongoDB', colorScheme: 'yellow' },
  { name: 'Mongoose', colorScheme: 'linkedin' },
  { name: 'Github', colorScheme: 'pink' },
  { name: 'Netlify', colorScheme: 'cyan' },
  { name: 'Heroku', colorScheme: 'teal' },
  { name: 'npm', colorScheme: 'gray' },
  
];

const Skills = () => {
  return (
    <Box p={4}>
      <Text fontSize="lg" fontWeight="bold">
        Skills:
      </Text>
      <br />

      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(6, 1fr)',
        }}
        gap={3}
      >
        {tags.map((tag) => (
          <SkillTag
            key={tag.name}
            tag={tag.name}
            colorScheme={tag.colorScheme}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;