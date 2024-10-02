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
import { Select, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  { name: "Náš dům", icon: FiStar, href: "/dashboard" },
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

const userHouses: Array<{ name: string; id: string }> = [
  { name: "1", id: "1" },
  { name: "2", id: "2" },
];

function SideBarMenu() {
  const navigate = useNavigate();
  const selectedHouse = myHouseStore(
    (state: MyHousesStore) => state.selectedHouse,
  );
  const setHouse = myHouseStore((state: MyHousesStore) => state.setHouse);
  const getHouse = myHouseStore((state: MyHousesStore) => state.getHouse);
  useEffect(() => {
    if (!getHouse()) {
      if (userHouses.length > 0) {
        setHouse(userHouses?.[0].id);
      }
    }
  }, [setHouse, getHouse]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHouse(e.target.value);
    navigate("/moje-domy/" + e.target.value + "/dashboard");
  };

  return (
    <div>
      <Stack spacing={3}>
        {selectedHouse ? (
          <Select onChange={(e) => handleSelect(e)} value={selectedHouse}>
            {userHouses.map((link) => (
              <option key={link.id} value={link.id}>
                {link.name}
              </option>
            ))}
          </Select>
        ) : (
          ""
        )}
      </Stack>
      {selectedHouse}
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
