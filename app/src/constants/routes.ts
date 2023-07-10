type Routes = {
  dashboard: string
  login: string
  peopleDetails: string
  planetDetails: string
};

export const routes: Routes = {
  dashboard: '/',
  login: '/login',
  peopleDetails: '/people/:id',
  planetDetails: '/planets/:id'
};
