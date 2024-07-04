import ModelOne from "./ModelOne"
import ModelTwo from "./ModelTwo"

const Models = ({ color }) => {
    return (
        <div className="container flex gap-2">
            <div className="flex-1">
                <ModelOne color={color} />
            </div>
            <div className="flex-1">
                <ModelTwo color={color} />
            </div>
        </div>
    );
}

export default Models;
