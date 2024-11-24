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
        "Built a full-featured Blog Application platform using React and Material UI",
      image: "coverpage1.jpg",
      technologies: ["ReactJS", "ExpressJS", "NodeJS", "MUI", "JWT"],
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
        "Developing responsive web applications using React and Material UI",
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
      title: "Best Handwritten Skills",
      organization: "By Diddi Satish",
      description: "Recognized Calligraphy for exceptional handwritten skills",
    },
  ];
  const interests = [
    {
      tools: ["Adobe Photoshop", "Adobe Express", "Calligraphy"],
    },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
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
                  &lt;/&gt; Sai Akshith
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
                A passionate frontend developer building optimized and scalable
                websites using React. Proficient in React, TypeScirpt and modern
                web development practices.
              </Typography>
              <Button
                variant="outlined"
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
                <FiGithub />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn" arrow>
              <IconButton
                aria-label="linkedin"
                href="https://www.linkedin.com/in/sai-akshith-anumalla-357168229/"
                target="_blank"
              >
                <FiLinkedin />
              </IconButton>
            </Tooltip>
            <Tooltip title="E-mail" arrow>
              <IconButton
                aria-label="email"
                href="mailto::saiakshithanumalla@gmail.com"
                target="_blank"
              >
                <FiMail />
              </IconButton>
            </Tooltip>
            <Tooltip title="LeetCode" arrow>
              <IconButton
                aria-label="leetcode"
                href="https://leetcode.com/saiakshithanumalla/"
                target="_blank"
              >
                <FiLink />
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
              Achievement(s)
            </Typography>
            {achievements.map((achievement, index) => (
              <Card key={index} sx={{ my: 2 }}>
                <CardContent>
                  <Typography variant="h6">{achievement.title}</Typography>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 512 509.64"
                >
                  <rect width="512" height="509.64" rx="115.61" ry="115.61" />
                  <path
                    fill="#fff"
                    d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"
                  />
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
      </ThemeProvider>
    </>
  );
};

export default Portfolio;
