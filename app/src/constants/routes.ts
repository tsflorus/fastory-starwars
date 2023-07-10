type Routes = {
  dashboard: string
  login: string
  peopleDetails: string
};

export const routes: Routes = {
  dashboard: '/',
  login: '/login',
  peopleDetails: '/people/:id'
};
