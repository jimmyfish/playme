import { createClient } from 'redis';

export async function doMe(req, res) {
  const client = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

  const message = await client.get('notification');
  console.log(message);

  client.disconnect();
  return res.status(200).send({
    message: {},
  });
}