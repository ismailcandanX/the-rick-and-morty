import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './componenets/Home';
import SelectEpisode from './componenets/SelectEpisode';
import EpisodeDetails from './componenets/EpisodeDetails';
import CharacterDetails from './componenets/CharacterDetails';
function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SelectEpisode />} />
            <Route path="/search/:id" element={<EpisodeDetails />} />
            <Route path="/characters/:id" element={<CharacterDetails />} />
        </Routes>
    )
}

export default Router