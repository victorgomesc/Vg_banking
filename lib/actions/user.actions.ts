"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
  APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID,
} = process.env;

export const signIn = async () => {
    try {
        // mutation database make fetch
    } catch (error) {
        console.log('Error', error);
    }
}

export const signUp = async (userData: SignUpParams) => {
    const { email, password, firstName, lastName } = userData;
    try {
        const { account } = await createAdminClient();

  const newUserAccount = await account.create(ID.unique(), 
    email,
    password, 
    `${firstName} ${lastName}`
);
  const session = await account.createEmailPasswordSession(email, password);

  cookies().set("appwrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
    return parseStringify(newUserAccount);
    } catch (error) {
        console.log('Error', error);
    }
}


export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();

      const user = await account.get();

      return parseStringify(user);
    } catch (error) {
      return null;
    }
  }
  