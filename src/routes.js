import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage404 from '@/modules/core/pages/NotFoundPage404';
import { CharactersPage } from '@/modules/marvel-characters/pages/CharactersPage';
import { ComicsPage } from './modules/marvel-characters/pages/ComicsPage';
import { CreatorsPage } from './modules/marvel-characters/pages/CreatorsPage';
import { EventsPage } from './modules/marvel-characters/pages/EventsPage';
import { SeriesPage } from './modules/marvel-characters/pages/SeriesPage';
import { StoriesPage } from './modules/marvel-characters/pages/StoriesPage';

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<CharactersPage />} />
    <Route exact path="/comics" element={<ComicsPage />} />
    <Route exact path="/creators" element={<CreatorsPage />} />
    <Route exact path="/events" element={<EventsPage />} />
    <Route exact path="/series" element={<SeriesPage />} />
    <Route exact path="/stories" element={<StoriesPage />} />

    <Route exact path="*" element={<NotFoundPage404 />} />
=======
    <Route element={<NotFoundPage404 />} />
>>>>>>> 18216cd9723be8a391c2489688d23d9c27dd0cbd
  </Routes>
);

export default AppRoutes;
