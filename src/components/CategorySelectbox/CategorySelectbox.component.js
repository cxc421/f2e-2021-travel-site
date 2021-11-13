import { useState } from "react";
import { SelectBox, SelectOption } from "../Selectbox/Selectbox.component";

function CategorySelectBox(props) {
  const [value, setValue] = useState(1);

  return (
    <SelectBox
      textWidth={61}
      value={value}
      onChange={(newValue) => setValue(newValue)}
      {...props}
    >
      <SelectOption value={1}>類別</SelectOption>
      <SelectOption value={2}>景點</SelectOption>
      <SelectOption value={3}>活動</SelectOption>
    </SelectBox>
  );
}

export { CategorySelectBox };
