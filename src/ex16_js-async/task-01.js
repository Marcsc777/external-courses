function fetch(URL, method) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    
    xhr.open(method, URL, true);

    if (method === 'GET') {
      xhr.send();
    } else {
      let formData = new FormData();
      xhr.responseType = 'json';
      xhr.send(formData);
    }
    
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);
  });
}

module.exports = fetch;
