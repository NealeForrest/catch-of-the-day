import React from "react";
import { getFunName } from "../helpers";
class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Please enter a store</h2>
                <input
                    type="text"
                    placeholder="enter store name"
                    required
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit store -></button>
            </form>
        );
    }
}
export default StorePicker;
