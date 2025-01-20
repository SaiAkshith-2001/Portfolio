import {
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({
  dialogOpen,
  setDialogOpen,
  project,
  iconColor,
  getImageByURL,
}) => {
  return (
    <Box>
      {dialogOpen && (
        <Dialog
          fullWidth
          maxWidth="md"
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
        >
          <DialogTitle>
            <Typography sx={{ fontSize: "1.75rem", fontWeight: "bold" }}>
              {project?.title}
            </Typography>
          </DialogTitle>
          <IconButton
            onClick={() => setDialogOpen(false)}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
          <CardMedia
            component="img"
            height="200px"
            image={getImageByURL(project?.image)}
            alt={project?.title}
          />
          <DialogContent dividers>
            <Typography>{project?.description}</Typography>
            <Stack
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
                py: 2,
                gap: 0.75,
              }}
            >
              {project?.technologies?.map((tech) => (
                <Chip label={tech} key={tech} />
              ))}
            </Stack>
          </DialogContent>
          <DialogActions>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                p: 2,
                gap: 2,
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                color="black"
                href={project?.githuburl}
                sx={{
                  width: "100%",
                  alignItems: "center",
                  gap: 1,
                  textTransform: "none",
                }}
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
                See more on GitHub
              </Button>
              <Button
                variant="contained"
                color="success"
                href={project?.deployedurl}
                sx={{
                  width: "100%",
                  alignItems: "center",
                  gap: 1,
                  textTransform: "none",
                }}
              >
                <SvgIcon>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M11 4H4V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13"
                        stroke="#292929"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                      <path
                        d="M9 15L20 4"
                        stroke="#292929"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                      <path
                        d="M15 4H20V9"
                        stroke="#292929"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </g>
                  </svg>
                </SvgIcon>
                Live URL
              </Button>
            </Box>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};
export default Modal;
