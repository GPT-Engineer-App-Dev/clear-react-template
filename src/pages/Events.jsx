import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase/index.js";

const Events = () => {
  const { data: events, error, isLoading } = useEvents();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

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
          {events.map((event) => (
            <Box key={event.id} p={4} borderWidth="1px" borderRadius="md" w="100%">
              <Text fontSize="xl" fontWeight="bold">{event.name}</Text>
              <Text>Date: {event.date}</Text>
              <Text>Description: {event.description}</Text>
              <Text>Venue ID: {event.venue_id}</Text>
              <Text>Pinned: {event.is_pinned ? "Yes" : "No"}</Text>
              <Text>Starred: {event.is_starred ? "Yes" : "No"}</Text>
              <Text>Type: {event.type}</Text>
              <Text>Cancelled: {event.cancelled ? "Yes" : "No"}</Text>
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