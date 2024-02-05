import React from "react";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import { useState, useEffect } from "react";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import ProgressCircle2 from "../../components/ProgressCircle2";

const Oldchart1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDarkmode = theme.palette.mode === "dark";
  const [selectedData, setSelectedData] = useState(null);
  const [selectedData2, setSelectedData2] = useState(null);
  const [selectedDataType, setSelectedDataType] = useState(null);

  // 노인 데이터를 가져오는 비동기 함수
  // const fetchDataForSeniorCitizens = () => {
  //   // Promise.resolve를 사용하여 노인 데이터를 즉시 반환
  //   return Promise.resolve("senior");
  // };

  // 어린이 데이터를 가져오는 비동기 함수
  // const fetchDataForChildren = () => {
  //   // Promise.resolve를 사용하여 어린이 데이터를 즉시 반환
  //   return Promise.resolve("children");
  // };

  // fetchData 함수는 주어진 데이터 유형에 따라 다른 데이터를 가져와서 state를 업데이트합니다.
  // const fetchData = (type) => {
  //   // 만약 데이터 유형이 "senior"이면
  //   if (type === "senior") {
  //     // 선택된 데이터 유형을 "senior"로 설정
  //     setSelectedDataType("senior");

  //     // fetchDataForSeniorCitizens 함수를 호출하고, 데이터를 받아온 후 state를 업데이트
  //     fetchDataForSeniorCitizens().then((data) => {
  //       console.log("Senior data:", data); // 콘솔에 노인 데이터 출력
  //       setSelectedData2(data); // state 업데이트
  //     });
  //   }
  //   // 만약 데이터 유형이 "children"이면
  //   else if (type === "children") {
  //     // 선택된 데이터 유형을 "children"으로 설정
  //     setSelectedDataType("children");

  //     // fetchDataForChildren 함수를 호출하고, 데이터를 받아온 후 state를 업데이트
  //     fetchDataForChildren().then((data) => {
  //       console.log("Children data:", data); // 콘솔에 어린이 데이터 출력
  //       setSelectedData(data); // state 업데이트
  //     });
  //   }
  // };
  // useEffect(() => {
  //   // 초기 렌더링 시에 어린이 데이터를 가져옴
  //   fetchData("children");
  // }, []); // 두 번째 매개변수로 빈 배열을 전달하여 최초 한 번만 실행되도록 함

  // useEffect(() => {
  //   fetchData(selectedDataType);
  // }, [selectedDataType]);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box mt={2} display="flex" justifyContent="">
        {/* <Button
          onClick={() => fetchData("children")}
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          어린이데이터보기
        </Button> 
        */}
        {/* <Button
          onClick={() => fetchData("senior")}
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}--
        >
          노인데이터보기
        </Button> */}
      </Box>

      {isDarkmode && (
        <Box mt={2}>
          <Typography>{selectedData}</Typography>
          <div>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Header
                  title="서울시지역별어린이교통사고"
                  subtitle="어린이 보행자 사고에 미치는 요인분석"
                />
              </Box>
            </Box>

            <Box
              display="grid"
              gridTemplateColumns="repeat(18, 1fr)"
              gridAutoRows="170px"
              gap="20px"
            >
              {/* ROW 1 */}
              <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  // mainTitle="서울시 어린이 교통사고 "
                  title="1,805건"
                  subtitle="교통사고 건수"
                  progress="0.75"
                  increase="+14%"
                  icon={
                    <EmailIcon
                      sx={{
                        color: colors.greenAccent[600],
                        fontSize: "26px",
                      }}
                    />
                  }
                />
              </Box>
              <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  // mainTitle="서울시 어린이 교통사고 "
                  title="6건"
                  subtitle="어린이사망자수"
                  progress="0.75"
                  increase="+14%"
                  icon={
                    <EmailIcon
                      sx={{
                        color: colors.greenAccent[600],
                        fontSize: "26px",
                      }}
                    />
                  }
                />
              </Box>
              <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  // mainTitle="서울시 어린이 교통사고 "
                  title="8세 - 9세"
                  subtitle="주요 사고 발생시간"
                  title2="15 - 16시"
                  subtitle2="피해자 연령대"
                  // progress="0.75"
                  // increase="+14%"
                  icon={
                    <EmailIcon
                      sx={{
                        color: colors.greenAccent[600],
                        fontSize: "26px",
                      }}
                    />
                  }
                />
              </Box>
              <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  title="남아 60%"
                  subtitle="피해자성별"
                  progress="0.60"
                  increase="+21%"
                  icon={
                    <PointOfSaleIcon
                      sx={{
                        color: colors.greenAccent[600],
                        fontSize: "26px",
                      }}
                    />
                  }
                />
              </Box>
              <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  title="87.1%"
                  subtitle="가해자 과실비율"
                  progress="0.87"
                  increase="+%"
                  icon={
                    <PersonAddIcon
                      sx={{
                        color: colors.greenAccent[600],
                        fontSize: "26px",
                      }}
                    />
                  }
                />
              </Box>
              <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  subtitle="가해자 상해비율"
                  title2="89.4%"
                  subtitle2="피해자 상해비율"
                  title="0.08%"
                  // progress="0.80"
                  // increase="+43%"
                  icon={
                    <TrafficIcon
                      sx={{
                        color: colors.greenAccent[600],
                        fontSize: "26px",
                      }}
                    />
                  }
                />
              </Box>

              {/* ROW 2 */}
              <Box
                gridColumn="span 10"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
              >
                <Box
                  mt="25px"
                  p="0 30px"
                  display="flex "
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight="600"
                      color={colors.grey[100]}
                    >
                      Revenue Generated
                    </Typography>
                    <Typography
                      variant="h3"
                      fontWeight="bold"
                      color={colors.greenAccent[500]}
                    >
                      $59,342.32
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton>
                      <DownloadOutlinedIcon
                        sx={{
                          fontSize: "26px",
                          color: colors.greenAccent[500],
                        }}
                      />
                    </IconButton>
                  </Box>
                </Box>

                <Box height="250px" m="-20px 0 0 0">
                  <LineChart isDashboard={true} />
                </Box>
              </Box>

              {/* ROW 3:  뭐 원형 그래프? */}
              <Box
                gridColumn="span 8"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                p="30px"
              >
                <Typography variant="h5" fontWeight="600">
                  Buchanan
                </Typography>

                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  mt="25px"
                >
                  <Box display="flex">
                    <ProgressCircle2
                      size="200"
                      title="68.79k"
                      description="Buchanan"
                    />
                    <Box marginLeft="20px">
                      <ProgressCircle2
                        size="200"
                        title="126.89k"
                        description="Callahan"
                      />
                    </Box>
                  </Box>
                  <Typography
                    variant="h5"
                    color={colors.greenAccent[500]}
                    sx={{ mt: "15px" }}
                  >
                    $48,352 revenue generated
                  </Typography>
                  <Typography>
                    Includes extra misc expenditures and costs
                  </Typography>
                </Box>
              </Box>

              {/*    Sales Quantity*/}
              <Box
                gridColumn="span 10"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
              >
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ padding: "30px 30px 0 30px" }}
                >
                  Sales Quantity
                </Typography>
                <Box height="250px" mt="-20px">
                  <BarChart isDashboard={true} />
                </Box>
              </Box>
              {/*  Sales Quantity 끝 */}
            </Box>
          </div>
        </Box>
      )}
      {/* 노인데이터 */}

      {!isDarkmode && (
        <Box mt={2}>
          <Typography>{selectedData2}</Typography>
          <div>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Header
                  title="서울시 노인 보행자 교통사고"
                  subtitle="3년간의 노인 보행자 사고의 시간대 분석"
                />
              </Box>
            </Box>

            <Box
              display="grid"
              gridTemplateColumns="repeat(16, 1fr)"
              gridAutoRows="170px"
              gap="20px"
            >
              {/* ROW 1 */}
              <Box
                gridColumn="span 4"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  // mainTitle="서울시 어린이 교통사고 "
                  title="5284건"
                  subtitle="교통사고 건수"
                />
              </Box>
              <Box
                gridColumn="span 4"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  // mainTitle="서울시 어린이 교통사고 "
                  title="3021건"
                  subtitle="10시 ~ 17시 사고비율(%)"
                  progress="0.57"
                  increase="57%"
                  icon={
                    <EmailIcon
                      sx={{
                        color: colors.greenAccent[600],
                        fontSize: "26px",
                      }}
                    />
                  }
                />
              </Box>
              <Box
                gridColumn="span 4"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  // mainTitle="서울시 어린이 교통사고 "
                  title="일요일"
                  subtitle="사고가 가장 많은 요일"
                  title2="월요일"
                  subtitle2="사고가 가장 적은 요일"
                  // progress="0.75"
                  // increase="+14%"
                  icon={
                    <EmailIcon
                      sx={{
                        color: colors.greenAccent[600],
                        fontSize: "26px",
                      }}
                    />
                  }
                />
              </Box>

              <Box
                gridColumn="span 4"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  subtitle="사고가 가장 많은 월"
                  title2="5월(481건)"
                  subtitle2="사고가 가장 적은 월"
                  title="3월(379건)"
                  // progress="0.80"
                  // increase="+43%"
                  icon={
                    <TrafficIcon
                      sx={{
                        color: colors.greenAccent[600],
                        fontSize: "26px",
                      }}
                    />
                  }
                />
              </Box>

              {/* ROW 2 */}
              <Box
                gridColumn="span 8"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
              >
                <img
                  alt="월별구별 사고수"
                  width="100%"
                  height="100%"
                  src="/oldimg/month.png"
                  style={{ cursor: "pointer" }}
                />
              </Box>
              <Box
                gridColumn="span 8"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
              >
                <img
                  alt="월별구별 사고수"
                  width="100%"
                  height="100%"
                  src="/oldimg/시간대별노인보행자 사고수.png"
                  style={{ cursor: "pointer" }}
                />
              </Box>

              {/* ROW 3:  뭐 원형 그래프? */}
              <Box
                gridColumn="span 8"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
              >
                <img
                  alt="월별구별 사고수"
                  width="100%"
                  height="100%"
                  src="/oldimg/days.png"
                  style={{ cursor: "pointer" }}
                />
              </Box>
              {/*    Sales Quantity*/}

              <Box
                gridColumn="span 8"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
              >
                <img
                  alt="월별구별 사고수"
                  width="100%"
                  height="100%"
                  src="/oldimg/2020_2022 서울 시간대 및 요일별 노인 보행자 교통사고 빈도.png"
                  style={{ cursor: "pointer" }}
                />
              </Box>
              {/*  Sales Quantity 끝 */}
            </Box>
          </div>
        </Box>
      )}
    </Box>
  );
};

export default Oldchart1;
