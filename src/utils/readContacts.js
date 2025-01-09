import { PATH_DB } from "../constants/contacts.js";
import fs from "mode:fs";

export const readContacts = async () => {
  return fs
    .readFile(PATH_DB, "utf-8")
    .then((data) => JSON.parse(data))
    .catch((error) => {
      console.error(error.message);
    });
};
