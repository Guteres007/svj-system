import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  VStack,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  AvatarBadge,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import {
  MdInfo,
  MdLocationOn,
  MdMoreVert,
  MdPeople,
  MdPersonAdd,
} from "react-icons/md";
import { useHouseDetailQuery } from "@frontend/graphql";
import { useParams } from "react-router-dom";

function MyHousesDetailPage() {
  const params = useParams();
  const { data } = useHouseDetailQuery({
    variables: {
      id: params?.houseId || "",
    },
  });

  const house = data?.houseDetail;
  const boardMembers = [
    { name: "Jan Novák", role: "Předseda" },
    { name: "Marie Svobodová", role: "Místopředseda" },
  ];
  const controlBodyMembers = [
    { name: "Petr Černý", role: "Člen kontrolní komise" },
  ];
  const administrators = [
    { name: "Andráši Martin", role: "Administrátor", isCurrentUser: true },
  ];

  const renderMembersList = (members) => (
    <VStack align="stretch" spacing={3}>
      {members.map((member, index) => (
        <Flex key={index} justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Avatar name={member.name} size="sm" bg="blue.500">
              {member.isCurrentUser && (
                <AvatarBadge boxSize="1.25em" bg="green.500" />
              )}
            </Avatar>
            <Box ml="3">
              <Text fontWeight="bold">
                {member.name}
                {member.isCurrentUser && " (já)"}
              </Text>
              <Text fontSize="sm">{member.role}</Text>
            </Box>
          </Flex>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<MdMoreVert />}
              variant="ghost"
              size="md"
            />
            <MenuList>
              <MenuItem>Upravit</MenuItem>
              <MenuItem>Odebrat</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ))}
    </VStack>
  );

  return (
    <Box maxWidth="900px" margin="auto" padding={4}>
      <VStack spacing={4}>
        {/* Card s detaily SVJ */}
        <Card width="100%">
          <CardHeader>
            <Flex alignItems="center">
              <Heading size="md">{house?.name}</Heading>
            </Flex>
          </CardHeader>
          <CardBody>
            <VStack align="stretch" spacing={3}>
              <Flex alignItems="center">
                <Box as={MdInfo} size="20px" color="blue.500" mr={2} />
                <Text>
                  <strong>Typ:</strong> Společenství vlastníků
                </Text>
              </Flex>
              <Divider />
              <Flex alignItems="center">
                <Box as={MdLocationOn} size="20px" color="blue.500" mr={2} />
                <Text fontWeight="bold">Adresy jednotek:</Text>
              </Flex>
              <Text pl={6}>{house?.fullAddress}</Text>
              <Divider />
              <Flex alignItems="center">
                <Box as={MdPeople} size="20px" color="blue.500" mr={2} />
                <Text>
                  <strong>Celkový počet bytových jednotek:</strong>{" "}
                  {house?.numberOfUnits || "N/A"}
                </Text>
              </Flex>
            </VStack>
          </CardBody>
        </Card>

        {/* Card s výborem */}
        <Card width="100%" mt="8">
          <CardHeader>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading size="md">Výbor</Heading>
              <Button leftIcon={<MdPersonAdd />} colorScheme="green" size="sm">
                Přidat
              </Button>
            </Flex>
          </CardHeader>
          <CardBody>
            {boardMembers.length > 0 ? (
              renderMembersList(boardMembers)
            ) : (
              <Text>Žádní členové výboru</Text>
            )}
          </CardBody>
        </Card>

        {/* Card pro Kontrolní orgán */}
        <Card width="100%" mt="8">
          <CardHeader>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading size="md">Kontrolní orgán</Heading>
              <Button leftIcon={<MdPersonAdd />} colorScheme="green" size="sm">
                Přidat
              </Button>
            </Flex>
          </CardHeader>
          <CardBody>
            {controlBodyMembers.length > 0 ? (
              renderMembersList(controlBodyMembers)
            ) : (
              <Text>Žádní členové kontrolního orgánu</Text>
            )}
          </CardBody>
        </Card>

        {/* Card pro Administrátory */}
        <Card width="100%" mt="8">
          <CardHeader>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading size="md">Administrátoři</Heading>
              <Button leftIcon={<MdPersonAdd />} colorScheme="green" size="sm">
                Přidat
              </Button>
            </Flex>
          </CardHeader>
          <CardBody>{renderMembersList(administrators)}</CardBody>
        </Card>
      </VStack>
    </Box>
  );
}

export default MyHousesDetailPage;
