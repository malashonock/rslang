import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Games from './features/games/Games';
import AudioChallenge from './features/games/audio-challenge/AudioChallenge';
import Dictionary from './features/dictionary/Dictionary';
import Sprint from './features/games/sprint/Sprint';
import Statistics from './features/statistics/Statistics';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="dictionary" element={<Dictionary />} />
          <Route path="games" element={<Games />}>
            <Route path="audio-challenge" element={<AudioChallenge />} />
            <Route path="sprint" element={<Sprint />} />
          </Route>
          <Route path="statistics" element={<Statistics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
