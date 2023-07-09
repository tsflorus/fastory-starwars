const {apiBaseUrl} = require("../../constants/config");
const axios = require("axios");

exports.searchAllCategories = async (request) => {
  const {nameToSearch} = request.params;

  let [ people, planets, films, species, vehicles, starships ] =  await axios.all([
    axios.get(`${apiBaseUrl}/people/`),
    axios.get(`${apiBaseUrl}/planets/`),
    axios.get(`${apiBaseUrl}/films/`),
    axios.get(`${apiBaseUrl}/species/`),
    axios.get(`${apiBaseUrl}/vehicles/`),
    axios.get(`${apiBaseUrl}/starships/`),
  ]);

  people = people.data.results;
  planets = planets.data.results;
  films = films.data.results;
  species = species.data.results;
  vehicles = vehicles.data.results;
  starships = starships.data.results;

  people = people.filter((p) => p.name.toLowerCase().includes(nameToSearch.toLowerCase()))
  planets = planets.filter((planet) => planet.name.toLowerCase().includes(nameToSearch.toLowerCase()))
  films = films.filter((film) => film.title.toLowerCase().includes(nameToSearch.toLowerCase()))
  species = species.filter((s) => s.name.toLowerCase().includes(nameToSearch.toLowerCase()))
  vehicles = vehicles.filter((vehicle) => vehicle.name.toLowerCase().includes(nameToSearch.toLowerCase()))
  starships = starships.filter((starship) => starship.name.toLowerCase().includes(nameToSearch.toLowerCase()))

  return {
    people,
    planets,
    films,
    species,
    vehicles,
    starships
  };
}
