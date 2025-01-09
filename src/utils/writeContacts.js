import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs";

export const writeContacts = async (updatedContacts) => {
  return fs
    .writeFile(PATH_DB, updatedContacts)
    .then((data) => JSON.parse(data))
    .catch((error) => {
      console.error(error.message);
    });
};
