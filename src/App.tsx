import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

export const App = () => (
  <Stack alignItems="center" maxWidth="920px" mx="auto" gap={2}>
    <Typography variant="h1" align="center">
      Template
    </Typography>
    <Skeleton variant="rounded" width="100%" height="200px" animation="wave" />
  </Stack>
);
