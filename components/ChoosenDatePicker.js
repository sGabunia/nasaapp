import React from "react";
import DatePicker from "react-native-date-picker";

const ChoosenDatePicker = ({ date, setDate, open, setOpen }) => {
  return (
    <DatePicker
      modal
      open={open}
      date={date}
      onConfirm={(date) => {
        setOpen(false);
        setDate(date);
      }}
      onCancel={() => {
        setOpen(false);
      }}
      maximumDate={new Date()}
      mode="date"
      textColor="firebrick"
    />
  );
};

export default ChoosenDatePicker;
