import axios from "axios";

export default {
  // Gets all Pups
  getPups: function() {
    return axios.get("/api/pups");
  },
  // Gets the Pup with the given id
  getPup: function(id) {
    return axios.get("/api/pups/" + id);
  },
  // Deletes the Pup with the given id
  deletePup: function(id) {
    return axios.delete("/api/pups/" + id);
  },
  // // Saves a Pup to the database
  // savePup: function(PupData) {
  //   return axios.post("/api/pups", PupData);
  // },
  // Adding new user/pup to the database
  signup: function(PupData) {
    console.log("Adding new user/pup to the database");
    return axios.post("/api/pups/", PupData)
  },
  // Seach Pups by Location to the database
  searchPupLocation: function(PupLocation) {
    console.log("Searching by location");
    return axios.post("/api/pups/location", PupLocation);
  },
  searchPupAge: function(PupAge) {
    console.log("Searching by age");
    return axios.post("/api/pups/age", PupAge);
  },
  //Not currently functional, will try to implement
  login: function(UniquePup) {
    console.log("Login user");
    return axios.post("/api/pups/login", UniquePup);
  },
  //Not currently functional, will try to implement
  getCurrentUser: function() {
    console.log("Getting currennt user info");
    return axios.get("/api/pups/currentUser");
  },
};
