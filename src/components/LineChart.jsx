import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    { name: "종로구", childAccidents: 28, "Gradient Boosting": 23.6 },
    { name: "중구", childAccidents: 19, "Gradient Boosting": 19.02 },
    { name: "용산구", childAccidents: 36, "Gradient Boosting": 36.01 },
    { name: "성동구", childAccidents: 38, "Gradient Boosting": 38.03 },
    { name: "광진구", childAccidents: 72, "Gradient Boosting": 71.98 },
    { name: "동대문구", childAccidents: 60, "Gradient Boosting": 60.02 },
    { name: "중랑구", childAccidents: 95, "Gradient Boosting": 94.97 },
    { name: "성북구", childAccidents: 82, "Gradient Boosting": 82.03 },
    { name: "강북구", childAccidents: 59, "Gradient Boosting": 45.1 },
    { name: "도봉구", childAccidents: 54, "Gradient Boosting": 54 },
    { name: "노원구", childAccidents: 92, "Gradient Boosting": 92 },
    { name: "은평구", childAccidents: 85, "Gradient Boosting": 109.78 },
    { name: "서대문구", childAccidents: 44, "Gradient Boosting": 44 },
    { name: "마포구", childAccidents: 57, "Gradient Boosting": 56.99 },
    { name: "양천구", childAccidents: 114, "Gradient Boosting": 113.99 },
    { name: "강서구", childAccidents: 99, "Gradient Boosting": 98.98 },
    { name: "구로구", childAccidents: 94, "Gradient Boosting": 89.31 },
    { name: "금천구", childAccidents: 43, "Gradient Boosting": 42.98 },
    { name: "영등포구", childAccidents: 88, "Gradient Boosting": 88 },
    { name: "동작구", childAccidents: 66, "Gradient Boosting": 65.97 },
    { name: "관악구", childAccidents: 58, "Gradient Boosting": 58.04 },
    { name: "서초구", childAccidents: 80, "Gradient Boosting": 80.02 },
    { name: "강남구", childAccidents: 115, "Gradient Boosting": 115 },
    { name: "송파구", childAccidents: 140, "Gradient Boosting": 95.65 },
    { name: "강동구", childAccidents: 87, "Gradient Boosting": 86.99 },
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
            { label: "어린이 사고", fill: "#6971fa" }, // "childAccidents"에 해당하는 범례 텍스트와 색상
            { label: "예측값", fill: "#4dceac" }, // "Gradient Boosting"에 해당하는 범례 텍스트와 색상
          ],
        },
      ]}
    />
  );
};

export default LineChart;
