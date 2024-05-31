// type MapProps = google.maps.MapOptions & {
//     style: { [key: string]: string };
//     children?: React.ReactElement<google.maps.MarkerOptions>[] | React.ReactElement<google.maps.MarkerOptions>;
//   }

import { useState, useRef, useEffect, Children, isValidElement, cloneElement } from "react";

export const Map = ({ children, style, ...options }) => {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      const option = {
        center: options.center,
        zoom: 16,
      };
      setMap(new window.google.maps.Map(ref.current, option));
    }
  }, [ref, map, options]);

  return (
    <>
      <div ref={ref} style={style} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { map });
        }
      })}
    </>
  );
};
