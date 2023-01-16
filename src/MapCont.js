import './App.css';
import {MapContainer, TileLayer, Marker, Popup, Rectangle } from 'react-leaflet';
import './App.css';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { map } from 'leaflet';
import CardComp from './CardComp.js';

const MapCont = () =>{
    const [focal, setFocal] = useState([43.6498908996582, -70.3095703125]); //current focus point
    const [map, setMap] = useState(null); // map object
    const [zoom, setZoom] = useState(8); // current zoom
    const [center, setCenter] = useState([44.6498908996582, -69.3095703125]); // starting center
    const portland = [[43.6096294,-70.3319836], [43.7096294,-70.1919836]]; // portland area
    const acadia = [[44.24758,-68.4039], [44.44758,-68.1039]]; // portland area
    const orchard = [[43.457684, -70.417731], [43.557684, -70.297731]]; // beach

    const purpleOptions = { color: 'purple' };
    const redOptions = { color: 'red' };

    useEffect(() => {
        if (map) {
            map.setView(focal, zoom);
        }
    }, [focal])

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        ref={setMap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Rectangle bounds={portland} eventHandlers={{click: (e) => {setFocal([43.655, -70.260]); setZoom(13.25);}}}/>
        <Rectangle bounds={acadia} eventHandlers={{click: (e) => {setFocal([44.341, -68.256]); setZoom(12);}}} pathOptions={purpleOptions}/>
        <Rectangle bounds={orchard} eventHandlers={{click: (e) => {setFocal([43.517684, -70.377731]); setZoom(15);}}} pathOptions={redOptions}/>

        <Marker position={[43.6496294,-70.2919836]}> {/* Thompson's Point (Portland) */}
            <Popup className='popup'>
            </Popup>
        </Marker>

        <Marker position={[43.65592, -70.252493]}> {/* Dimillo's Marina (Portland) */}
            <Popup className='popup'>
            
            </Popup>
        </Marker>

        <Marker position={[43.6578537,-70.2502961]}> {/* Port 65 Kitchen & Bar (Portland) */}
            <Popup className='popup'>
            
            </Popup>
        </Marker>

        <Marker position={[43.6654494,-70.2405653]}> {/* Fort Allen Park (Portland) */}
            <Popup className='popup'>
            
            </Popup>
        </Marker>

        <Marker position={[43.65944,-70.251223]}> {/* Eventide Oyster Co. (Portland) */}
            <Popup className='popup'>
            
            </Popup>
        </Marker>

        <Marker position={[43.517684, -70.377731]}> {/* Old Orchard Beach (Beach Vector) */}
            <Popup className='popup'>
                <CardComp />
            </Popup>
        </Marker>

        <Marker position={[44.320565,-68.206759]}> {/* Otter Creek (Acadia) */}
            <Popup className='popup'>
            
            </Popup>
        </Marker>

        <Marker position={[44.3205301,-68.2535589]}> {/* Jordan Pond (Acadia) */}
            <Popup className='popup'>
            
            </Popup>
        </Marker>

        <Marker position={[44.3528575,-68.2239025]}> {/* Cadillac Mountain (Acadia) */}
            <Popup className='popup'>
            
            </Popup>
        </Marker>

        <Marker position={[44.38758,-68.2039]}> {/* Bar Harbor (Bar Harbor) */}
            <Popup className='popup'>
            
            </Popup>
        </Marker>

      </MapContainer>
    ),
    [],
  )

  return (
    <div>
      {displayMap}
    </div>
  )
}

export default MapCont;
