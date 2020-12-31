import axios from "axios";

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://10.9.72.239:8080",
      timeout: 60000,
    });
  }

  get({ url, params = {} }) {
    return new Promise((resolve, reject) => {
      this.instance
        .get(url, { params })
        .then((result) => {
          resolve(result.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default Http;
