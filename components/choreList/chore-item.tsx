import { Button, Heading, HStack, IconButton, Text } from "@chakra-ui/react";
import * as React from "react";
import { useState, useEffect } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

const ChoreItem = () => {
  return (
    <HStack>
      <Heading as="h3">Chore Item</Heading>
      <IconButton
        colorScheme={"red"}
        icon={<FiTrash />}
        isRound={true}
        onClick={() => {}}
        aria-label="Delete"
      />
    </HStack>
  );
};

export default ChoreItem;
