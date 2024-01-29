import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../Map.css"; // Map.css 파일에 스타일 추가"

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
  {
    name: "중구",
    value: 0.155832,
    dangerIndex: 1,
    childAccidents: 19,
    predictedChildAccidents: 19.017964,
    population: 121926,
    childPopulation: 121926,
    childAccidentCount: 19,
    vehicleRegistration: 51736,
  },
  {
    name: "종로구",
    value: 0.192157,
    dangerIndex: 2,
    childAccidents: 28,
    predictedChildAccidents: 23.598142,
    population: 145714,
    childPopulation: 145714,
    childAccidentCount: 28,
    vehicleRegistration: 50052,
  },
  {
    name: "용산구",
    value: 0.164616,
    dangerIndex: 3,
    childAccidents: 36,
    predictedChildAccidents: 36.008644,
    population: 218691,
    childPopulation: 218691,
    childAccidentCount: 36,
    vehicleRegistration: 76521,
  },
  {
    name: "성동구",
    value: 0.128627,
    dangerIndex: 4,
    childAccidents: 38,
    predictedChildAccidents: 38.00908,
    population: 295428,
    childPopulation: 295428,
    childAccidentCount: 38,
    vehicleRegistration: 106263,
  },
  {
    name: "금천구",
    value: 0.188006,
    dangerIndex: 5,
    childAccidents: 43,
    predictedChildAccidents: 42.977361,
    population: 228716,
    childPopulation: 228716,
    childAccidentCount: 43,
    vehicleRegistration: 87581,
  },
  {
    name: "서대문구",
    value: 0.145393,
    dangerIndex: 6,
    childAccidents: 44,
    predictedChildAccidents: 44.004765,
    population: 302628,
    childPopulation: 302628,
    childAccidentCount: 44,
    vehicleRegistration: 87104,
  },
  {
    name: "강북구",
    value: 0.191319,
    dangerIndex: 7,
    childAccidents: 59,
    predictedChildAccidents: 45.157997,
    population: 308385,
    childPopulation: 308385,
    childAccidentCount: 59,
    vehicleRegistration: 76364,
  },
  {
    name: "도봉구",
    value: 0.164114,
    dangerIndex: 8,
    childAccidents: 54,
    predictedChildAccidents: 53.999013,
    population: 329039,
    childPopulation: 329039,
    childAccidentCount: 54,
    vehicleRegistration: 96435,
  },
  {
    name: "마포구",
    value: 0.155583,
    dangerIndex: 9,
    childAccidents: 57,
    predictedChildAccidents: 56.990381,
    population: 366365,
    childPopulation: 366365,
    childAccidentCount: 57,
    vehicleRegistration: 117907,
  },
  {
    name: "관악구",
    value: 0.117856,
    dangerIndex: 10,
    childAccidents: 58,
    predictedChildAccidents: 58.033166,
    population: 492126,
    childPopulation: 492126,
    childAccidentCount: 58,
    vehicleRegistration: 120050,
  },
  {
    name: "동대문구",
    value: 0.176801,
    dangerIndex: 11,
    childAccidents: 60,
    predictedChildAccidents: 60.018008,
    population: 339364,
    childPopulation: 339364,
    childAccidentCount: 60,
    vehicleRegistration: 97910,
  },
  {
    name: "동작구",
    value: 0.169145,
    dangerIndex: 12,
    childAccidents: 66,
    predictedChildAccidents: 66.001459,
    population: 390198,
    childPopulation: 390198,
    childAccidentCount: 66,
    vehicleRegistration: 105472,
  },
  {
    name: "광진구",
    value: 0.208073,
    dangerIndex: 13,
    childAccidents: 72,
    predictedChildAccidents: 71.975102,
    population: 346032,
    childPopulation: 346032,
    childAccidentCount: 72,
    vehicleRegistration: 99299,
  },
  {
    name: "서초구",
    value: 0.189431,
    dangerIndex: 14,
    childAccidents: 80,
    predictedChildAccidents: 80.014606,
    population: 422317,
    childPopulation: 422317,
    childAccidentCount: 80,
    vehicleRegistration: 181182,
  },
  {
    name: "성북구",
    value: 0.188572,
    dangerIndex: 15,
    childAccidents: 82,
    predictedChildAccidents: 82.022911,
    population: 434848,
    childPopulation: 434848,
    childAccidentCount: 82,
    vehicleRegistration: 119321,
  },
  {
    name: "강동구",
    value: 0.202497,
    dangerIndex: 16,
    childAccidents: 87,
    predictedChildAccidents: 86.992072,
    population: 429637,
    childPopulation: 429637,
    childAccidentCount: 87,
    vehicleRegistration: 139549,
  },
  {
    name: "영등포구",
    value: 0.244299,
    dangerIndex: 17,
    childAccidents: 88,
    predictedChildAccidents: 87.981963,
    population: 360215,
    childPopulation: 360215,
    childAccidentCount: 88,
    vehicleRegistration: 142010,
  },
  {
    name: "구로구",
    value: 0.233851,
    dangerIndex: 18,
    childAccidents: 94,
    predictedChildAccidents: 89.233931,
    population: 401965,
    childPopulation: 401965,
    childAccidentCount: 94,
    vehicleRegistration: 144465,
  },
  {
    name: "노원구",
    value: 0.174558,
    dangerIndex: 19,
    childAccidents: 92,
    predictedChildAccidents: 92.00388,
    population: 527045,
    childPopulation: 527045,
    childAccidentCount: 92,
    vehicleRegistration: 152071,
  },
  {
    name: "중랑구",
    value: 0.242845,
    dangerIndex: 20,
    childAccidents: 95,
    predictedChildAccidents: 94.971857,
    population: 391196,
    childPopulation: 391196,
    childAccidentCount: 95,
    vehicleRegistration: 112723,
  },
  {
    name: "송파구",
    value: 0.209994,
    dangerIndex: 21,
    childAccidents: 140,
    predictedChildAccidents: 95.495702,
    population: 666686,
    childPopulation: 666686,
    childAccidentCount: 140,
    vehicleRegistration: 240559,
  },
  {
    name: "강서구",
    value: 0.169287,
    dangerIndex: 22,
    childAccidents: 99,
    predictedChildAccidents: 98.981195,
    population: 584804,
    childPopulation: 584804,
    childAccidentCount: 99,
    vehicleRegistration: 204675,
  },
  {
    name: "은평구",
    value: 0.180109,
    dangerIndex: 23,
    childAccidents: 85,
    predictedChildAccidents: 109.804016,
    population: 471936,
    childPopulation: 471936,
    childAccidentCount: 85,
    vehicleRegistration: 129820,
  },
  {
    name: "양천구",
    value: 0.251776,
    dangerIndex: 24,
    childAccidents: 114,
    predictedChildAccidents: 114.000225,
    population: 452784,
    childPopulation: 452784,
    childAccidentCount: 114,
    vehicleRegistration: 149673,
  },
  {
    name: "강남구",
    value: 0.215796,
    dangerIndex: 25,
    childAccidents: 115,
    predictedChildAccidents: 114.99635,
    population: 532911,
    childPopulation: 532911,
    childAccidentCount: 115,
    vehicleRegistration: 235415,
  },
];
const Map = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  useEffect(() => {
    const fetchGeoJsonData = async () => {
      try {
        const response = await fetch(geoJsonURL);
        const data = await response.json();
        setGeoJsonData(data);
      } catch (error) {
        console.error("GeoJSON 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchGeoJsonData();
  }, []);

  const mapCenter = [37.566345, 126.977893];

  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const handleFeatureClick = (e) => {
    const layer = e.target;
    const geoJsonFeature = layer.feature;

    // 클릭한 지역 정보 업데이트
    const selectedData = data.find(
      (item) => item.name === geoJsonFeature.properties.name
    );
    setSelectedRegion(selectedData);
    setSelectedDistrict(selectedData);

    layer
      .bindPopup(
        `<b>${geoJsonFeature.properties.name}</b>
        <br>
       Value: ${selectedData.value}<br>
      위험지수: ${selectedData.dangerIndex}<br>
      어린이사고수: ${selectedData.childAccidents}<br>
      예측어린이사고수: ${selectedData.predictedChildAccidents}<br>
       인구수 : ${selectedData.population.toLocaleString()}<br>
   어린이인구 : ${selectedData.childPopulation.toLocaleString()}<br>
       어린이사고수 : ${selectedData.childAccidentCount}<br>
       차량등록대수 : ${selectedData.vehicleRegistration.toLocaleString()}`
      )
      .openPopup();
  };

  return (
    <div style={{ display: "flex" }} width="100vh" height="100%">
      <MapContainer
        center={mapCenter}
        zoom={12}
        scrollWheelZoom={false}
        dragging={false}
        style={{ width: "80%", height: "1000px" }}
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
      </MapContainer>

      <div
        className="table-container"
        style={{ width: "20%", height: "1000px" }}
      >
        <table>
          <tbody>
            {selectedRegion && (
              <React.Fragment>
                <tr>
                  <th>지역구</th>
                  <td>{selectedRegion.name}</td>
                </tr>
                <tr>
                  <th>Value</th>
                  <td>{selectedRegion.value}</td>
                </tr>
                <tr>
                  <th>위험지수</th>
                  <td>{selectedRegion.dangerIndex}</td>
                </tr>
                <tr>
                  <th className="th">어린이사고수</th>
                  <td className="td">{selectedRegion.childAccidents}</td>
                </tr>
                {/* Add other rows as needed */}
              </React.Fragment>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Map;
