import React from "react";
import Header from "../components/Header";
import CollectionCard from "../components/CollectionCard";
import { collectionArray } from "../utils/constants";

const Collection = () => {
  return (
    <div>
      <Header />

        <h2 className="text-[120px] font-semibold font-[arial] tracking-tighter px-2">
          Collections
        </h2>
        {collectionArray.map((e) => (
          <CollectionCard data={e} key={e.id} />
        ))}
    </div>
  );
};

export default Collection;
