import { Outlet } from "react-router-dom";
import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Header from "@frontend/components/Header";
import SideBar from "@frontend/components/SideBar";
import SideBarMenu from "@frontend/components/SideBarMenu";
export default function AuthTemplate() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SideBar onClose={() => onClose} display={{ base: "none", md: "block" }}>
        {" "}
        <SideBarMenu />
      </SideBar>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SideBar onClose={onClose}>
            {" "}
            <SideBarMenu />
          </SideBar>
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Header onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Outlet />
      </Box>
    </Box>
  );
}
