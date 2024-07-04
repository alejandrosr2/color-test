import './App.css'
import { useState } from 'react';
import ColorSelect from './components/colorselect/ColorSelect'
import Models from './components/main/Models'

function App() {
    const [color, setColor] = useState('blue');

    return (
        <div className="bg-zinc-100 min-h-screen">
            <ColorSelect onChangeColor={setColor} />
            <Models color={color} />
        </div>
    )
}

export default App;
