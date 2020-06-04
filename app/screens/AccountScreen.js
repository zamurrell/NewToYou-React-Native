import React from "react";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";

function AccountScreen() {
  return (
    <Screen>
      <ListItem
        title="Zach Murrell"
        subTitle="zamurrell@gmail.com"
        image={require("../assets/zach.jpg")}
      />
    </Screen>
  );
}

export default AccountScreen;
