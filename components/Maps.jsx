"use client";
import "leaflet/dist/leaflet.css";
import {useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import {customIcon} from "./Marker";

const LocationMarker = ({address, setAddress, position, setPosition}) => {
  const map = useMap();
  const fetchUrl = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&";

  useEffect(() => {
    map.locate().on("locationfound", async (location) => {
      setPosition(location.latlng);
      map.flyTo(location.latlng, map.getZoom());
      await fetch(
        `${fetchUrl}lat=${location.latlng.lat}&lon=${location.latlng.lng}`
      )
        .then(async (res) => {
          const data = await res.json();
          setAddress([data]);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    map.on("locationerror", (location) => {
      alert("tidak dapat menemukan lokasi\naktifkan lokasi anda!");
    });
    map.on("click", async (location) => {
      setPosition(location.latlng);
      await fetch(
        `${fetchUrl}lat=${location.latlng.lat}&lon=${location.latlng.lng}`
      )
        .then(async (res) => {
          const data = await res.json();
          setAddress([data]);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>{address.map((data) => data.display_name)}</Popup>
    </Marker>
  );
};

const Maps = ({address, setAddress, position, setPosition}) => {
  return (
    <MapContainer
      center={[-3.332062, 114.580431]}
      zoom={13}
      style={{height: "100vh"}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker
        address={address}
        setAddress={setAddress}
        position={position}
        setPosition={setPosition}
      />
    </MapContainer>
  );
};

export default Maps;
