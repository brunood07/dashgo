import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Bruno Domingues</Text>
        <Text color="gray.300" fontSize="small">brunood07@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Bruno Domingues" src="https://github.com/brunood07.png"/>
    </Flex>
  );
}