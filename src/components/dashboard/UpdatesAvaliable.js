import { useEffect, useState } from "react";
import { UpdatesFeed } from "./UpdatesFeed";
import { UpdateNotificationsList } from "./UpdateNotificationsList";

const MOCK_DATA = require("./firmware-bundles.json");

export const UpdatesAvaliable = () => {
  const data = MOCK_DATA["firmware-bundles"].items;
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    if (data) {
      const updateArray = [];
      const sortedDate = data.sort((a, b) => {
        if (a.displayName > b.displayName) return -1;
        if (a.displayName < b.displayName) return 1;
        return 0;
      });
      const base = sortedDate.filter((update) => update.type === "base");
      const hotfix = sortedDate.filter((update) => update.type === "hotfix");
      updateArray.push(hotfix[0], base[0]);
      setUpdates(updateArray);
    }
  }, [data]);

  return (
    <UpdatesFeed
      menuItems={[
        { label: "Move", onClick: () => {} },
        { label: "Share", onClick: () => {} },
      ]}
      // background="validation-warning"
      background="background-front"
      title="Updates Available!"
    >
      {updates && (
        <UpdateNotificationsList
          items={updates}
          defaultItemProps={{
            pad: { vertical: "medium" },
          }}
          itemProps={{ 0: { border: "bottom" } }}
        />
      )}
    </UpdatesFeed>
  );
};
