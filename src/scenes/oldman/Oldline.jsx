import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { ResponsiveLine } from "@nivo/line";

const Oldline = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    {
      name: "종로구",
      childAccidents: 149,
      "Gradient Boosting": 171.478037,
      District: "종로구",
    },
    {
      name: "중구",
      childAccidents: 159,
      "Gradient Boosting": 174.914055,
      District: "중구",
    },
    {
      name: "용산구",
      childAccidents: 97,
      "Gradient Boosting": 89.732176,
      District: "용산구",
    },
    {
      name: "성동구",
      childAccidents: 162,
      "Gradient Boosting": 161.063388,
      District: "성동구",
    },
    {
      name: "광진구",
      childAccidents: 97,
      "Gradient Boosting": 105.357801,
      District: "광진구",
    },
    {
      name: "동대문구",
      childAccidents: 374,
      "Gradient Boosting": 356.185094,
      District: "동대문구",
    },
    {
      name: "중랑구",
      childAccidents: 273,
      "Gradient Boosting": 263.705244,
      District: "중랑구",
    },
    {
      name: "성북구",
      childAccidents: 264,
      "Gradient Boosting": 242.043788,
      District: "성북구",
    },
    {
      name: "강북구",
      childAccidents: 235,
      "Gradient Boosting": 229.581052,
      District: "강북구",
    },
    {
      name: "도봉구",
      childAccidents: 189,
      "Gradient Boosting": 209.5051,
      District: "도봉구",
    },
    {
      name: "노원구",
      childAccidents: 237,
      "Gradient Boosting": 251.064974,
      District: "노원구",
    },
    {
      name: "은평구",
      childAccidents: 221,
      "Gradient Boosting": 233.356992,
      District: "은평구",
    },
    {
      name: "서대문구",
      childAccidents: 183,
      "Gradient Boosting": 182.479971,
      District: "서대문구",
    },
    {
      name: "마포구",
      childAccidents: 130,
      "Gradient Boosting": 111.106456,
      District: "마포구",
    },
    {
      name: "양천구",
      childAccidents: 228,
      "Gradient Boosting": 219.940724,
      District: "양천구",
    },
    {
      name: "강서구",
      childAccidents: 293,
      "Gradient Boosting": 291.857854,
      District: "강서구",
    },
    {
      name: "구로구",
      childAccidents: 216,
      "Gradient Boosting": 230.895317,
      District: "구로구",
    },
    {
      name: "금천구",
      childAccidents: 144,
      "Gradient Boosting": 146.174148,
      District: "금천구",
    },
    {
      name: "영등포구",
      childAccidents: 246,
      "Gradient Boosting": 221.46499,
      District: "영등포구",
    },
    {
      name: "동작구",
      childAccidents: 220,
      "Gradient Boosting": 215.127029,
      District: "동작구",
    },
    {
      name: "관악구",
      childAccidents: 234,
      "Gradient Boosting": 217.673932,
      District: "관악구",
    },
    {
      name: "서초구",
      childAccidents: 178,
      "Gradient Boosting": 172.031524,
      District: "서초구",
    },
    {
      name: "강남구",
      childAccidents: 237,
      "Gradient Boosting": 235.116408,
      District: "강남구",
    },
    {
      name: "송파구",
      childAccidents: 285,
      "Gradient Boosting": 308.748131,
      District: "송파구",
    },
    {
      name: "강동구",
      childAccidents: 244,
      "Gradient Boosting": 254.395817,
      District: "강동구",
    },
  ];

  // 데이터를 형식에 맞게 가공
  const formattedData = [
    {
      id: "Gradient Boosting",
      data: data.map(({ name, "Gradient Boosting": gradientBoosting }) => ({
        x: name,
        y: gradientBoosting,
        value: gradientBoosting,
      })),
    },
    {
      id: "childAccidents",
      data: data.map(({ name, childAccidents }) => ({
        x: name,
        y: childAccidents,
        value: childAccidents,
      })),
    },
  ];

  return (
    <ResponsiveLine
      data={formattedData}
      colors={(d) => {
        // "Gradient Boosting"인 경우 빨간색, "childAccidents"인 경우 파란색
        return d.id === "Gradient Boosting" ? "#6971fa" : "#4dceac";
      }}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: 0,
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: -45,
        legend: isDashboard ? undefined : "지역구",
        legendOffset: 36,
        legendPosition: "middle",
        tickTextColor: "blue",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "사고 수",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
          // 수정된 부분: 범례 텍스트를 수정
          data: [
            { label: "실제 노인보행자 사고", fill: "#6971fa" }, // "childAccidents"에 해당하는 범례 텍스트와 색상
            { label: "예측된 노인보행자 사고", fill: "#4dceac" }, // "Gradient Boosting"에 해당하는 범례 텍스트와 색상
          ],
        },
      ]}
    />
  );
};

export default Oldline;
