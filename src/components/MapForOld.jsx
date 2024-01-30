import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../Map.css"; // Map.css 파일에 스타일 추가"

const geoJsonURL = "./new_seoul_geo.json";
const centersURL = "./centers.json";
const accidentDataURL = "./노인보행자종합.json";

// 사고 데이터 값에 따른 색상 반환 함수
const getColor = (value) => {
  if (value < 100) return "#ffeda0";
  else if (value < 150) return "#feb24c";
  else if (value < 200) return "#fd8d3c";
  else if (value < 250) return "#fc4e2a";
  else if (value < 300) return "#e31a1c";
  else return "#b10026";
};

const MapForOld = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [centers, setCenters] = useState(null);
  const [accidentData, setAccidentData] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

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

    const fetchCenters = async () => {
      try {
        const response = await fetch(centersURL);
        const data = await response.json();
        setCenters(data);
      } catch (error) {
        console.error("Error fetching centers data:", error);
      }
    };

    const fetchAccidentData = async () => {
      try {
        const response = await fetch(accidentDataURL);
        const data = await response.json();
        setAccidentData(data);
      } catch (error) {
        console.error("Error fetching accident data:", error);
      }
    };

    fetchGeoJsonData();
    fetchCenters();
    fetchAccidentData();
  }, []);

  const handleFeatureClick = (e) => {
    const layer = e.target;
    const geoJsonFeature = layer.feature;
    const selectedData = accidentData.find(
      (item) => item["구"] === geoJsonFeature.properties.name
    );
    setSelectedRegion(selectedData);

    layer
      .bindPopup(
        `<b>${geoJsonFeature.properties.name}</b><br>
       노인 인구수: ${selectedData["노인 인구수"].toLocaleString()}<br>
       사고 발생 건수: ${selectedData["사고 발생 건수"]}<br>
       사고 비율(%): ${selectedData["사고 비율(%)"].toFixed(2)}<br>
       병원 수: ${selectedData["병원 수"]}<br>
       노인여가복지시설 수: ${selectedData["노인여가복지시설 수"]}<br>
       노인의료복지시설 수: ${selectedData["노인의료복지시설 수"]}<br>
       재가노인복지시설 수: ${selectedData["재가노인복지시설 수"]}<br>
       전통시장 수: ${selectedData["전통시장 수"]}<br>
       공원 수: ${selectedData["공원 수"]}`
      )
      .openPopup();
  };

  return (
    <div style={{ display: "flex" }} width="100vh" height="100%">
      <MapContainer
        center={[37.5665, 126.978]}
        zoom={11}
        style={{ width: "70%", height: "1000px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {geoJsonData && accidentData && (
          <GeoJSON
            data={geoJsonData}
            style={(feature) => ({
              fillColor: getColor(
                accidentData.find(
                  (item) => item["구"] === feature.properties.name
                )["사고 발생 건수"]
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
        {centers &&
          Object.entries(centers).map(([name, position]) => (
            <Marker
              key={name}
              position={position}
              icon={
                new L.DivIcon({
                  html: `<div style='font-size: 12px; font-family: "Noto Sans KR", sans-serif; 
                     color: #2c3e50; text-align: center; background-color: #ecf0f1; 
                     border: 2px solid #3498db; border-radius: 10px; padding: 3px 6px; 
                     white-space: nowrap; display: inline-block;'>${name}</div>`,
                  className: "custom-div-icon",
                })
              }
            />
          ))}
      </MapContainer>
      <div
        className="table-container"
        style={{ width: "30%", height: "1000px" }}
      >
        <table>
          <tbody>
            {selectedRegion && (
              <React.Fragment>
                <tr>
                  <th>지역구</th>
                  <td>{selectedRegion["구"]}</td>
                </tr>
                <tr>
                  <th>노인 인구수</th>
                  <td>{selectedRegion["노인 인구수"].toLocaleString()}</td>
                </tr>
                <tr>
                  <th>사고 발생 건수</th>
                  <td>{selectedRegion["사고 발생 건수"]}</td>
                </tr>
                <tr>
                  <th>인구대비 사고 비율(%)</th>
                  <td>{selectedRegion["사고 비율(%)"].toFixed(2)}</td>
                </tr>
                <tr>
                  <th>병원 수</th>
                  <td>{selectedRegion["병원 수"]}</td>
                </tr>
                <tr>
                  <th>노인여가복지시설 수</th>
                  <td>{selectedRegion["노인여가복지시설 수"]}</td>
                </tr>
                <tr>
                  <th>노인의료복지시설 수</th>
                  <td>{selectedRegion["노인의료복지시설 수"]}</td>
                </tr>
                <tr>
                  <th>재가노인복지시설 수</th>
                  <td>{selectedRegion["재가노인복지시설 수"]}</td>
                </tr>
                <tr>
                  <th>전통시장 수</th>
                  <td>{selectedRegion["전통시장 수"]}</td>
                </tr>
                <tr>
                  <th>공원 수</th>
                  <td>{selectedRegion["공원 수"]}</td>
                </tr>
                {/* 필요에 따라 추가 행 추가 */}
              </React.Fragment>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MapForOld;
