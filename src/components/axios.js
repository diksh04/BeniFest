import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://127.0.0.1:5001/e-commercestp/us-central1/api", // The API (cloud functio) URL
});

export default instance;


// http://127.0.0.1:4000/logs?q=metadata.emulator.name%3D%22functions%22
// http://127.0.0.1:5001/e-commerFFcestp/us-central1/api
// firebase emulators:  