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
  // Saves a Pup to the database
  savePup: function(PupData) {
    return axios.post("/api/pups", PupData);
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
  // Adds a new Pup (ie new user) to the database, but with a check for existing user - not currently functional, will need to revisit
  // signup: function(PupData) {
  //   console.log("Sign up user");
  //   return axios.post("/api/pups", PupData);
  // },
  //Not currently functional, will try to implement
  login: function(User) {
    console.log("Login user");
    return axios.post("/login", User);
  },
  //Not currently functional, will try to implement
  getCurrentUser: function() {
    console.log("Getting logged in user info");
    return axios.get("/currentuser");
  },
};
