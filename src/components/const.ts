import averageTree from "relatives-tree/samples/average-tree.json";
import couple from "relatives-tree/samples/couple.json";
import diffParents from "relatives-tree/samples/diff-parents.json";
import divorcedParents from "relatives-tree/samples/divorced-parents.json";
import empty from "relatives-tree/samples/empty.json";
import severalSpouses from "relatives-tree/samples/several-spouses.json";
import simpleFamily from "relatives-tree/samples/simple-family.json";
import testTreeN1 from "relatives-tree/samples/test-tree-n1.json";
import testTreeN2 from "relatives-tree/samples/test-tree-n2.json";
import type { Node } from "relatives-tree/lib/types";

export const NODE_WIDTH = 85;
export const NODE_HEIGHT = 95;

const demo = [
  {
    id: "uJK9",
    gender: "male",
    name: "John",
    avatarUrl: "https://randomuser.me/api/portraits/lego/2.jpg",
    parents: [],
    siblings: [],
    spouses: [
      {
        id: "wIFr",
        type: "married",
      },
      {
        id: "aCZW",
        type: "divorced",
      },
    ],
    children: [
      {
        id: "s9HE",
        type: "blood",
      },
    ],
  },
  {
    id: "wIFr",
    gender: "female",
    parents: [],
    siblings: [],
    spouses: [
      {
        id: "uJK9",
        type: "married",
      },
    ],
    children: [],
  },
  {
    id: "aCZW",
    gender: "female",
    parents: [],
    siblings: [],
    spouses: [
      {
        id: "uJK9",
        type: "divorced",
      },
    ],
    children: [
      {
        id: "s9HE",
        type: "blood",
      },
    ],
  },
  {
    id: "s9HE",
    gender: "male",
    parents: [
      {
        id: "uJK9",
        type: "blood",
      },
      {
        id: "aCZW",
        type: "blood",
      },
    ],
    siblings: [],
    spouses: [],
    children: [],
  },
];

export const SOURCES = {
  "average-tree.json": averageTree,
  "couple.json": couple,
  "diff-parents.json": diffParents,
  "divorced-parents.json": divorcedParents,
  "empty.json": empty,
  "several-spouses.json": severalSpouses,
  "simple-family.json": simpleFamily,
  "test-tree-n1.json": testTreeN1,
  "test-tree-n2.json": testTreeN2,
  demo: demo,
} as Readonly<{ [key: string]: readonly Readonly<Node>[] }>;

export const DEFAULT_SOURCE = Object.keys(SOURCES)[0];

export const URL_LABEL = "URL (Gist, Paste.bin, ...)";
