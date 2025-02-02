//import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const Mape = () => {
  const position = { lat: 12.121761896710156, lng: 37.76942066002 }; // Coordinates for Addis Ababa, Ethiopia

  return (
    <div style={{border: '4px solid grey', borderRadius: '5px', overflow: 'hidden' }} className="md:mx-28 md:my-12">
      <LoadScript googleMapsApiKey="AIzaSyAdE0zsjvJ0GypdkoPZ3QJjefhPXUhBgk0">
        <GoogleMap
          mapContainerStyle={{ height: '75vh', width: '100%' }}
          center={position}
          zoom={15}
        >
          <Marker position={position} />
          <InfoWindow position={position}>
            <div>
              <h2>Hospital Zone</h2>
              <p>Easily customizable.</p>
            </div>
          </InfoWindow>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Mape;
