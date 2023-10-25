"use client";

import { FC, useEffect, useState } from "react";
import useMounted from "./use-mounted";

function useLocalStorage<T>({ key,fillIfEmpty }: { key: string,fillIfEmpty?:T }) {
  const mounted = useMounted();
  const [values, setValues] = useState<T | null>(null);

  useEffect(() => {
    const getValues = async () => {
      const res = localStorage.getItem(key);
      if (res) {
        const parsed:T = JSON.parse(res);
        setValues(parsed);
      } else if(fillIfEmpty) {
        const stringified = JSON.stringify(fillIfEmpty)
        localStorage.setItem(key,stringified)
        setValues(fillIfEmpty)
      }
    };

    mounted && getValues();
  }, [mounted]);

  const changeValues = (value: T) => {
    const stringified = JSON.stringify(value);
    localStorage.setItem(key, stringified);
    setValues(value)
  };

  return { values, changeValues };
}

export default useLocalStorage;
