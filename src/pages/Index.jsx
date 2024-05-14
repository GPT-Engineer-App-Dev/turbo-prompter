import { useState } from "react";
import { Container, VStack, Textarea, Button, Text, Box } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSendPrompt = async () => {
    // Simulating a response from GPT-3.5 Turbo
    // In a real application, you would make an API call here
    const simulatedResponse = `Response to: "${prompt}"`;
    setResponse(simulatedResponse);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">GPT-3.5 Turbo Prompt App</Text>
        <Textarea placeholder="Enter your prompt here..." value={prompt} onChange={handleInputChange} size="lg" />
        <Button leftIcon={<FaRocket />} colorScheme="teal" onClick={handleSendPrompt} size="lg">
          Send Prompt
        </Button>
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
          <Text fontSize="md">Response:</Text>
          <Text mt={2}>{response}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
