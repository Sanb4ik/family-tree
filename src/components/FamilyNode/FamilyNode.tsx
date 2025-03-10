import React, { useCallback } from "react";
import classNames from "classnames";
import type { ExtNode } from "relatives-tree/lib/types";
import css from "./FamilyNode.module.css";

interface FamilyNodeProps {
  node: ExtNode;
  isRoot: boolean;
  isHover?: boolean;
  onClick: (id: string) => void;
  onSubClick: (id: string) => void;
  style?: React.CSSProperties;
}

export const FamilyNode = React.memo(function FamilyNode({
  node,
  isRoot,
  isHover,
  onClick,
  onSubClick,
  style,
}: FamilyNodeProps) {
  const clickHandler = useCallback(() => onClick(node.id), [node.id, onClick]);
  const clickSubHandler = useCallback(
    () => onSubClick(node.id),
    [node.id, onSubClick],
  );

  const logo =
    node.gender === "male"
      ? "https://i.pinimg.com/736x/50/bf/c5/50bfc548ce376ad2eaca06fc2448ec9b.jpg"
      : "https://i.pinimg.com/736x/1b/2e/31/1b2e314e767a957a44ed8f992c6d9098.jpg";

  console.log(node.avatarUrl); //node.avatarUrl
  return (
    <div className={css.root} style={style}>
      <div
        className={classNames(
          css.inner,
          css[node.gender],
          isRoot && css.isRoot,
          isHover && css.isHover,
        )}
        onClick={clickHandler}
      >
        <div>
          <img
            src={logo}
            alt="avatar"
            style={{
              marginTop: "-10px",
              maxWidth: "60px",
              objectFit: "scale-down",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            maxWidth: "60px",
            minWidth: "60px",
            marginTop: "54px",
            maxHeight: "18px",
            overflow: "hidden",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            backgroundColor: node.gender === "male" ? "#a4ecff" : "#fdaed8",
          }}
        >
          <p
            style={{
              marginTop: "2px",
              lineHeight: "1px",
              fontSize: "1px",
              paddingLeft: "2px",
            }}
          >
            {node.id}
          </p>
        </div>
      </div>
      {node.hasSubTree && (
        <div
          className={classNames(css.sub, css[node.gender])}
          onClick={clickSubHandler}
        />
      )}
    </div>
  );
});
