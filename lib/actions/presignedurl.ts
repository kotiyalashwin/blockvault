"use server";

import axios from "axios";

export const PreSignedURL = async (): Promise<string | null> => {
  try {
    //get users data, use date and time to genrate e file name
    const filename = `user-${Date.now().toString()}`;
    const res = await axios.get(
      `${process.env.APP_BASE_API}/api/s3-upload-url?filename=${filename}`
    );
    if (res.data.error) {
      return null;
    }

    const url = res.data.signedURL;

    return url;
  } catch (e) {
    return null;
  }
};
