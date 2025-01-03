import { useEffect, useState } from "react";
import { getAllWines } from "../../api/api-calls/wineApiCalls";
import { Wines } from "../../api/api-interfaces/wine";

export default function WineScreen() {
  useEffect(() => {
    const fetchData = async () => {};
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <div>
        <p>Wines</p>
      </div>
    </>
  );
}
