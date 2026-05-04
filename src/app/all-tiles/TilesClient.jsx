"use client";

import { useState } from "react";
import { Label, SearchField } from "@heroui/react";
import TilesCards from "../component/TilesCards";

const TilesClient = ({ AllTiles }) => {
  const [search, setSearch] = useState("");

  const filteredTiles = AllTiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>

      <div className="max-w-lg mt-4">
        <SearchField>
          <Label>Search</Label>

          <SearchField.Group>
            <SearchField.SearchIcon />

            <SearchField.Input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <SearchField.ClearButton onClick={() => setSearch("")} />
          </SearchField.Group>
        </SearchField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
        {filteredTiles.map((tiles) => (
          <TilesCards key={tiles.id} tiles={tiles} />
        ))}
      </div>
    </>
  );
};

export default TilesClient;