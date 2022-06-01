import { FC } from "react";
import { Paper, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

type DashboardCardProps = {
  title: string;
  text: string;
  linkTo: string;
};

export const DashboardCard: FC<DashboardCardProps> = ({
  title,
  text,
  linkTo,
}) => {
  const theme = useTheme();

  return (
    <Paper elevation={4} sx={{ width: "100%" }}>
      <div
        style={{
          padding: theme.spacing(1, 2),
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.getContrastText(theme.palette.secondary.main),
        }}
      >
        <p>{title}</p>
      </div>
      <div style={{ padding: theme.spacing(1, 2) }}>
        <p>{text}</p>
      </div>
      <div style={{ padding: theme.spacing(1, 2) }}>
        <Link to={linkTo}>More</Link>
      </div>
    </Paper>
  );
};
