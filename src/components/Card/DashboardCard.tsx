import { FC } from "react";
import { Paper, Stack, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

type DashboardCardProps = {
  title: string;
  text: string;
  linkTo: string;
};

// TODO: style to match designs
export const DashboardCard: FC<DashboardCardProps> = ({
  title,
  text,
  linkTo,
}) => {
  const theme = useTheme();

  return (
    <Paper elevation={4}>
      <Stack>
        <div>
          <p>{title}</p>
        </div>
        <div style={{ padding: theme.spacing(1, 2) }}>
          <p>{text}</p>
        </div>
        <Stack
          style={{ padding: theme.spacing(1, 2) }}
          direction={"row"}
          justifyContent={"flex-end"}
        >
          <Link to={linkTo}>More</Link>
        </Stack>
      </Stack>
    </Paper>
  );
};
