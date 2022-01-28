import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const nomes = ['Luis', 'Flavio', 'Brian', 'Pedro', 'Fabiano', 'Andrew', 'Danilo', 'Will'] 
  const random = Math.floor(Math.random() * nomes.length);
  res.status(200).json({ sortudo: nomes[random] })
}