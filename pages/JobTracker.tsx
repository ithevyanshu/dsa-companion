import { useState, useEffect } from "react";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Typography, MenuItem } from "@mui/material";

import {
  FormBox,
  FormDivs,
  HeaderBox,
  JobContainer,
  JobText,
  MainContainer,
  StatContainer,
  StyledButton,
  StyledJobTextField,
  StyledStack,
  StyledStats,
  StyledStatsCount,
  StyledTextField,
  StyledTitle,
} from "../styles/StyledComponents/JobTrackerCSS";

const JobTracker = () => {
  const [jobList, setJobList] = useState([]);
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());
  const [formData, setFormData] = useState({
    id: "",
    companyName: "",
    position: "",
    package: "",
    missingSkills: "",
    jobStatus: "",
    date: dayjs(),
    notes: "",
  });
  const [updateJobList, setUpdateJobList] = useState(false);
  const [jobStatusCount, setJobStatusCount] = useState({
    applied: 0,
    oaGiven: 0,
    interview: 0,
    offer: 0,
    rejected: 0,
  });
  require("typeface-poppins");

  const handleAddJobSubmit = (event: any) => {
    event.preventDefault();
    if (
      formData.companyName != "" &&
      formData.position != "" &&
      formData.jobStatus != ""
    ) {
      if (localStorage.getItem("jobData") === null) {
        localStorage.setItem("jobData", JSON.stringify([]));
      }
      let jobData = JSON.parse(localStorage.getItem("jobData") || "[]");
      formData.id = dayjs().format("HHmmss");
      formData.date = dayjs(dateValue);
      jobData.push(formData);
      jobData.sort(function (a: any, b: any) {
        var c: any = new Date(a.date);
        var d: any = new Date(b.date);
        return d - c;
      });

      localStorage.setItem("jobData", JSON.stringify(jobData));
      setFormData({
        id: "",
        companyName: "",
        position: "",
        package: "",
        missingSkills: "",
        jobStatus: "",
        date: dayjs(),
        notes: "",
      });
      setDateValue(dayjs());
      setUpdateJobList(!updateJobList);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("jobData") !== null) {
      let jobData = JSON.parse(localStorage.getItem("jobData") || "[]");
      setJobList(jobData);
      let applied = 0;
      let oaGiven = 0;
      let interview = 0;
      let offer = 0;
      let rejected = 0;
      jobData.forEach((job: any) => {
        if (job.jobStatus === "Applied") {
          applied++;
        } else if (job.jobStatus === "OA Given") {
          oaGiven++;
        } else if (job.jobStatus === "Interview") {
          interview++;
        } else if (job.jobStatus === "Offer") {
          offer++;
        } else if (job.jobStatus === "Rejected") {
          rejected++;
        }
      });
      setJobStatusCount({
        applied: applied,
        oaGiven: oaGiven,
        interview: interview,
        offer: offer,
        rejected: rejected,
      });
    }
  }, [updateJobList]);

  const handleJobDelete = (id: string) => {
    let jobData = JSON.parse(localStorage.getItem("jobData") || "[]");
    jobData = jobData.filter((job: any) => job.id !== id);
    localStorage.setItem("jobData", JSON.stringify(jobData));
    setUpdateJobList(!updateJobList);
  };

  const handleJobEdit = (id: string, newStatus: string) => {
    let jobData = JSON.parse(localStorage.getItem("jobData") || "[]");
    let objIndex = jobData.findIndex((obj: any) => obj.id == id);
    jobData[objIndex].jobStatus = newStatus;
    localStorage.setItem("jobData", JSON.stringify(jobData));
    setUpdateJobList(!updateJobList);
  };

  return (
    <>
      <TopNavBar />
      <SideBar />
      <MainContainer>
        <Box
          sx={{
            backgroundColor: "#F5F5F5",
            padding: "1rem",
            marginTop: "1rem",
            borderRadius: "1rem",
            height: "100%",
            "@media (max-width: 700px)": {
              padding: "0.5rem",
            },
          }}
        >
          <HeaderBox>
            <StyledTitle variant="h2">Job Tracker</StyledTitle>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                // border: "1px solid #E0E0E0",
                "@media (max-width: 700px)": {
                  flexDirection: "column",
                },
              }}
            >
              <StyledStats
                variant="h2"
                sx={{
                  fontSize: "3rem",
                  marginRight: "1rem",
                  "@media (max-width: 700px)": {
                    fontSize: "2rem",
                    marginRight: "0",
                    alignSelf: "flex-start",
                  },
                }}
              >
                Stats:
              </StyledStats>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <StatContainer>
                  <StyledStats>Applied</StyledStats>
                  <StyledStatsCount>{jobList.length}</StyledStatsCount>
                </StatContainer>
                <StatContainer>
                  <StyledStats>OAs Given</StyledStats>
                  <StyledStatsCount>{jobStatusCount.oaGiven}</StyledStatsCount>
                </StatContainer>
                <StatContainer>
                  <StyledStats>Interviews</StyledStats>
                  <StyledStatsCount>
                    {jobStatusCount.interview}
                  </StyledStatsCount>
                </StatContainer>
                <StatContainer>
                  <StyledStats>Offers</StyledStats>
                  <StyledStatsCount>{jobStatusCount.offer}</StyledStatsCount>
                </StatContainer>
                <StatContainer>
                  <StyledStats>Rejected</StyledStats>
                  <StyledStatsCount>{jobStatusCount.rejected}</StyledStatsCount>
                </StatContainer>
              </Box>
            </Box>
          </HeaderBox>
          <form>
            <FormBox>
              <FormDivs>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <StyledTextField
                    label="Company Name"
                    value={formData.companyName}
                    required
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        companyName: event.target.value,
                      });
                    }}
                  />
                  <StyledTextField
                    label="Position"
                    value={formData.position}
                    required
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        position: event.target.value,
                      });
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <StyledTextField
                    label="Package (LPA)"
                    value={formData.package}
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        package: event.target.value,
                      });
                    }}
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date Applied"
                      inputFormat="DD/MM/YYYY"
                      value={dateValue}
                      onChange={(newValue) => {
                        setDateValue(newValue);
                      }}
                      renderInput={(params) => (
                        <StyledTextField
                          {...params}
                          sx={{
                            svg: {
                              color: "white",
                            },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </FormDivs>
              <FormDivs
                sx={{
                  "@media (max-width: 700px)": {
                    flexDirection: "row",
                  },
                }}
              >
                <StyledTextField
                  label="Missing Skills"
                  value={formData.missingSkills}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      missingSkills: event.target.value,
                    });
                  }}
                  sx={{
                    width: "76%",
                  }}
                />
                <StyledTextField
                  value={formData.jobStatus}
                  select
                  required
                  label="Status"
                  onChange={(event: any) => {
                    setFormData({
                      ...formData,
                      jobStatus: event.target.value,
                    });
                  }}
                  sx={{
                    width: "24%",
                    svg: {
                      color: "white",
                    },
                  }}
                >
                  <MenuItem value="Applied">Applied</MenuItem>
                  <MenuItem value="OA Given">OA Given</MenuItem>
                  <MenuItem value="Interview">Interview</MenuItem>
                  <MenuItem value="Offer">Offer</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                </StyledTextField>
              </FormDivs>
              <FormDivs
                sx={{
                  "@media (max-width: 700px)": {
                    flexDirection: "row",
                  },
                }}
              >
                <StyledTextField
                  label="Notes"
                  value={formData.notes}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      notes: event.target.value,
                    });
                  }}
                />
                <StyledButton
                  type="submit"
                  variant="contained"
                  onClick={(event) => handleAddJobSubmit(event)}
                  sx={{
                    width: "10rem",
                    backgroundColor: "white",
                    color: "#355070",
                    "&:hover": {
                      backgroundColor: "#EAAC8B",
                      color: "white",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "Bold",
                      fontSize: "1.6rem",
                      fontFamily: "Poppins",
                      "@media (max-width: 700px)": {
                        fontSize: "1.2rem",
                      },
                    }}
                  >
                    Add Job
                  </Typography>
                </StyledButton>
              </FormDivs>
            </FormBox>
          </form>
          {jobList.length > 0 ? (
            <StyledStack>
              {jobList.map((job: any) => {
                return (
                  <JobContainer>
                    <Box
                      sx={{
                        display: "flex",
                        marginLeft: "0.3rem",
                        width: "22%",
                        "@media (max-width: 700px)": {
                          flexDirection: "column",
                          marginLeft: "0.1rem",
                        },
                      }}
                    >
                      <JobText
                        variant="h5"
                        sx={{
                          width: "50%",
                          fontWeight: "500",
                          marginRight: "0.5rem",
                          "@media (max-width: 700px)": {
                            alignSelf: "flex-start",
                            width: "100%",
                          },
                        }}
                      >
                        {job.companyName}
                      </JobText>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: "50%",
                          "@media (max-width: 700px)": {
                            width: "100%",
                          },
                        }}
                      >
                        <JobText
                          sx={{
                            fontSize: "1rem",
                          }}
                          variant="h6"
                        >
                          {job.position}
                        </JobText>
                        <JobText variant="h6">{job.package} LPA</JobText>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        width: "78%",
                        "@media (max-width: 700px)": {
                          flexDirection: "column",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          width: "72%",
                          "@media (max-width: 700px)": {
                            flexDirection: "column",
                            width: "100%",
                          },
                        }}
                      >
                        <JobText
                          variant="h6"
                          sx={{
                            width: "60%",
                            "@media (max-width: 700px)": {
                              width: "100%",
                            },
                          }}
                        >
                          {job.missingSkills}
                        </JobText>
                        <Box
                          sx={{
                            display: "flex",
                            width: "40%",
                            justifyContent: "space-between",
                            "@media (max-width: 700px)": {
                              width: "100%",
                            },
                          }}
                        >
                          <JobText
                            variant="h6"
                            sx={{
                              width: "40%",
                            }}
                          >
                            {dayjs(job.date).format("DD/MM/YYYY")}
                          </JobText>
                          <JobText
                            variant="h6"
                            sx={{
                              width: "60%",
                            }}
                          >
                            {job.notes}
                          </JobText>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          width: "28%",
                          "@media (max-width: 700px)": {
                            width: "100%",
                            marginTop: "0.3rem",
                          },
                        }}
                      >
                        <StyledJobTextField
                          value={job.jobStatus}
                          select
                          label="Status"
                          onChange={(event: any) => {
                            handleJobEdit(job.id, event.target.value);
                          }}
                          sx={{
                            width: "70%",
                            "@media (max-width: 700px)": {
                              width: "100%",
                            },
                          }}
                        >
                          <MenuItem value="Applied">Applied</MenuItem>
                          <MenuItem value="OA Given">OA Given</MenuItem>
                          <MenuItem value="Interview">Interview</MenuItem>
                          <MenuItem value="Offer">Offer</MenuItem>
                          <MenuItem value="Rejected">Rejected</MenuItem>
                        </StyledJobTextField>

                        <StyledButton
                          variant="contained"
                          onClick={() => {
                            handleJobDelete(job.id);
                          }}
                          sx={{
                            width: "30%",
                            backgroundColor: "#355070",
                            color: "white",
                            "&:hover": {
                              backgroundColor: "#E56B6F",
                              color: "#355070",
                            },
                            "@media (max-width: 700px)": {
                              height: "2rem",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: "600",
                              fontFamily: "Poppins",
                              fontSize: "1.2rem",
                              "@media (max-width: 700px)": {
                                fontSize: "0.9rem",
                              },
                            }}
                          >
                            Delete
                          </Typography>
                        </StyledButton>
                      </Box>
                    </Box>
                  </JobContainer>
                );
              })}
            </StyledStack>
          ) : (
            <Typography
              sx={{
                fontWeight: "600",
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                color: "#355070",
                marginTop: "1rem",
              }}
            >
              No Jobs Added. Enter Job Details and Click on Add Job to start.
            </Typography>
          )}
        </Box>
      </MainContainer>
      <Footer />
    </>
  );
};

export default JobTracker;
