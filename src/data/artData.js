import supabase from '../../api.js';

const { data, error } = await supabase.from('artData').insert([
  {
    id: 1,
    title: 'Starry Night',
    artistName: 'Vincent Van Gogh',
    rating: 4,
    location: 'MOMA, New York',
    image: '/starrynight.jpg',
    time: '18:00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    username: 'ILoveArt4Eva',
  },
  {
    id: 2,
    title: 'Lady in Gold',
    artistName: 'Gustav Klimt',
    rating: 3,
    location: 'The Neue Galerie, New York',
    image: '/ladyingold.jpg',
    time: '16:00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    username: 'ILoveArt4Eva',
  },
  {
    id: 3,
    title: 'The Scream',
    artistName: 'Vincent Van Gogh',
    rating: 3.5,
    location: 'The National Museum, Oslo',
    image: '/thescream.webp',
    time: '13:00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    username: 'ILoveArt4Eva',
  },
  {
    id: 4,
    title: 'Sunflowers',
    artistName: 'Vincent Van Gogh',
    rating: 4.5,
    location: 'National Gallery, London',
    image: '/sunflowers.jpg',
    time: '11:00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    username: 'ILoveArt4Eva',
  },
  {
    id: 5,
    title: 'Saturn Devouring his Son',
    artistName: 'Francisco Goya',
    rating: 2.5,
    location: 'Museo Nacional del Prado, Madrid',
    image: '/saturndevouringhisson.jpg',
    time: '12:00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    username: 'ILoveArt4Eva',
  },
  {
    id: 6,
    title: 'The Mona Lisa',
    artistName: 'Leonardo Da Vinci',
    rating: 3.5,
    location: 'The Louvre, Paris',
    image: '/monalisa.webp',
    time: '15:00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    username: 'ILoveArt4Eva',
  },
]);

if (error) {
  console.log('An error occured', error);
} else {
  console.log('Data inserted successfully', data);
}
