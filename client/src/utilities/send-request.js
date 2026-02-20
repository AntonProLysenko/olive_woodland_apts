import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null) {  
  // Fetch takes an optional options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);    
  }
  const token = getToken();
  if (token) {
    // Ensure headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }

  // console.log("inside sendRequest", options.body)
  const res = await fetch(url, options);
  // let data = res.json()
  
  // // res.ok will be false if the status code set to 4xx in the controller action
  // if (res.ok){
  //   console.log("res in send-req method", res);
  //   return res.json()
  // }
  // // } else{
  // //   console.log(res.body)
  // //   return {status: res.status, body: res.body, message}
  // // }
    
  // console.log("Response in send Req:", res.message)
  // throw new Error(`Bad Request: ${res.status}${res.body}`);




  const data = await res.json().catch(() => null);

  if (res.ok) {
    return data;
  }

  // 👇 Вот здесь ты получаешь сообщение из backend
  const errorMessage = data?.msg || `Request failed with status ${res.status}`;
  throw new Error(errorMessage);

}