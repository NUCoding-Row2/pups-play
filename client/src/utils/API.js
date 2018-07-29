import axios from "axios";

export default {
  // Gets the breedlist for the drop down menus
  getBreedList: function() {
    console.log("Getting dog breed list");
    return axios.get("/api/pups/breedList");
  },
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
    // return axios.post("/api/pups/", PupData)
    return axios({
      method: 'post',
      url: "/api/pups",
      data: PupData,
      headers: {
        Accept:'application/json',
        'Content-Type': 'multipart/form-data'
      }
    });
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
  searchPupSize: function(PupSize) {
    console.log("Searching by size");
    return axios.post("/api/pups/size", PupSize);
  },
  searchPupBreed: function(PupBreed) {
    console.log("Searching by breed");
    return axios.post("/api/pups/breed", PupBreed);
  },
  login: function(UniquePup) {
    console.log("Login user");
    return axios.post("/api/pups/login", UniquePup);
  },
  addMessage: function(message) {
    console.log("API.js: Adding new message to chat");
    // return axios.post("/api/pups/", PupData)
    return axios({
      method: 'post',
      url: "/api/pups/chat/:id",
      data: message
    });
  },
  // getMessages: function(messageFrom, messageTo) {
  //   console.log("Getting History --> messageFrom: ", messageFrom);
  //   console.log("Getting History --> messageTo: ", messageTo);
  //   return axios.get(`/api/pups/chats/:${messageFrom}/:${messageTo}`);
  // }
  getMessages: function(messageFrom,messageTo) {
    console.log("Getting History --> messageFrom: ", messageFrom);
    console.log("Getting History --> messageTo: ", messageTo);
    // return axios.post(`/api/pups/chats/:${messageFrom}`,messageFrom);
    return axios({
      method: 'post',
      // url: `/api/pups/chats/${messageFrom}`,
      url: `/api/pups/chats/${messageFrom}/${messageTo}`,
      data: messageFrom
    });
  
  
  }
};
