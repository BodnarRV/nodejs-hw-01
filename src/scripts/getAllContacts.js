import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading contacts:", error.message);
  }
};

console.log(await getAllContacts());
