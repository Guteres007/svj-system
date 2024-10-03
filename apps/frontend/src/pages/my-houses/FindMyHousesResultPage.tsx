import { Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useHouseSearchResultQuery } from "@frontend/graphql";

// BUDU POTřebovat UserHouses tabulku pro zjištění kdo má jaký už dům a mohl podle toho udělat logiku
//
// Pokud nebude House v seznamu užvatele, tak může požádat o přístup
// Pokud existuje, tak přesměruji na dashboard domu
// Co je potřeba udělat je to, že musíme ověřovat uživatele administrátorem
//

// useHouseRequestCreate( variables: { houseId: id, userId: userId })

export default function FindMyHousesResultPage() {
  const params = useParams();

  const { data } = useHouseSearchResultQuery({
    variables: {
      id: params.searchId || "",
    },
  });

  return (
    <div>
      {data?.houseSearchResult.user.id} {data?.houseSearchResult.house.name}
      <Button colorScheme="blue" onClick={() => alert("Požádání o přístup")}>
        Požádat o přístup : {data?.houseSearchResult.house.name}
      </Button>
    </div>
  );
}
