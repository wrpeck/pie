/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { PieFilling, Recipes, Tags } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ActionCard from "./ActionCard";
import { Collection } from "@aws-amplify/ui-react";
export default function ActionCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const recipesItems = useDataStoreBinding({
    type: "collection",
    model: Recipes,
  }).items;
  const tagsItems = useDataStoreBinding({
    type: "collection",
    model: Tags,
  }).items;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: PieFilling,
  }).items.map((item) => ({
    ...item,
    Recipes: recipesItems.filter((model) => model.piefillingID === item.id),
    tags: tagsItems.filter((model) => model.pieFilling === item.id),
  }));
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ActionCardCollection")}
    >
      {(item, index) => (
        <ActionCard
          pieFilling={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ActionCard>
      )}
    </Collection>
  );
}
