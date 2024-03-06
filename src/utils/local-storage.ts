import { LocalStorageTypes } from "@/types/local-storage.type";

/**
 * A typed localStorage helper that will parse and stringify for you.
 * Define new types for local storage in "@/types/local-storage.type".
 */
namespace LocalStorage {
  export function get<Key extends keyof LocalStorageTypes>(
    key: Key
  ): LocalStorageTypes[Key] | undefined {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  }

  export function set<Key extends keyof LocalStorageTypes>(
    key: Key,
    value: LocalStorageTypes[Key]
  ) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export default LocalStorage;
