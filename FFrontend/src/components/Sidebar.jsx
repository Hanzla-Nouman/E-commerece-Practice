import React,{useState} from "react";

const Sidebar = () => {
    const [numberValue, setNumberValue] = useState(0);

    const handleNumberChange = (e) => {
      const value = e.target.value;
      setNumberValue(value);
    };
  return (
    <>
      <div className="drawer" style={{ zIndex: "100" }}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li style={{ fontSize: "20px", fontWeight: "500" }}>Pricing</li>
            <div className="divider" style={{ margin: "1px 1px" }}></div>
            <div style={{ display: "flex", width: "40px" }}>
              <input
                className="num-input"
                style={{ display: "flex", width: "70px", margin: "0px 5px" }}
                type="number"
                value={numberValue}
                onChange={handleNumberChange}
                placeholder="Min"
              />
              <input
                className="num-input"
                style={{ display: "flex", width: "70px", margin: "0px 5px" }}
                type="number"
                value={numberValue}
                onChange={handleNumberChange}
                placeholder="Max"
              />
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginLeft: "10px" }}
              >
                Apply
              </button>
              <p>{numberValue}</p>
            </div>
            <li style={{ fontSize: "20px", fontWeight: "500" }}>Rating</li>
            <div className="divider" style={{ margin: "1px 1px" }}></div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
