import { useState } from "react";
import { SelectBox, SelectOption } from "../Selectbox/Selectbox.component";

function CitySelectBox(props) {
  const [value, setValue] = useState(1);
  const cityList = [
    { id: 0, text: "不分縣市" },
    { id: 1, text: "台北市" },
    { id: 2, text: "新北市" },
    { id: 3, text: "桃園市" },
    { id: 4, text: "台中市" },
    { id: 5, text: "台南市" },
    { id: 6, text: "高雄市" },
    { id: 7, text: "基隆市" },
    { id: 8, text: "新竹市" },
    { id: 9, text: "新竹縣" },
    { id: 10, text: "苗栗縣" },
    { id: 11, text: "彰化縣" },
    { id: 12, text: "南投縣" },
    { id: 13, text: "雲林縣" },
    { id: 14, text: "嘉義縣" },
    { id: 15, text: "嘉義市" },
    { id: 16, text: "屏東縣" },
    { id: 17, text: "宜蘭縣" },
    { id: 18, text: "花蓮縣" },
    { id: 19, text: "台東縣" },
    { id: 20, text: "金門縣" },
    { id: 21, text: "澎湖縣" },
    { id: 22, text: "連江縣" },
  ];

  return (
    <SelectBox
      textWidth={64}
      value={value}
      onChange={(newValue) => setValue(newValue)}
      {...props}
    >
      {cityList.map(({ id, text }) => (
        <SelectOption key={id} value={id}>
          {text}
        </SelectOption>
      ))}
    </SelectBox>
  );
}

export { CitySelectBox };
