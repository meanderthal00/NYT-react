import axios from "axios";

const API = {
  search: function (topic, startYear, endYear) {

  const key = "4a0d56f6a33d460ead5acd507d5c7edc"

  const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        key  + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
        console.log(url);
        return axios.get(url);
  },

};

export default API;