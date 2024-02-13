import { foo } from "../lib/foo";

export default async (req, res) => {
  res.send('hello' + foo());
};
