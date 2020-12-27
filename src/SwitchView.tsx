import React, { useEffect, useState } from "react";
import "./SwitchView.scss";

interface Prop {
  id: string;
  value: boolean;
  onChange: Function;
}

const SwitchView: React.FC<Prop> = ({
  id,
  value,
  onChange,
}: Prop): JSX.Element => {
  const [isOn, setIsOn] = useState(value);

  useEffect(() => {
    if (value === true) {
      setIsOn(true);
    } else if (value === false) {
      setIsOn(false);
    }
  }, [value]);

  return (
    <div
      className="d-flex align-content-center"
      key={`switch-view-${id}`}
      id={`switch-view-${id}`}
    >
      <input
        key={`switch-view-checkbox-${id}`}
        id={`switch-view-checkbox-${id}`}
        className="switch-view-checkbox"
        type="checkbox"
        checked={isOn}
        onChange={(): void => {
          onChange(!isOn);
          setIsOn(!isOn);
        }}
      />
      <label
        key={`switch-view-label-${id}`}
        id={`switch-view-label-${id}`}
        className={`${isOn ? "switch-view-label-on" : "switch-view-label-off"}`}
        htmlFor={`switch-view-checkbox-${id}`}
      >
        <span className={"switch-view-button"} />
      </label>
    </div>
  );
};

export default SwitchView;
