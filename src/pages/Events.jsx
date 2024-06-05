import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";

const Events = () => {
  // Placeholder events data
  const events = [
    { name: "Event 1", date: "2023-10-01", description: "Description for Event 1" },
    { name: "Event 2", date: "2023-10-15", description: "Description for Event 2" },
    { name: "Event 3", date: "2023-11-05", description: "Description for Event 3" },
  ];

  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold">My Website</Text>
            <Flex>
              <Link href="/" mx={2}>Home</Link>
              <Link href="/events" mx={2}>Events</Link>
              <Link href="#" mx={2}>About</Link>
              <Link href="#" mx={2}>Contact</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">Events</Text>
          {events.map((event, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" w="100%">
              <Text fontSize="xl" fontWeight="bold">{event.name}</Text>
              <Text>{event.date}</Text>
              <Text>{event.description}</Text>
            </Box>
          ))}
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.900" color="white" py={4} mt="auto">
        <Container maxW="container.lg">
          <Text textAlign="center">&copy; 2023 My Website. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Events;