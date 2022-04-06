const APIURL = 'https://opentdb.com/api_token.php?command=request';

export const requestToken = async () => {
  const response = await fetch(APIURL);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const requestQuestions = async (token) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=1&token=${token}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};
