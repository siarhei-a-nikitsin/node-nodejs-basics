import { access, constants } from "node:fs/promises";

export const isFileExists = async (fileName) => {
  try {
    await access(fileName, constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
};

export const isFolderExists = async (folderName) => {
  try {
    await access(folderName);
    return true;
  } catch (err) {
    return false;
  }
};
