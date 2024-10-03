import { IconType } from "react-icons";

import {
  FiCompass,
  FiHome,
  FiSettings,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import { MyHousesStore, myHouseStore } from "@frontend/store/myHouse";
import { NavItem } from "@frontend/components/NavItem";
import {
  Box,
  Button,
  ListItem,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Stack,
  List,
  ListIcon,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useHouseUserHousesQuery } from "@frontend/graphql";
import { AddIcon, LinkIcon } from "@chakra-ui/icons";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Nástěnka", icon: FiHome, href: "/dashboard" },
  { name: "Sousedé", icon: FiTrendingUp, href: "/dashboardss" },
  { name: "Katastr", icon: FiCompass, href: "/dashboard" },
  { name: "Události", icon: FiStar, href: "/dashboard" },
  { name: "Ankety", icon: FiSettings, href: "/dashboard" },
  { name: "Náš dům", icon: FiStar, href: "/detail" },
  { name: "Externí kontakty", icon: FiStar, href: "/dashboard" },
  { name: "Dokumenty", icon: FiStar, href: "/dashboard" },
  { name: "Fotogalerie", icon: FiStar, href: "/dashboard" },
  { name: "Závady a havárie", icon: FiStar, href: "/dashboard" },
  { name: "Online hlasování", icon: FiStar, href: "/dashboard" },
  { name: "Insolvence a exekuce", icon: FiStar, href: "/dashboard" },
  { name: "Právní poradna SVJ", icon: FiStar, href: "/dashboard" },
  { name: "Nastavení", icon: FiStar, href: "/dashboard" },
];

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

function SideBarMenu() {
  const { data: userHouses } = useHouseUserHousesQuery();
  const navigate = useNavigate();
  const selectedHouse = myHouseStore(
    (state: MyHousesStore) => state.selectedHouse,
  );
  const setHouse = myHouseStore((state: MyHousesStore) => state.setHouse);
  const getHouse = myHouseStore((state: MyHousesStore) => state.getHouse);

  useEffect(() => {
    if (!getHouse() && userHouses?.houseUserHouses) {
      if (userHouses?.houseUserHouses?.length > 0) {
        setHouse(userHouses?.houseUserHouses?.[0]?.id);
      }
    }
  }, [setHouse, userHouses?.houseUserHouses, getHouse]);

  const initRef = useRef(null);

  const handleClick = (id: string) => {
    setHouse(id);
    navigate("/moje-domy/" + id + "/dashboard");
  };

  return (
    <div>
      <Stack spacing={3} padding={4}>
        <Popover placement="left" initialFocusRef={initRef}>
          {({ isOpen, onClose }) => (
            <>
              <PopoverTrigger>
                <Button>Vyber svůj dům</Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverHeader>
                    <Stack direction="row" spacing={4}>
                      <Button
                        leftIcon={<AddIcon />}
                        colorScheme="teal"
                        variant="solid"
                      >
                        <Link to="/moje-domy/vyhledat"> Přidat dům </Link>
                      </Button>
                    </Stack>
                  </PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Box>
                      <List styleType="none" m={0} p={4}>
                        {userHouses?.houseUserHouses.map((link) => {
                          const href = "/moje-domy/" + link.id + "/dashboard";

                          return (
                            <ListItem
                              key={link.id}
                              mb={2}
                              _hover={{
                                color: "teal.500",
                              }}
                            >
                              <Link
                                onClick={() => handleClick(link.id)}
                                to={href}
                              >
                                <ListIcon as={LinkIcon} color="green.500" />
                                {link.name}
                              </Link>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </>
          )}
        </Popover>
      </Stack>
      <div> {getHouse()}</div> 
      {LinkItems.map((link) => {
        const href = "/moje-domy/" + selectedHouse + link.href;
        return (
          <NavItem key={link.name} href={href} icon={link.icon}>
            {link.name}
          </NavItem>
        );
      })}
    </div>
  );
}

export default SideBarMenu;
