import {Routes, Route, useParams} from "react-router-dom";
import { Event } from './src/pages/Event'

export function Router() {
    const { slug } = useParams<{slug: string}>()

    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>}/>
            <Route path="/event" element={<Event />}/>
            <Route path="/event/lesson/:slug" element={<Event />}/>
        </Routes>
    )
}
