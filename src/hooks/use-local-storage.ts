import { useEffect, useState } from "react";

type StoredValue<T> = T | null;

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): [StoredValue<T>, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<StoredValue<T>>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== JSON.stringify(storedValue)) {
        setStoredValue(item ? JSON.parse(item) : initialValue);
      }
    } catch (error) {
      console.warn(
        `Error reading and parsing localStorage key “${key}”:`,
        error
      );
    }
  }, [key, initialValue]);

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const item = window.localStorage.getItem(key);
        if (item !== JSON.stringify(storedValue)) {
          setStoredValue(item ? JSON.parse(item) : initialValue);
        }
      } catch (error) {
        console.warn(
          `Error reading and parsing localStorage key “${key}”:`,
          error
        );
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, initialValue]);

  const setValue = (value: T) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  };

  return [storedValue, setValue];
};
