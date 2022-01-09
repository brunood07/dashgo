import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Bruno Domingues</Text>
          <Text color="gray.300" fontSize="small">brunood07@gmail.com</Text>
        </Box>

      )}
      <Avatar size="md" name="Bruno Domingues" src="https://github.com/brunood07.png"/>
    </Flex>
  );
}