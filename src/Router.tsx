import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Favorites } from './pages/Favorites'
import { Home } from './pages/Home'


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
            </Route>
        </Routes>
    )
}