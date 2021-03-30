module.exports = (rawRequest) => {
  //method and path
  let newRequest = rawRequest.split('\n')[0];
  let splitRequest = newRequest.split(' ');
  let method = splitRequest[0];
  let path = splitRequest[1];

  //body
  let newbodyRequest = rawRequest.split('\r');
  let stringBodyRequest = String(newbodyRequest);
  let splitBody = stringBodyRequest.split('\n');
  let body = splitBody[4];

  let answer = { method, path, body };

  return answer;
};
