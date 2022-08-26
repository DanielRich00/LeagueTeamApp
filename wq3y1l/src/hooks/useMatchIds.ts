import axios from "axios";
import React, { useState } from "react";

export function useMatchIds(summonerId: string | undefined) {
  const [matchIds, setMatchIds] = useState([]);

  React.useEffect(() => {
    if (!summonerId) return;
    axios
      .get(
        `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerId}/ids?start=0&count=20&api_key=RGAPI-1ef14124-71b9-41c5-b5bb-a8563ffa939c`
      )
      .then((response) => setMatchIds(response.data));
  }, [summonerId]);

  return (matchIds ?? []) as string[];
}
