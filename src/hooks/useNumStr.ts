import { useState } from "react";
const useNumStrState = (defaultVal = ''): [string, (val: string) => void] => {
  const [numVal, setNumVal] = useState(defaultVal);

  const handleChange = (val: string) => {
    val = val.replace(/[^\d]/g, '');
    setNumVal(val);
  };

  return [numVal, handleChange];
};

export default useNumStrState;
