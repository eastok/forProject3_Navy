import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../Map.css"; // Map.css 파일에 스타일 추가

const getColor = (value) => {
  // 빨간 톤 팔레트로 세부적인 색상 반환
  const colorScale = [
    "#fee5d9",
    "#fcbba1",
    "#fc9272",
    "#fb6a4a",
    "#de2d26",
    "#a50f15",
    "#67000d",
  ];

  if (value < 0.15) {
    return colorScale[0];
  } else if (value < 0.165) {
    return colorScale[1];
  } else if (value < 0.18) {
    return colorScale[2];
  } else if (value < 0.2) {
    return colorScale[3];
  } else if (value < 0.21) {
    return colorScale[4];
  } else if (value < 0.22) {
    return colorScale[5];
  } else {
    return colorScale[6];
  }
};
// 서울 구별 GeoJSON 데이터 URL
const geoJsonURL =
  "https://raw.githubusercontent.com/southkorea/seoul-maps/master/kostat/2013/json/seoul_municipalities_geo_simple.json";

// 각 구의 중심 좌표
const centers = {
  종로구: [37.5949159, 126.977339],
  중구: [37.5601443, 126.9959649],
  용산구: [37.5313805, 126.9798839],
  성동구: [37.5510171, 127.0410394],
  광진구: [37.5467284, 127.0857543],
  동대문구: [37.5819561, 127.054846],
  중랑구: [37.5978139, 127.0928927],
  성북구: [37.6056991, 127.0175664],
  강북구: [37.6434801, 127.0111839],
  도봉구: [37.6691065, 127.0323527],
  노원구: [37.6525076, 127.075042],
  은평구: [37.6191784, 126.9270142],
  서대문구: [37.5777796, 126.9390623],
  마포구: [37.5593115, 126.9082589],
  양천구: [37.5247402, 126.8553909],
  강서구: [37.5612346, 126.8228132],
  구로구: [37.4944134, 126.8563336],
  금천구: [37.4605655, 126.9008183],
  영등포구: [37.5223245, 126.9101692],
  동작구: [37.4988794, 126.9516345],
  관악구: [37.4673709, 126.9453359],
  서초구: [37.4732933, 127.0312101],
  강남구: [37.4966645, 127.0629804],
  송파구: [37.5056205, 127.1152992],
  강동구: [37.5504483, 127.1470117],
};

const data = [
  { name: "종로구", value: 0.192157 },
  { name: "중구", value: 0.155832 },
  { name: "용산구", value: 0.164616 },
  { name: "성동구", value: 0.128627 },
  { name: "광진구", value: 0.208073 },
  { name: "동대문구", value: 0.176801 },
  { name: "중랑구", value: 0.242845 },
  { name: "성북구", value: 0.188572 },
  { name: "강북구", value: 0.191319 },
  { name: "도봉구", value: 0.164114 },
  { name: "노원구", value: 0.174558 },
  { name: "은평구", value: 0.180109 },
  { name: "서대문구", value: 0.145393 },
  { name: "마포구", value: 0.155583 },
  { name: "양천구", value: 0.251776 },
  { name: "강서구", value: 0.169287 },
  { name: "구로구", value: 0.233851 },
  { name: "금천구", value: 0.188006 },
  { name: "영등포구", value: 0.244299 },
  { name: "동작구", value: 0.169145 },
  { name: "관악구", value: 0.117856 },
  { name: "서초구", value: 0.189431 },
  { name: "강남구", value: 0.215796 },
  { name: "송파구", value: 0.209994 },
  { name: "강동구", value: 0.202497 },
];

const Map = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchGeoJsonData = async () => {
      try {
        const response = await fetch(geoJsonURL);
        const data = await response.json();
        setGeoJsonData(data);
      } catch (error) {
        console.error("Error fetching GeoJSON data:", error);
      }
    };

    const fetchDataJson = async () => {
      try {
        const response = await fetch("/data.json"); // 경로에 맞게 수정
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchGeoJsonData();
    fetchDataJson();
  }, []);

  const mapCenter = [37.566345, 126.977893];

  const mapStyles = {
    height: "100%",
    width: "1300px",
  };

  const handleFeatureClick = (e) => {
    const layer = e.target;

    layer
      .bindPopup(
        `<b>${layer.feature.properties.name}</b><br>${layer.feature.properties.value}`
      )
      .openPopup();
  };

  return (
    <MapContainer
      center={mapCenter}
      zoom={12}
      scrollWheelZoom={false}
      dragging={false}
      style={mapStyles}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {geoJsonData && (
        <GeoJSON
          data={geoJsonData}
          style={(feature) => ({
            fillColor: getColor(
              data.find((item) => item.name === feature.properties.name).value
            ),
            weight: 2,
            opacity: 1,
            color: "white",
            fillOpacity: 0.7,
          })}
          onEachFeature={(feature, layer) => {
            layer.on({
              click: handleFeatureClick,
            });
          }}
        />
      )}
      {jsonData &&
        jsonData.data.map((item) => (
          <Marker
            key={item.name}
            position={centers[item.name]}
            icon={
              new L.divIcon({
                className: "custom-marker",
                html: `<div style="background-color: ${getColor(item.value)}">${
                  item.name
                }</div>`,
              })
            }
          >
            {/* 이름을 마커 위에 나타내기 */}
            <Popup>
              <div>
                <b>{item.name}</b>
                <br />
                Value: {item.value}
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};
export default Map;
