import React, { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Image,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Typist from "react-typist";



const ProfileCard = () => {
  const [count, setCount] = useState(0);
  const typedTextBgColor = useColorModeValue("#1da1f2", "#edf2f7");
  const typedTextColor = useColorModeValue("#edf2f7", "#1da1f2");

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "2fr 2fr", lg: "1fr 3fr" }}
      mt={10}
      p={4}
      gridColumnGap={10}
      textAlign={{ base: "center", md: "inherit" }}
    >
      <GridItem alignSelf="center">
        <Image src="./images/cropped2.jpg" borderRadius="full" alt="Sai Aravind" />
      </GridItem>
      <GridItem paddingTop="30px" alignSelf="center">
        <Text fontSize="2xl" fontWeight="bold">
          Hello !
        </Text>
        {count ? (
          <Typist
            cursor={{ show: false, hideWhenDone: true }}
            onTypingDone={() => setCount(0)}
          >
            <span
              style={{ fontSize: "24px", fontWeight: "bold", color: "#1da1f2" }}
            >
              I am  {" "}
              <span
                style={{
                  backgroundColor: `${typedTextBgColor}`,
                  padding: "4px",
                  borderRadius: "5px",
                  color: `${typedTextColor}`,
                }}
              >
                Sai Aravind
                <Typist.Backspace count={11} delay={1250} />
                Fullstack Developer
                <Typist.Backspace count={19} delay={1250} />
                Cricket Fan
                <Typist.Backspace count={11} delay={1250} />
               enjoying create things that live on the internet 
              and also love to solve the complex problems.
              </span>
            </span>
          </Typist>
        ) : (
          ""
        )}
        <br />
        <Text fontSize="lg">
          Passionate and creative Full stack developer from{" "}
          <Tag fontSize="lg">Hyderabad, India</Tag>.
        </Text>
        <br />
        <Text fontSize="lg">
          Completed a full stack developer course from {" "}
          <Tag
            as="a"
            fontSize="lg"
            href="https://www.guvi.in/full-stack-development-course-with-javascript-ZenClass?utm_source=GUVI-Website&utm_medium=Homepage-Breadcrumbs&utm_campaign=Full-Stack-Homepage-Breadcrumbs"
            target="_blank"
            rel="noreferrer"
          >
            Guvi IIT Madras
          </Tag>
          an IITM & IIMA Incubated Company.
        </Text>
        
        <br />
        <Text fontSize="lg">
        My
              interest in web development started when i decided to switch my career to Developer
              and i decided to start my journey as a Full-stack
              Developer. I like to work on side projects and constantly try to learn something new to improve my skillset.
        Fast-forward to today, I am looking for a challenging, respectable and responsible work, that can form my personal
              and professional growth and help me contribute effectively to the growth of the company.
        </Text>
      </GridItem>
    </Grid>
  );
};

export default ProfileCard;