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

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedData2, setSelectedData2] = useState(null);
  const [selectedDataType, setSelectedDataType] = useState(null);

  const fetchDataForSeniorCitizens = () => {
    return Promise.resolve("senior");
  };

  const fetchDataForChildren = () => {
    return Promise.resolve("children");
  };

  // useEffect(() => {
  //   fetchData(selectedDataType);
  // }, [selectedDataType]);

  const fetchData = (type) => {
    if (type === "senior") {
      setSelectedDataType("senior");
      fetchDataForSeniorCitizens().then((data) => {
        console.log("Senior data:", data);
        setSelectedData2(data);
      });
    } else if (type === "children") {
      setSelectedDataType("children");
      fetchDataForChildren().then((data) => {
        console.log("Children data:", data);
        setSelectedData(data);
      });
    }
  };
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box mt={2} display="flex" justifyContent="">
        <Button
          onClick={() => fetchData("children")}
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          {/* <DownloadOutlinedIcon sx={{ mr: "10px" }} /> */}
          어린이데이터보기
        </Button>
        <Button
          onClick={() => fetchData("senior")}
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          {/* <DownloadOutlinedIcon sx={{ mr: "10px" }} /> */}
          노인데이터보기
        </Button>
      </Box>

      {selectedData && selectedDataType === "children" && (
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

      {selectedData2 && selectedDataType === "senior" && (
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
                  title="서울시지역별노인교통사고"
                  subtitle="노인 보행자 사고에 미치는 요인분석"
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
                  title="20,005건"
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
                  title="10건"
                  subtitle="노인사망자수"
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
                  title="60세 - 65세"
                  subtitle="주요 사고 발생시간"
                  title2="60 - 65시"
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
                  title="남 60%"
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
    </Box>
  );
};

export default Geography;
