import fetch from 'isomorphic-unfetch'

export default async (...args) => {
  const json = await fetch(...args).then(res => res.json());
  return json;
};