import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

// Custom styled LinearProgress
const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== "status",
})(({ theme, status }) => {
  let barColor;
  switch (status) {
    case "bad":
      barColor = "#f00";
      break;
    case "low":
      barColor = "#ff5252";
      break;
    case "good":
      barColor = "#1a90ff";
      break;
    case "success":
      barColor = "#008080";
      break;
    default:
      barColor = theme.palette.primary.main;
  }

  return {
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles?.("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: barColor,
      ...theme.applyStyles?.("dark", {
        backgroundColor: "#3872fa",
      }),
    },
  };
});

const ProgressBar = ({ fillBy, status }) => {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <BorderLinearProgress
        variant="determinate"
        value={fillBy}
        status={status}
      />
    </Stack>
  );
};

export default ProgressBar;
