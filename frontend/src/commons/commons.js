export const API_HOST = process.env.REACT_APP_API_HOST || 'http://localhost:8000';
export const API_FIBONACCI_METHOD = API_HOST + "/api/fibonacci";

/** fetch POST method
 *
 * @param {String} url
 * @param {Object} data
 * @param {function} resultCallback
 * @param {function} exceptionCallback
 */
export function post(url, data, resultCallback, exceptionCallback) {

  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  let options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
    mode: 'cors'
  };

  fetch(url, options)
    .then(function (response) {
      if (response.status === 200) {
        return response.json();
      }

      throw new Error("Ошибка получения данных: " + response.statusText);
    })
    .then(function (jsonData) {

      if (jsonData.error) {
        throw new Error(jsonData.error)
      }

      if (resultCallback) {
        resultCallback(jsonData)
      }
      else {
        console.log(jsonData)
      }
    })
    .catch(function (error) {
      if (exceptionCallback) {
        exceptionCallback(error)
      }
      else {
        console.log(error)
      }
    });

}