import { useMapEvents } from "react-leaflet";
import { MapStateType } from "../types/MainMapTypes";
import { FC } from 'react';

export const ZoomLogger = ({setMapState}: any) => {
  useMapEvents({
    zoomend: (event) => {
      setMapState((prev: any) => ({
        ...prev,
        targetZoom: event.target.getZoom(),
      }));
    },
  });
  return null;
}