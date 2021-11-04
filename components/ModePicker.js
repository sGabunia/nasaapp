import React, { useState } from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const ModePicker = ({ modeValue, setModeValue }) => {
  const [isModePickerOpen, setModePickerOpen] = useState(false);
  const [items] = useState([
    { label: "Full Info", value: "full" },
    { label: "Picture Only", value: "picture" },
  ]);
  return (
    <DropDownPicker
      open={isModePickerOpen}
      value={modeValue}
      items={items}
      setOpen={setModePickerOpen}
      setValue={setModeValue}
      placeholder="Choose picture info type"
      style={styles.borderStyle}
      labelStyle={styles.labelStyle}
      dropDownDirection="BOTTOM"
      itemSeparator={true}
      props={{ activeOpacity: 0.9 }}
      itemProps={{ activeOpacity: 0.7 }}
    />
  );
};

export default ModePicker;

const styles = StyleSheet.create({
  labelStyle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#53504F",
  },
  borderStyle: {
    borderRadius: 25,
  },
});
