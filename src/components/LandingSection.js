import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Nikhil!";
const bio1 = "A full-stack developer";
const bio2 = "specialised in React";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
         src="https://t.ly/w9Xi-" 
         size="2xl" 
         name="Your Name" 
       /> 
       <Heading as="h1" size="lg" noOfLines={1}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="2xl" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="2xl" noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 
  </FullScreenSection>
);

export default LandingSection;
