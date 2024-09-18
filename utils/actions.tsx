"use server";

import { actionFunction } from "@/utils/types";
import { profileSchema } from "@/utils/schemas";

export const createProfileAction: actionFunction = async (
  prevState,
  formData,
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);
    return { message: "Profile created" };
  } catch (error) {
    console.log(error);
    return { message: "There was an error" };
  }
};
