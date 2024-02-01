import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../Map.css"; // Map.css 파일에 스타일 추가"
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

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
{
  /* 
구이름
value	
dangerIndex:위험지수
childAccidents:어린이사고수
predictedChildAccidents:예측어린이사고수
population:인구수
childPopulation:어린이인구
childAccidentCount:어린이사고수
vehicleRegistration:차량등록대수
  park: ,
    childcenter:어린이공원개수 ,
    kindergarden: 어린이집수 ,
    elementary: 유치원수,
    ckl_total: 초등학교수,
    protectionzone: ,

*/
}
const data = [
  {
    name: "중구",
    dangerIndex: 1,
    childAccidents: 19,
    predictedChildAccidents: 19.02,
    population: "121,926",
    childPopulation: "9,383",
    childAccidentCount: 19,
    vehicleRegistration: 51736,
    park: 16,
    childcenter: 94,
    kindergarden: 14,
    elementary: 12,
    cctv: 76,
    protectionzone: 43,
    value: 0.202494,
  },
  {
    name: "종로구",
    dangerIndex: 2,
    childAccidents: 28,
    predictedChildAccidents: 23.6,
    population: "145,714",
    childPopulation: "11,317",
    childAccidentCount: 28,
    vehicleRegistration: 50052,
    park: 24,
    childcenter: 116,
    kindergarden: 17,
    elementary: 13,
    cctv: 45,
    protectionzone: 48,
    value: 0.247415,
  },
  {
    name: "용산구",
    dangerIndex: 3,
    childAccidents: 36,
    predictedChildAccidents: 36.01,
    population: "218,691",
    childPopulation: "18,563",
    childAccidentCount: 36,
    vehicleRegistration: 76521,
    park: 23,
    childcenter: 179,
    kindergarden: 17,
    elementary: 15,
    cctv: 235,
    protectionzone: 37,
    value: 0.193934,
  },
  {
    name: "성동구",
    dangerIndex: 4,
    childAccidents: 38,
    predictedChildAccidents: 38.03,
    population: "295,428",
    childPopulation: "27,887",
    childAccidentCount: 38,
    vehicleRegistration: 106263,
    park: 32,
    childcenter: 275,
    kindergarden: 31,
    elementary: 21,
    cctv: 490,
    protectionzone: 52,
    value: 0.136264,
  },
  {
    name: "금천구",
    dangerIndex: 5,
    childAccidents: 43,
    predictedChildAccidents: 42.98,
    population: "228,716",
    childPopulation: "17,852",
    childAccidentCount: 43,
    vehicleRegistration: 87581,
    park: 41,
    childcenter: 266,
    kindergarden: 19,
    elementary: 18,
    cctv: 268,
    protectionzone: 46,
    value: 0.240869,
  },
  {
    name: "서대문구",
    dangerIndex: 6,
    childAccidents: 44,
    predictedChildAccidents: 44,
    population: "302,628",
    childPopulation: "26,860",
    childAccidentCount: 44,
    vehicleRegistration: 87104,
    park: 43,
    childcenter: 274,
    kindergarden: 23,
    elementary: 19,
    cctv: 132,
    protectionzone: 40,
    value: 0.163812,
  },
  {
    name: "강북구",
    dangerIndex: 7,
    childAccidents: 59,
    predictedChildAccidents: 45.1,
    population: "308,385",
    childPopulation: "23,640",
    childAccidentCount: 59,
    vehicleRegistration: 76364,
    park: 44,
    childcenter: 243,
    kindergarden: 22,
    elementary: 14,
    cctv: 351,
    protectionzone: 41,
    value: 0.249577,
  },
  {
    name: "도봉구",
    dangerIndex: 8,
    childAccidents: 54,
    predictedChildAccidents: 54,
    population: "329,039",
    childPopulation: "27,949",
    childAccidentCount: 54,
    vehicleRegistration: 96435,
    park: 39,
    childcenter: 396,
    kindergarden: 29,
    elementary: 23,
    cctv: 151,
    protectionzone: 64,
    value: 0.193209,
  },
  {
    name: "마포구",
    dangerIndex: 9,
    childAccidents: 57,
    predictedChildAccidents: 56.99,
    population: "366,365",
    childPopulation: "35,143",
    childAccidentCount: 57,
    vehicleRegistration: 117907,
    park: 54,
    childcenter: 373,
    kindergarden: 26,
    elementary: 22,
    cctv: 195,
    protectionzone: 52,
    value: 0.162194,
  },
  {
    name: "관악구",
    dangerIndex: 10,
    childAccidents: 58,
    predictedChildAccidents: 58.04,
    population: "492,126",
    childPopulation: "33,102",
    childAccidentCount: 58,
    vehicleRegistration: 120050,
    park: 71,
    childcenter: 398,
    kindergarden: 36,
    elementary: 22,
    cctv: 258,
    protectionzone: 72,
    value: 0.175216,
  },
  {
    name: "동대문구",
    dangerIndex: 11,
    childAccidents: 60,
    predictedChildAccidents: 60.02,
    population: "339,364",
    childPopulation: "29,035",
    childAccidentCount: 60,
    vehicleRegistration: 97910,
    park: 42,
    childcenter: 308,
    kindergarden: 33,
    elementary: 21,
    cctv: 282,
    protectionzone: 75,
    value: 0.206647,
  },
  {
    name: "동작구",
    dangerIndex: 12,
    childAccidents: 66,
    predictedChildAccidents: 65.97,
    population: "390,198",
    childPopulation: "34,712",
    childAccidentCount: 66,
    vehicleRegistration: 105472,
    park: 32,
    childcenter: 338,
    kindergarden: 37,
    elementary: 21,
    cctv: 400,
    protectionzone: 66,
    value: 0.190136,
  },
  {
    name: "광진구",
    dangerIndex: 13,
    childAccidents: 72,
    predictedChildAccidents: 71.98,
    population: "346,032",
    childPopulation: "29,043",
    childAccidentCount: 72,
    vehicleRegistration: 99299,
    park: 35,
    childcenter: 294,
    kindergarden: 36,
    elementary: 21,
    cctv: 625,
    protectionzone: 74,
    value: 0.247908,
  },
  {
    name: "서초구",
    dangerIndex: 14,
    childAccidents: 80,
    predictedChildAccidents: 80.02,
    population: "422,317",
    childPopulation: "49,699",
    childAccidentCount: 80,
    vehicleRegistration: 181182,
    park: 87,
    childcenter: 330,
    kindergarden: 29,
    elementary: 24,
    cctv: 204,
    protectionzone: 92,
    value: 0.160969,
  },
  {
    name: "성북구",
    dangerIndex: 15,
    childAccidents: 82,
    predictedChildAccidents: 82.03,
    population: "434,848",
    childPopulation: "41,671",
    childAccidentCount: 82,
    vehicleRegistration: 119321,
    park: 36,
    childcenter: 462,
    kindergarden: 52,
    elementary: 29,
    cctv: 444,
    protectionzone: 102,
    value: 0.19678,
  },
  {
    name: "강동구",
    dangerIndex: 16,
    childAccidents: 87,
    predictedChildAccidents: 86.99,
    population: "429,637",
    childPopulation: "43,078",
    childAccidentCount: 87,
    vehicleRegistration: 139549,
    park: 62,
    childcenter: 430,
    kindergarden: 34,
    elementary: 27,
    cctv: 237,
    protectionzone: 85,
    value: 0.201959,
  },
  {
    name: "영등포구",
    dangerIndex: 17,
    childAccidents: 88,
    predictedChildAccidents: 88,
    population: "360,215",
    childPopulation: "32,366",
    childAccidentCount: 88,
    vehicleRegistration: 142010,
    park: 29,
    childcenter: 423,
    kindergarden: 40,
    elementary: 23,
    cctv: 286,
    protectionzone: 66,
    value: 0.27189,
  },
  {
    name: "구로구",
    dangerIndex: 18,
    childAccidents: 94,
    predictedChildAccidents: 89.31,
    population: "401,965",
    childPopulation: "39,630",
    childAccidentCount: 94,
    vehicleRegistration: 144465,
    park: 26,
    childcenter: 489,
    kindergarden: 35,
    elementary: 27,
    cctv: 546,
    protectionzone: 61,
    value: 0.237194,
  },
  {
    name: "노원구",
    dangerIndex: 19,
    childAccidents: 92,
    predictedChildAccidents: 92,
    population: "527,045",
    childPopulation: "50,300",
    childAccidentCount: 92,
    vehicleRegistration: 152071,
    park: 92,
    childcenter: 675,
    kindergarden: 69,
    elementary: 42,
    cctv: 260,
    protectionzone: 121,
    value: 0.182903,
  },
  {
    name: "중랑구",
    dangerIndex: 20,
    childAccidents: 95,
    predictedChildAccidents: 94.97,
    population: "391,196",
    childPopulation: "32,314",
    childAccidentCount: 95,
    vehicleRegistration: 112723,
    park: 44,
    childcenter: 372,
    kindergarden: 33,
    elementary: 23,
    cctv: 141,
    protectionzone: 42,
    value: 0.29399,
  },
  {
    name: "송파구",
    dangerIndex: 21,
    childAccidents: 140,
    predictedChildAccidents: 95.65,
    population: "666,686",
    childPopulation: "71,106",
    childAccidentCount: 140,
    vehicleRegistration: 240559,
    park: 87,
    childcenter: 670,
    kindergarden: 54,
    elementary: 40,
    cctv: 449,
    protectionzone: 88,
    value: 0.196889,
  },
  {
    name: "강서구",
    dangerIndex: 22,
    childAccidents: 99,
    predictedChildAccidents: 98.98,
    population: "584,804",
    childPopulation: "57,283",
    childAccidentCount: 99,
    vehicleRegistration: 204675,
    park: 122,
    childcenter: 604,
    kindergarden: 59,
    elementary: 35,
    cctv: 288,
    protectionzone: 88,
    value: 0.172826,
  },
  {
    name: "은평구",
    dangerIndex: 23,
    childAccidents: 85,
    predictedChildAccidents: 109.78,
    population: "471,936",
    childPopulation: "42,691",
    childAccidentCount: 85,
    vehicleRegistration: 129820,
    park: 45,
    childcenter: 520,
    kindergarden: 45,
    elementary: 30,
    cctv: 750,
    protectionzone: 74,
    value: 0.199105,
  },
  {
    name: "양천구",
    dangerIndex: 24,
    childAccidents: 114,
    predictedChildAccidents: 113.99,
    population: "452,784",
    childPopulation: "47,791",
    childAccidentCount: 114,
    vehicleRegistration: 149673,
    park: 74,
    childcenter: 478,
    kindergarden: 47,
    elementary: 30,
    cctv: 831,
    protectionzone: 96,
    value: 0.238539,
  },
  {
    name: "강남구",
    dangerIndex: 25,
    childAccidents: 115,
    predictedChildAccidents: 115,
    population: "532,911",
    childPopulation: "55,528",
    childAccidentCount: 115,
    vehicleRegistration: 235415,
    park: 62,
    childcenter: 359,
    kindergarden: 40,
    elementary: 33,
    cctv: 1157,
    protectionzone: 116,
    value: 0.207103,
  },
];
const getColor = (value) => {
  console.log("Selected Danger Index:", value);
  // 빨간 톤 팔레트로 세부적인 색상 반환
  const colorScale = [
    "#fcbba1",
    "#fb977c",
    "#f56850",
    "#d83624",
    "#ce1f19",
    "#92070c",
    "#53010c",
  ];

  // value 값을 기반으로 팔레트 선택
  if (value < 0.16) {
    return colorScale[0];
  } else if (value < 0.18) {
    return colorScale[1];
  } else if (value < 0.2) {
    return colorScale[2];
  } else if (value < 0.21) {
    return colorScale[3];
  } else if (value < 0.23) {
    return colorScale[4];
  } else if (value < 0.25) {
    return colorScale[5];
  } else {
    return colorScale[6];
  }
};

const Map = () => {
  const handleFeatureHover = (e) => {
    const layer = e.target;
    layer.setStyle({
      // 마우스 오버 시의 스타일 정의
      weight: 5,
      backgroundColor: "#fff",
      dashArray: "",
      fillOpacity: 0.7,
    });
  };

  const handleFeatureUnhover = (e) => {
    const layer = e.target;
    layer.setStyle({
      // 마우스 나갈 때의 스타일 정의
      weight: 2,
      color: "#fff",
      fillOpacity: 0.7,
    });
  };
  const colorScale = [
    "#67000d",
    "#a50f15",
    "#de2d26",
    "#f13724",
    "#f56850",
    "#fb977c",
    "#fcbba1",
  ];

  const [geoJsonData, setGeoJsonData] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const tableHeaders = [
    "지역구",
    "Value",
    "위험지수",
    "어린이사고수",
    "예측어린이사고수",
    "population",
    "어린이인구",
    "어린이사고수",
    "차량등록대수",
  ];

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

    layer.bindPopup(
      `<b>${geoJsonFeature.properties.name}</b>
        <br>
        위험지수: ${selectedData.dangerIndex}<br>
        어린이 사고수: ${selectedData.childAccidents}<br>
        예측 어린이 사고수: ${selectedData.predictedChildAccidents}<br>
        인구수 : ${selectedData.population.toLocaleString()}<br>
        어린이 인구 : ${selectedData.childPopulation.toLocaleString()}<br>
        어린이 사고수 : ${selectedData.childAccidentCount}<br>
        차량등록대수 : ${selectedData.vehicleRegistration.toLocaleString()}<br>
        어린이공원 개수: ${selectedData.park}<br>
        어린이집 수: ${selectedData.childcenter}<br>
        유치원 수: ${selectedData.kindergarden}<br>
        초등학교 수: ${selectedData.elementary}<br>
        cctv 개수: ${selectedData.cctv}<br>
        어린이 보호구역 개수: ${selectedData.protectionzone}<br>
      `
    );
    // .openPopup();
  };

  return (
    <div style={{ display: "flex" }} width="100vh" height="100%">
      <div
        className="legend"
        style={{ width: "5%", height: "1000px", padding: "10px" }}
      >
        {colorScale.map((color, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: color,
                marginRight: "5px",
              }}
            ></div>
            {index === 0
              ? "위험"
              : index === colorScale.length - 1
              ? "안전"
              : ""}
          </div>
        ))}
      </div>
      <MapContainer
        center={mapCenter}
        zoom={12}
        scrollWheelZoom={false}
        dragging={false}
        style={{ width: "70%", height: "950px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {Object.keys(centers).map((district) => (
          <Marker
            key={district}
            position={centers[district]}
            icon={
              new L.divIcon({
                className: "custom-marker",
                html: `<div class="text-with-shadow">${district}</div>`,
                iconSize: [80, 10], // 아이콘 크기 조절
                iconAnchor: [40, 5], // 아이콘 중심 조절
              })
            }
          />
        ))}

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
              transition: "colo 0.3s ease-in-out",
            })}
            onEachFeature={(feature, layer) => {
              layer.on({
                click: handleFeatureClick,
                mouseover: handleFeatureHover,
                mouseout: handleFeatureUnhover,
              });
            }}
          />
        )}
      </MapContainer>

      <div
        className="table-container"
        style={{ width: "30%", height: "1000px" }}
      >
        {/* 
구이름
value	
dangerIndex:위험지수
childAccidents:어린이사고수
predictedChildAccidents:예측어린이사고수
population:인구수
childPopulation:어린이인구
childAccidentCount:어린이사고수
vehicleRegistration:차량등록대수 */}
        <Box
          gridAutoRows="170px"
          gap="20px"
          backgroundColor={colors.primary[400]}
          padding="20px"
          height="950px"
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
          ></Box>

          {selectedRegion ? (
            <table>
              <tbody>
                {selectedRegion && (
                  <React.Fragment>
                    <tr>
                      <th>지역구</th>
                      <td>{selectedRegion.name}</td>
                    </tr>
                    <tr>
                      <th>위험지수</th>

                      <td>
                        {/* 위험지수를 표시하는 부분 */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {/* 색상 바와 지수를 표시하는 컨테이너 */}
                          <div
                            style={{
                              height: "20px",
                              // 위험지수에 따라 바의 길이를 동적으로 조절
                              width: `${selectedRegion.dangerIndex * 10}px`,
                              // getColor 함수를 사용하여 위험지수에 따른 색상을 설정
                              backgroundColor: getColor(
                                selectedRegion.dangerIndex
                              ),
                            }}
                          ></div>
                          {/* 위험지수 값 텍스트 */}
                          <span style={{ marginLeft: "5px" }}>
                            {selectedRegion.dangerIndex}
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>어린이사고수</th>
                      <td>{selectedRegion.childAccidents}</td>
                    </tr>
                    <tr>
                      <th>예측어린이사고수</th>
                      <td>{selectedRegion.predictedChildAccidents}</td>
                    </tr>
                    <tr>
                      <th>인구수</th>
                      <td>{selectedRegion.population}</td>
                    </tr>
                    <tr>
                      <th>어린이인구수</th>
                      <td>{selectedRegion.childPopulation}</td>
                    </tr>
                    <tr>
                      <th>어린이사고수</th>
                      <td>{selectedRegion.childAccidentCount}</td>
                    </tr>
                    <tr>
                      <th>차량등록대수</th>
                      <td>{selectedRegion.vehicleRegistration}</td>
                    </tr>
                    <tr>
                      <th>어린이공원개수</th>
                      <td>{selectedRegion.park}</td>
                    </tr>
                    <tr>
                      <th>어린이집수</th>
                      <td>{selectedRegion.childcenter}</td>
                    </tr>
                    <tr>
                      <th>유치원수</th>
                      <td>{selectedRegion.kindergarden}</td>
                    </tr>
                    <tr>
                      <th>초등학교수</th>
                      <td>{selectedRegion.elementary}</td>
                    </tr>
                    <tr>
                      <th>어린이보호구역CCTV수</th>
                      <td>{selectedRegion.cctv}</td>
                    </tr>
                    <tr>
                      <th>어린이보호구역개수</th>
                      <td>{selectedRegion.protectionzone}</td>
                    </tr>
                  </React.Fragment>
                )}
              </tbody>
            </table>
          ) : (
            <table style={{ textAlign: "left", color: "white" }}>
              <thead></thead>
              <tbody>
                {/* 지역구
                  위험지수
                  어린이사고수
                  예측어린이사고수
                  인구수
                  어린이인구
                  어린이사고수
                  차량등록대수
                  어린이공원개수
                  어린이집수
                  유치원수
                  초등학교수
                  어린이보호구역CCTV수
                  어린이보호구역개수 */}
                <tr>
                  <th>지역구</th>
                  <td></td>
                </tr>

                <tr>
                  <th>위험지수</th>
                  <td></td>
                </tr>
                <tr>
                  <th>어린이사고수</th>
                  <td></td>
                </tr>
                <tr>
                  <th>예측어린이사고수</th>
                  <td></td>
                </tr>
                <tr>
                  <th>인구수</th>
                  <td></td>
                </tr>
                <tr>
                  <th>어린이인구수</th>
                  <td></td>
                </tr>
                <tr>
                  <th>어린이사고수</th>
                  <td></td>
                </tr>
                <tr>
                  <th>차량등록대수</th>
                  <td></td>
                </tr>
                <tr>
                  <th>어린이공원개수</th>
                  <td></td>
                </tr>
                <tr>
                  <th>어린이집수</th>
                  <td></td>
                </tr>
                <tr>
                  <th>유치원수</th>
                  <td></td>
                </tr>
                <tr>
                  <th>초등학교수</th>

                  <td></td>
                </tr>
                <tr>
                  <th>어린이보호구역CCTV수</th>
                  <td></td>
                </tr>
                <tr>
                  <th>어린이보호구역개수</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
          )}
        </Box>
      </div>
    </div>
  );
};
export default Map;
