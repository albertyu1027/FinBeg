import axios from "axios";

export default {
  // Gets all books
  getAllData: function() {
    return axios.get("/api/alldata");
  },
  // Gets the book with the given id
  getData: function(id) {
    return axios.get("/api/data/" + id);
  }

  //POST
};
