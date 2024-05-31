import React, { useState, useEffect } from 'react';

export const Marker = (options) => {
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker && window.google.maps.marker.AdvancedMarkerElement) {
        const element = document.createElement('div');
      element.className = 'custom-marker';
      setMarker(new google.maps.marker.AdvancedMarkerElement({
        ...options,
        content: element,
      }));
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.map = options.map;
      marker.position = options.position;
    }
  }, [marker, options]);

  return null;
};
