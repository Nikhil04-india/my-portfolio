
import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  //For the right arrow, use the below component. The necessary imports are already provided for you as well. <FontAwesomeIcon icon={faArrowRight} size="1x" /> 
  
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageSrc} alt={title} />

      <VStack p={6} align="start" spacing={4}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack spacing={2}>
          <Text>Read More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;

