import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Games from './features/games/Games';
import AudioChallengeRound from './features/games/audio-challenge/AudioChallengeRound';
import Dictionary from './features/dictionary/Dictionary';
import Sprint from './features/games/sprint/Sprint';
import Statistics from './features/statistics/Statistics';
import MainPage from './features/main-page/MainPage';
import GamesList from './features/games/GamesList';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="dictionary" element={<Dictionary />} />
          <Route path="games" element={<Games />}>
            <Route index element={<GamesList />} />
            <Route path="audio-challenge" element={<AudioChallengeRound />} />
            <Route path="sprint" element={<Sprint />} />
          </Route>
          <Route path="statistics" element={<Statistics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
