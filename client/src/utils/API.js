import axios from "axios";

export default {
  // Gets all Pups
  getPups: function() {
    return axios.get("/api/Pups");
  },
  // Gets the Pup with the given id
  getPup: function(id) {
    return axios.get("/api/Pups/" + id);
  },
  // Deletes the Pup with the given id
  deletePup: function(id) {
    return axios.delete("/api/Pups/" + id);
  },
  // Saves a Pup to the database
  savePup: function(PupData) {
    return axios.post("/api/Pups", PupData);
  }
};