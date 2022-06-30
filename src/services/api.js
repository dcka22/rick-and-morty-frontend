import * as utf8 from "utf8";
import { Base64 } from "js-base64";
import axios from "axios";

const BACK_URL = "http://localhost:5000";

const REQUEST_TIMEOUT = 250000;

const api = {
  characters: {
    async fetch() {
      const url = "/characters";

      try {
        const result = await axios.get(BACK_URL + url, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: REQUEST_TIMEOUT,
        });

        return result.data;
      } catch (error) {
        return [];
      }
    },
    async details(id) {
      const url = `/characters/${id}`;

      try {
        return await axios.get(BACK_URL + url, {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: REQUEST_TIMEOUT,
        });
      } catch (error) {
        return error.response;
      }
    },
  },
  userAuth: {
    async login({ username, password }) {
      const url = "/login";
      const encodedPass = Base64.encode(utf8.encode(password));
      const data = {
        username,
        password: encodedPass,
      };

      try {
        return await axios.post(BACK_URL + url, data, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: REQUEST_TIMEOUT,
        });
      } catch (error) {
        return error.response;
      }
    },
  },
  users: {
    async get(username) {
      const url = `/users/${username}`;

      try {
        const result = await axios.get(BACK_URL + url, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: REQUEST_TIMEOUT,
        });

        return result.data;
      } catch (error) {
        return error.response;
      }
    },
    async addFavoriteCharacter(username, id) {
      const url = `/users/${username}/characters/${id}`;

      try {
        return await axios.put(BACK_URL + url, {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: REQUEST_TIMEOUT,
        });
      } catch (error) {
        return error.response;
      }
    },
    async removeFavoriteCharacter(username, id) {
      const url = `/users/${username}/characters/${id}`;

      try {
        const result = await axios.delete(BACK_URL + url, {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: REQUEST_TIMEOUT,
        });
        return result.data;
      } catch (error) {
        return error.response;
      }
    },
  },
};

export default api;
