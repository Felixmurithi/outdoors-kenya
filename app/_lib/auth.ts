import crypto from "crypto";

export function hashPassword(password: string, salt: string): Promise<string> {
  // hash
  //salt is used to make the hash unique incase two users have the same password, adds random strings to the password before encrptying

  //HASHING

  return new Promise((resolve, reject) => {
    crypto.scrypt(password.normalize(), salt, 64, (err, hashedPassword) => {
      if (err) reject(err);
      resolve(hashedPassword.toString("hex").normalize());
    });
  });
}

export function generateSalt() {
  return crypto.randomBytes(16).toString().normalize();
}

export async function verifyPassword(
  password: string,
  salt: string,
  hashedPassword: string
) {
  const inputPasswordHash = await hashPassword(password, salt);

  return crypto.timingSafeEqual(
    Buffer.from(inputPasswordHash, "hex"),
    Buffer.from(hashedPassword, "hex")
  );
}
