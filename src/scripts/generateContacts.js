import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const contacts = JSON.parse(data);

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact()
    );

    const updatedContacts = [...contacts, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log(`${number} new contacts generated and saved to db.json`);
  } catch (error) {
    console.error("Error generating contacts:", error.message);
  }
};

generateContacts(5);
