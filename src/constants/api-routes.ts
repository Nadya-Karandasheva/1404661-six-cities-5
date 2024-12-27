/**
 * Запросы API.
 */
export const API_ROUTES = {
  OFFERS: {
    ALL: '/offers',
    EXACT: (offerId: string) => `/offers/${offerId}`,
    NEARBY: (offerId: string) => `/offers/${offerId}/nearby`,
  },
  FAVORITE: {
    GET: '/favorite',
    SET_STATUS: (offerId: string, status: boolean) => `/favorite/${offerId}/${status}`,
  },
  COMMENTS: {
    GET: (offerId: string) => `/comments/${offerId}`,
    POST: (offerId: string) => `/comments/${offerId}`,
  },
  USER: {
    VALIDATE: '/login',
    LOGIN: '/login',
    LOGOUT: '/logout',
  },
};
