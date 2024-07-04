import { useState } from 'react';
import ColorDisplay from './ColorDisplay';

const colorClasses1 = {
    blue: {
        bg: "#BFDBFE",
        mainBg: "#FFFFFF",
        footer: "#BFDBFE",
        h1: "#5182EF",
        h2: "#5182EF",
        nav: "#60A5FA",
        text: "#202020",
        textnav: "#FFFFFF",
    },
    red: {
        bg: "#FECACA",
        text: "#202020",
        textnav: "#FFFFFF",
        h1: "#E35151",
        h2: "#F24444",
        footer: "#FECACA",
        nav: "#F87171",
        mainBg: "#FFFFFF"
    },
    yellow: {
        bg: "#F4E8CD",
        text: "#202020",
        textnav: "#FFFFFF",
        h1: "#D5A136",
        h2: "#EDB308",
        footer: "#F4E8CD",
        nav: "#CA8A04",
        mainBg: "#FFFFFF"
    },
    dark: {
        bg: "#3C3C3F",
        text: "#D4D4D8",
        textnav: "#FFFFFF",
        h1: "#F4F4F5",
        h2: "#E4E4E7",
        footer: "#3C3C3F",
        nav: "#2F2F31",
        mainBg: "#71717A"
    },
};

const colorClasses2 = {
    blue: {
        bg: "#FFFFFF",
        text: "#202020",
        textnav: "#3B82F6",
        h1: "#F4F4F5",
        h2: "#E4E4E7",
        cardsm: "#74b2df",
        cardxl: "#629BF8",
        footer: "#BFDBFE"
    },
    red: {
        bg: "#FFFFFF",
        text: "#202020",
        textnav: "#EF4444",
        h1: "#F4F4F5",
        h2: "#E4E4E7",
        cardsm: "#df7474",
        cardxl: "#F26969",
        footer: "#FECACA"
    },
    yellow: {
        bg: "#FFFFFF",
        text: "#202020",
        textnav: "#EBB957",
        h1: "#F4F4F5",
        h2: "#E4E4E7",
        cardsm: "#dfbd74",
        cardxl: "#EAB308",
        footer: "#FDE68A"
    },
    dark: {
        bg: "#3C3C3F",
        text: "#D4D4D8",
        textnav: "#FFFFFF",
        h1: "#F4F4F5",
        h2: "#E4E4E7",
        cardsm: "#3F3F46",
        cardxl: "#52525B",
        footer: "#2F2F31"
    },
};

const ColorSelect = ({ onChangeColor }) => {
    const [selectedColor, setSelectedColor] = useState("blue");

    const handleColorChange = (event) => {
        const newColor = event.target.value;
        setSelectedColor(newColor);
        onChangeColor(newColor); 
    };

    const currentColors1 = colorClasses1[selectedColor];
    const currentColors2 = colorClasses2[selectedColor];

    return (
        <div className="container py-10">   
            <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold">Try different colors</h1>
                <select value={selectedColor} onChange={handleColorChange} className="border rounded-sm">
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                    <ColorDisplay label="Bg color:" color={currentColors1.bg} />
                    <ColorDisplay label="H1 color" color={currentColors1.h1} />
                    <ColorDisplay label="Main/Card bg color:" color={currentColors1.mainBg} />
                    <ColorDisplay label="H2 color:" color={currentColors1.h2} />
                    <ColorDisplay label="Footer color:" color={currentColors1.footer} />
                    <ColorDisplay label="Nav color:" color={currentColors1.nav} />
                    <ColorDisplay label="textnav:" color={currentColors1.textnav} />
                    <ColorDisplay label="text:" color={currentColors1.text} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <ColorDisplay label="Bg color:" color={currentColors2.bg} />
                    <ColorDisplay label="text:" color={currentColors2.text} />
                    <ColorDisplay label="textnav:" color={currentColors2.textnav} />
                    <ColorDisplay label="H1 color:" color={currentColors2.h1} />
                    <ColorDisplay label="H2 color:" color={currentColors2.h2} />
                    <ColorDisplay label="Cardsm:" color={currentColors2.cardsm} />
                    <ColorDisplay label="Cardxl:" color={currentColors2.cardxl} />
                    <ColorDisplay label="footer:" color={currentColors2.footer} />
                </div>
            </div>
        </div>
    );
};

export default ColorSelect;
