import { useEffect, useState } from "react";

const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [oldKey, setOldKey] = useState(key);
  const [value, setValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    if (item !== null) {
      try {
        return JSON.parse(item);
      } catch {
        return defaultValue;
      }
    }
    return defaultValue;
  });

  useEffect(() => {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
    localStorage.removeItem(oldKey);
    setOldKey(key);
  }, [key, value, oldKey]);

  return [value, setValue] as const;
};

export default useLocalStorage;
