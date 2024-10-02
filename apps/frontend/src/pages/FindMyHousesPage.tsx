import { Button, Input } from "@chakra-ui/react";
import { useHouseSearchSaveSearchMutation } from "@frontend/graphql";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function FindMyHousesPage() {
  const navigate = useNavigate();
  const [saveHouseSearch] = useHouseSearchSaveSearchMutation();
  const [street, setStreet] = useState("");

  const handleClick = () => {
    saveHouseSearch({ variables: { streetName: street } }).then((res) => {
      navigate(
        `/moje-domy/vyhledek-hledani/${res?.data?.houseSearchSaveSearch.id}`,
      );
    });
  };

  return (
    <div>
      <Input
        placeholder="Search for a house"
        onChange={(e) => setStreet(e.target.value)}
      />
      <br />
      <Button onClick={() => handleClick()}>Find</Button>
    </div>
  );
}
