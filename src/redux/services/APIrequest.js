import md5 from 'crypto-js/md5';

const APIURL = 'https://opentdb.com/api_token.php?command=request';

export const requestToken = async () => {
  const response = await fetch(APIURL);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const requestQuestions = async (token) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const requestGravatar = async (email) => {
  const hash = md5(email).toString();
  console.log(hash);
  const response = await fetch(`https://www.gravatar.com/avatar/${hash}`);
  return response;
};
