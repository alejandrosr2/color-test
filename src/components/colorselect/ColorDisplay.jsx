const ColorDisplay = ({ label, color }) => {
    return (
        <div className="flex items-center gap-2">
            <h3>{label}</h3>
            <p>{color}</p>
            <div style={{ backgroundColor: color }} className="w-6 h-6 border rounded"></div>
        </div>
    );
};

export default ColorDisplay;