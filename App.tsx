import { Box, Container, Heading, Text } from '@chakra-ui/react';

function App() {
  return (
    <Container maxW="lg" py={10}>
      <Box textAlign="center" mb={8}>
        <Heading as="h1" size="xl" mb={2}>
          Budgeting Tool
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Calculate your recommended monthly expenses based on your income and customize your budget.
        </Text>
      </Box>
      {/* Budgeting form and logic will go here */}
      <Box p={6} borderWidth={1} borderRadius="lg" bg="white" boxShadow="md">
        <Text color="gray.500" textAlign="center">
          Budgeting form coming soon...
        </Text>
      </Box>
    </Container>
  );
}

export default App; 