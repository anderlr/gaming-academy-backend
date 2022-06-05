import _ from "lodash";
import Jwt from "jsonwebtoken";

const randomString = (length: number) => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

const isEmpty = (value: any) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

const createJwtAuthToken = (user: string, instructor: boolean) => {
  const contents = {
    _id: _.get(user, "_id", ""),
    name: _.get(user, "name", ""),
    instructor,
    createdAt: Date.now(),
  };

  const token = Jwt.sign(contents, "JWT_TOKEN_KEY", {
    expiresIn: "365d",
  });

  return token;
};

const verifyToken = (token: string) => {
  try {
    const decodedToken = Jwt.verify(token, "JWT_TOKEN_KEY");
    return decodedToken;
  } catch (error) {
    console.log({ error });
    return false;
  }
};

export { randomString, isEmpty, createJwtAuthToken, verifyToken };
