const {apiBaseUrl} = require("../../constants/config");
const axios = require("axios");
const {forEachAsync} = require("../../utils/utils");

exports.searchByName = async (request) => {
  const {nameToSearch, category} = request.params;

  let data = {
    people: [],
    planets: [],
    films: [],
    species: [],
    vehicles: [],
    starships: [],
  };

  if (!category) {
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

    data = {
      people,
      planets,
      films,
      species,
      vehicles,
      starships
    };
  } else {
    let result = await axios.get(`${apiBaseUrl}/${category}/`);
    result = result.data.results;

    if (category === 'films') {
      result = result.filter((res) => res.title.toLowerCase().includes(nameToSearch.toLowerCase()))
    } else {
      result = result.filter((res) => res.name.toLowerCase().includes(nameToSearch.toLowerCase()))
    }

    data[category] = result;
  }
  return data;
}

exports.searchItem = async (request) => {
  const {id} = request.params;
  const {category} = request.payload

  let result = await axios.get(`${apiBaseUrl}${category}/${id}`);

  if (!result) {
    throw new Error(`Item with id ${id} cannot be found in ${category}`)
  }
  result = result.data;

  if (category === 'people') {
    result.homeworld = (await axios.get(result.homeworld)).data
    await forEachAsync(result.films, async (filmUrl, index) => {
      result.films[index] = (await axios.get(filmUrl)).data;
    });
    await forEachAsync(result.vehicles, async (vehicleUrl, index) => {
      result.vehicles[index] = (await axios.get(vehicleUrl)).data;
    });
    await forEachAsync(result.starships, async (starshipUrl, index) => {
      result.starships[index] = (await axios.get(starshipUrl)).data;
    });
  }

  return result;
}
