import { IOffer } from '../interfaces/components/offer.interface';
import { PlacementTypes } from '../emuns/plecement-types.enum';

import { CITIES } from './cities';

/**
 * Моковые данные предложений.
 */
export const OFFERS: IOffer[] = [
  {
    id: 1,
    title: 'Luxury Apartment in Downtown',
    price: 450,
    rating: 4.9,
    type: PlacementTypes.Apartment,
    isPremium: true,
    image: 'img/apartment-01.jpg',
    coordinates: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    },
    city: CITIES.Amsterdam
  },
  {
    id: 2,
    title: 'Room in Suburbs',
    price: 100,
    rating: 4.5,
    type: PlacementTypes.Apartment,
    isPremium: false,
    image: 'img/studio-01.jpg',
    coordinates: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198
    },
    city: CITIES.Amsterdam
  },
  {
    id: 3,
    title: 'Stylish Studio in City Center',
    price: 150,
    rating: 4,
    type: PlacementTypes.Room,
    isPremium: false,
    image: 'img/room.jpg',
    coordinates: {
      latitude: 48.8520,
      longitude: 2.3332
    },
    city: CITIES.Paris
  },
  {
    id: 4,
    title: 'House with River View',
    price: 200,
    rating: 5.0,
    type: PlacementTypes.House,
    isPremium: true,
    image: 'img/studio-01.jpg',
    coordinates: {
      latitude: 48.8566,
      longitude: 2.3522
    },
    city: CITIES.Paris
  },
  {
    id: 5,
    title: 'House with River View -two',
    price: 200,
    rating: 5.0,
    type: PlacementTypes.House,
    isPremium: true,
    image: 'img/studio-01.jpg',
    coordinates: {
      latitude: 48.6566,
      longitude: 2.7522
    },
    city: CITIES.Paris
  },
];
