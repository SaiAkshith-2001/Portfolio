import React, { useState, useRef } from "react";
import { Tilt } from "react-tilt";
import axios from "axios";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CssBaseline,
  createTheme,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Paper,
  Typography,
  TextField,
  ThemeProvider,
  Toolbar,
  Tooltip,
  styled,
  Stack,
  SvgIcon,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiMoon,
  FiSun,
  FiLink,
  FiLink2,
} from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import { BsArrowRight } from "react-icons/bs";
import { getImageByURL } from "../util/image-util";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.03)",
  },
}));
const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 100, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
const Portfolio = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const aboutSection = useRef();
  const projectSection = useRef();
  const experienceSection = useRef();
  // const educationSection = useRef();
  const contactSection = useRef();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#2196f3",
      },
      secondary: {
        main: "#f50057",
      },
      transitions: {
        // Define the transition for the theme change
        duration: {
          enteringScreen: 500,
          leavingScreen: 500,
        },
      },
    },
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        &lt;/&gt; Sai Akshith
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() =>
              aboutSection.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <ListItemText>About</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() =>
              projectSection.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <ListItemText>Projects</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() =>
              experienceSection.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <ListItemText>Experience</ListItemText>
          </ListItemButton>
        </ListItem>
        {/* <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() =>
              educationSection.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <ListItemText>Education</ListItemText>
          </ListItemButton>
        </ListItem> */}
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() =>
              contactSection.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <ListItemText>Contact</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  const iconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      service_id: "service_tphknxn",
      template_id: "template_o9zx5il",
      user_id: "oHGs2ECmOZwxQa1o0",
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        to_name: "Sai Akshith",
        message: formData.message,
      },
    };
    //type-1 by using REST API
    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response);
      setSnackbar({
        open: true,
        message: "Mail sent successfully",
        severity: "success",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (e) {
      setSnackbar({
        open: true,
        message: "Something went wrong, Please try again!",
        severity: "error",
      });
      console.error(e);
    }
    //type-2 by using send() method
    // emailjs
    //   .send(serviceID, templateID, templateParams, publicKey)
    //   .then((res) => {
    //     console.log("mail sent successfully!");
    //     setFormData({
    //       name: "",
    //       email: "",
    //       message: "",
    //     });
    //   })
    //   .catch((e) => console.error(e));
  };
  const projects = [
    {
      title: "Blog Application",
      description:
        "Built a full-featured full stack Blog Application platform using MongoDB, ExpressJS, ReactJS, NodeJS and Material UI",
      image: "coverpage1.jpg",
      technologies: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "MUI", "JWT"],
      url: "https://github.com/SaiAkshith-2001/Blog-App",
    },
    {
      title: "Task Management Application",
      description:
        "Created a basic application where user can have notes and remainder",
      image: "coverpage2.jpg",
      technologies: ["React", "Tailwind CSS", "Styled Components"],
      url: "https://github.com/SaiAkshith-2001/Task-management",
    },
    {
      title: "To-Do List Application",
      description:
        "Created a basic To-Do list application where can save notes",
      image: "coverpage3.png",
      technologies: ["React", "Redux", "TailwindCSS"],
      url: "https://github.com/SaiAkshith-2001/todo-reduxtoolkit/tree/main",
    },
    {
      title: "Investment Calculator",
      description:
        "Created a basic Investment calculator application where user can have a glance on Investment captial, estimated returns etc...",
      image: "coverpage4.jpg",
      technologies: ["React", "CSS"],
      url: "https://github.com/SaiAkshith-2001/Investment-Calculator/tree/main",
    },
  ];

  const experiences = [
    {
      company: "ProArch IT Solutions Pvt Ltd",
      role: "Junior Software Engineer",
      duration: "October 2024 - Present",
      description:
        "Developing responsive web applications using React and Material UI ",
    },
    {
      company: "ProArch IT Solutions Pvt Ltd",
      role: "Intern",
      duration: "April 2024 - September 2024",
      description:
        "Developing responsive web applications using React and Material UI",
    },
  ];

  const academics = [
    {
      degree: "Bachelor of Technology",
      institution: "Guru Nanak Institutions Technical Campus,Hyderabad",
      duration: "August 2019 - July 2023",
    },
    {
      degree: "Standard 12th",
      institution: "Akshara Junior College, Hyderabad",
      duration: "June 2017 - May 2019",
    },
    {
      degree: "Standard 10th",
      institution: "Krishnaveni High School, Kagaznagar",
      duration: "April 2017",
    },
  ];

  const achievements = [
    {
      title: "Namaste JavaScript ",
      organization: "By NamasteDev.com",
      description:
        "Explored and learnt various concepts of JavaScript in-depth such as DOM manipulation, event handling, asynchronous programming, and more.",
      url: "https://drive.google.com/file/d/1hyTvoKj5qh6M43CfyTOf5i61aX5N0Az1/view?pli=1",
    },
    {
      title: "ReactJS",
      organization: "By Udemy",
      description:
        "Learnt the fundamentals of React, NextJS and built a simple to-do list application.",
      url: "https://www.udemy.com/certificate/UC-f1ebe89a-abc8-4c9d-9d57-c87819582916/",
    },
    {
      title: "SQL BootCamp ",
      organization: "By Udemy",
      description: "Learnt the basics of SQL and created a simple database.",
      url: "https://www.udemy.com/certificate/UC-eab5097b-0b89-4280-9f4d-9f8f7e0451dc/",
    },
    // {
    //   title: "Best Handwritten Skills",
    //   organization: "By Diddi Satish",
    //   description:
    //     "Recognized for exceptional calligraphy and outstanding handwritten skills.",
    // },
  ];
  const interests = [
    {
      tools: ["Adobe Photoshop", "Adobe Express", "Calligraphy"],
    },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ transition: "background-color 0.5s ease" }}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav" position="fixed">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography component="div" sx={{ flexGrow: 1 }}>
                  <Button disableRipple color="inherit" component="a" href="#">
                    &lt; Sai Akshith /&gt;
                  </Button>
                </Typography>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <Button
                    color="inherit"
                    onClick={() =>
                      aboutSection.current?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    About
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() =>
                      projectSection.current?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    Projects
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() =>
                      experienceSection.current?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    Experience
                  </Button>
                  {/* <Button
                  color="inherit"
                  onClick={() =>
                    educationSection.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Education
                </Button> */}
                  <Button
                    color="inherit"
                    onClick={() =>
                      contactSection.current?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    Contact
                  </Button>
                  <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"} arrow>
                    <IconButton onClick={() => setDarkMode(!darkMode)}>
                      {darkMode ? <FiSun /> : <FiMoon />}
                    </IconButton>
                  </Tooltip>
                </Box>
              </Toolbar>
            </AppBar>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // enabled on smaller devices i.e., mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: 240,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
          <Container>
            <Container
              sx={{
                py: { xs: 5, md: 10 },
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box sx={{ py: 1, textAlign: "start" }} ref={aboutSection}>
                <Typography variant="h2" gutterBottom>
                  Hi, I am
                </Typography>
                <Typography variant="h2" gutterBottom>
                  Sai Akshith Anumalla
                </Typography>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{ fontWeight: "light", color: "text.primary" }}
                >
                  I am{" "}
                  <span
                    style={{
                      fontWeight: "250",
                      textDecorationColor: "primary.main",
                    }}
                  >
                    <Typewriter
                      words={[
                        "Frontend Developer",
                        "Backend Developer",
                        "Full-Stack Developer",
                        "Web Developer",
                        "Software Engineer",
                      ]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={100}
                      deleteSpeed={100}
                      delaySpeed={1000}
                    />
                  </span>
                </Typography>
                <Typography color="text.secondary" sx={{ py: 2 }}>
                  A passionate frontend developer building optimized and
                  scalable websites using React. Proficient in React, TypeScirpt
                  and modern web development practices.
                </Typography>
                <Button
                  variant="outlined"
                  component="a"
                  href="https://drive.google.com/file/d/1U05PtXj_YSE1ccqYuPaUji4s9X2c-HMO/view?usp=sharing"
                  size="Large"
                  sx={{
                    textTransform: "none",
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  View Resume
                </Button>
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", lg: "50%" },
                  mt: { xs: 4, lg: 0 },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
                  alt="Cover Page"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "400px",
                  }}
                />
              </Box>
            </Container>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Tooltip title="GitHub" arrow>
                <IconButton
                  aria-label="github"
                  href="https://github.com/SaiAkshith-2001"
                  target="_blank"
                >
                  <SvgIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      viewBox="0 0 640 640"
                    >
                      <path
                        d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
                        fill={iconColor}
                      />
                    </svg>
                  </SvgIcon>
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn" arrow>
                <IconButton
                  aria-label="linkedin"
                  href="https://www.linkedin.com/in/sai-akshith-anumalla-357168229/"
                  target="_blank"
                >
                  <SvgIcon>
                    <svg
                      viewBox="2.6 3 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
                        fill={iconColor}
                      ></path>
                    </svg>
                  </SvgIcon>
                </IconButton>
              </Tooltip>
              <Tooltip title="E-mail" arrow>
                <IconButton
                  aria-label="email"
                  href="mailto::saiakshithanumalla@gmail.com"
                  target="_blank"
                >
                  <SvgIcon>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 122.56 122.88"
                    >
                      <path
                        class="cls-1"
                        d="M2.33,44.58,117.33.37a3.63,3.63,0,0,1,5,4.56l-44,115.61h0a3.63,3.63,0,0,1-6.67.28L53.93,84.14,89.12,33.77,38.85,68.86,2.06,51.24a3.63,3.63,0,0,1,.27-6.66Z"
                        fill={iconColor}
                      />
                    </svg>
                  </SvgIcon>
                </IconButton>
              </Tooltip>
            </Stack>
            <Box sx={{ py: 4 }} ref={projectSection}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", mb: 4 }}
              >
                Project(s)
              </Typography>
              <Grid container spacing={8}>
                {projects.map((project, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Tilt options={defaultOptions}>
                      <StyledCard>
                        <CardMedia
                          component="img"
                          height="200"
                          image={getImageByURL(project.image)}
                          alt={project.title}
                        />
                        <StyledCardContent>
                          <Typography variant="h6" gutterBottom>
                            {project.title}
                            <Tooltip title="Link" arrow>
                              <IconButton
                                aria-label="github_link"
                                href={project.url}
                                target="_blank"
                              >
                                <FiLink2 />
                              </IconButton>
                            </Tooltip>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {project.description}
                          </Typography>
                          <Stack mt={1} direction="row" spacing={1}>
                            {project.technologies.map((tech) => (
                              <Chip label={tech} size="small" />
                            ))}
                          </Stack>
                        </StyledCardContent>
                      </StyledCard>
                    </Tilt>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box sx={{ py: 8 }} ref={experienceSection}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ display: "flex", alignItems: "center" }}
              >
                Experience(s)
              </Typography>
              {experiences.map((exp, index) => (
                <Card key={index} sx={{ my: 2 }}>
                  <CardContent>
                    <Typography variant="h6">{exp.company}</Typography>
                    <Typography color="text.secondary">{exp.role}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {exp.duration}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {exp.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
            <Box sx={{ py: 8 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ display: "flex", alignItems: "center" }}
              >
                Education
              </Typography>
              {academics.map((academic, index) => (
                <Card key={index} sx={{ my: 2 }}>
                  <CardContent>
                    <Typography variant="h6">{academic.degree}</Typography>
                    <Typography color="text.secondary">
                      {academic.institution}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {academic.duration}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
            <Box sx={{ py: 8 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ display: "flex", alignItems: "center" }}
              >
                Achievement(s) and Certification(s)
              </Typography>
              {achievements.map((achievement, index) => (
                <Card key={index} sx={{ my: 2 }}>
                  <CardContent>
                    <Typography variant="h6">
                      {achievement.title}{" "}
                      <Tooltip title="Link" arrow>
                        <IconButton
                          aria-label="github_link"
                          href={achievement.url}
                          target="_blank"
                        >
                          <FiLink2 />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <Typography color="text.secondary">
                      {achievement.organization}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {achievement.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
            <Box sx={{ py: 8 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ display: "flex", alignItems: "center" }}
              >
                Interest(s)
              </Typography>
              {interests.map((interest, index) => (
                <Card key={index} sx={{ my: 2 }}>
                  <CardContent>
                    <Stack mt={1} direction="row" spacing={1}>
                      {interest.tools.map((tech) => (
                        <Chip label={tech} size="large" />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Box>
            <Container component="main" maxWidth="sm">
              <Box sx={{ py: 8 }} ref={contactSection}>
                <Typography variant="h5" sx={{ textAlign: "center", py: 2 }}>
                  Let's Connect 🚀
                </Typography>
                <form
                  onSubmit={handleFormSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    endIcon={<BsArrowRight />}
                  >
                    Send Message
                  </Button>
                </form>
              </Box>
            </Container>
          </Container>
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <Tooltip title="GitHub" arrow>
              <IconButton
                aria-label="github"
                href="https://github.com/SaiAkshith-2001"
                target="_blank"
              >
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    viewBox="0 0 640 640"
                  >
                    <path
                      d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
                      fill={iconColor}
                    />
                  </svg>
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn" arrow>
              <IconButton
                aria-label="linkedin"
                href="https://www.linkedin.com/in/sai-akshith-anumalla-357168229/"
                target="_blank"
              >
                <SvgIcon>
                  <svg viewBox="2.6 3 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
                      fill={iconColor}
                    ></path>
                  </svg>
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title="E-mail" arrow>
              <IconButton
                aria-label="email"
                href="mailto::saiakshithanumalla@gmail.com"
                target="_blank"
              >
                <SvgIcon>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.56 122.88"
                  >
                    <path
                      class="cls-1"
                      d="M2.33,44.58,117.33.37a3.63,3.63,0,0,1,5,4.56l-44,115.61h0a3.63,3.63,0,0,1-6.67.28L53.93,84.14,89.12,33.77,38.85,68.86,2.06,51.24a3.63,3.63,0,0,1,.27-6.66Z"
                      fill={iconColor}
                    />
                  </svg>
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title="LeetCode" arrow>
              <IconButton
                aria-label="leetcode"
                href="https://leetcode.com/saiakshithanumalla/"
                target="_blank"
              >
                <SvgIcon>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 122.88"
                  >
                    <path
                      d="M60.54,34.07A7.65,7.65,0,0,1,49.72,23.25l13-12.95a35.38,35.38,0,0,1,49.91,0l.07.08a35.37,35.37,0,0,1-.07,49.83l-13,12.95A7.65,7.65,0,0,1,88.81,62.34l13-13a20.08,20.08,0,0,0,0-28.23l-.11-.11a20.08,20.08,0,0,0-28.2.07l-12.95,13Zm14,3.16A7.65,7.65,0,0,1,85.31,48.05L48.05,85.31A7.65,7.65,0,0,1,37.23,74.5L74.5,37.23ZM62.1,89.05A7.65,7.65,0,0,1,72.91,99.87l-12.7,12.71a35.37,35.37,0,0,1-49.76.14l-.28-.27a35.38,35.38,0,0,1,.13-49.78L23,50A7.65,7.65,0,1,1,33.83,60.78L21.12,73.49a20.09,20.09,0,0,0,0,28.25l0,0a20.07,20.07,0,0,0,28.27,0L62.1,89.05Z"
                      fill={iconColor}
                    />
                  </svg>
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title="X" arrow>
              <IconButton
                aria-label="x"
                href="https://x.com/Saiakshithanum1"
                target="_blank"
              >
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    viewBox="0 0 512 462.799"
                  >
                    <path
                      fill={iconColor}
                      d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                    />
                  </svg>
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Discord" arrow>
              <IconButton
                aria-label="x"
                href="https://x.com/Saiakshithanum1"
                target="_blank"
              >
                <SvgIcon>
                  <svg
                    viewBox="0 -28.5 256 256"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                    fill="#000000"
                    stroke="#000000"
                  >
                    <path
                      d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                      fill={iconColor}
                    ></path>
                  </svg>
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <Snackbar
              open={snackbar.open}
              autoHideDuration={3000}
              onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
            >
              <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
                {snackbar.message}
              </Alert>
            </Snackbar>
          </Box>
          <Paper
            position="static"
            elevation={5}
            sx={{ py: 4, textAlign: "center" }}
          >
            <Typography variant="body2" color="textSecondary">
              Made with{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 512 512"
              >
                <path
                  fill="red"
                  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                ></path>
              </svg>{" "}
              in India. &copy; 2024 All rights reserved.
            </Typography>
          </Paper>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Portfolio;
