import { useEffect, useState } from "react";

export function useLocalStoarge<T>(key: string, initivalValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue !== null) return JSON.parse(jsonValue)

    if (typeof initivalValue === 'function') {
      return (initivalValue as () => T)()
    } 

    return initivalValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue]
}