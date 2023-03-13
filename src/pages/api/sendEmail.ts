// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await axios
    .post("https://bspaycoapi-qa.payco.net.ve/api/v1/email", req.body, {
      auth: {
        username: "admin",
        password: "12345678",
      },
    })
    .then(() => {
      res.status(200).json({ name: "enviado" });
    })
    .catch((error) => {
      res.status(500).json({ name: error });
    });
}
