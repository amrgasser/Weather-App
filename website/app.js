/* Global Variables */
let zipcode = "0";
let feelings = "0";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const baseURL = "http://api.openweathermap.org/data/2.5/forecast?id=";
const apiKey = "&appid=8351f14c945af4642ed5f1e95dc22839";

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", () => {
  zipcode = document.getElementById("zip").value;
  feelings = document.getElementById("feelings").value;

  getData(baseURL, zipcode, apiKey).then((data) => {
    postData("/add", {
      city: data.city.name,
      date: data.list[data.list.length - 1].dt_txt,
      temp: data.list[data.list.length - 1].main.temp,
      feelings: feelings,
    });
    
  });
  let projectData = getProjectData("/all");
  let lastIndex = projectData.length-1;
  document.getElementById("city").innerHTML =projectData[lastIndex].city;
  document.getElementById("date").innerHTML =projectData[lastIndex].date;  
  document.getElementById("temp").innerHTML =projectData[lastIndex].temp; 
  document.getElementById("content").innerHTML = projectData[lastIndex].feelings;
});

/* Function called by event listener */

/* Function to GET Web API Data*/
const getData = async (baseURL, zipcode, key) => {
  const res = await fetch(baseURL + zipcode + key);
  try {
    const data = await res.json();
    console.log();
    // document.getElementById("date").innerHTML=data.list[0].clouds.dt_text;

    return data;
  } catch (error) {
    console.log("error", error);
  }
};

/* Function to POST data */
const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

/* Function to GET Project Data */
const getProjectData = async (url = "") => {
  const response = await fetch(url);
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
