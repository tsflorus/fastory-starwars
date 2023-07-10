type Routes = {
  search: string
  login: string
  peopleDetails: string
  planetDetails: string
  filmDetails: string
  speciesDetails: string
  vehicleDetails: string
  starshipDetails: string
};

export const routes: Routes = {
  search: '/',
  login: '/login',
  peopleDetails: '/people/:id',
  planetDetails: '/planets/:id',
  filmDetails: '/films/:id',
  speciesDetails: '/species/:id',
  vehicleDetails: '/vehicles/:id',
  starshipDetails: '/starships/:id',
};
