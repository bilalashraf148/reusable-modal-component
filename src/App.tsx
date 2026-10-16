import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  ErrorModal,
  FormModal,
  TransactionalModal,
} from "./common/components/modals";

type ActiveModal = "error" | "form" | "transaction" | null;

export default function App() {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const closeModal = () => setActiveModal(null);

  return (
    <Box sx={{ minHeight: "100vh", py: { xs: 6, sm: 10 } }}>
      <Container maxWidth="md">
        <Typography
          color="secondary.main"
          sx={{ fontWeight: 700, letterSpacing: "0.12em", mb: 2 }}
          variant="overline"
        >
          Component playground
        </Typography>
        <Typography component="h1" sx={{ maxWidth: 640, mb: 2 }} variant="h2">
          Reusable modal components
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 560 }}>
          Open each dialog to explore its layout, actions, and content behavior.
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
          <Button onClick={() => setActiveModal("transaction")} variant="contained">
            Transaction
          </Button>
          <Button onClick={() => setActiveModal("form")} variant="outlined">
            Form
          </Button>
          <Button color="error" onClick={() => setActiveModal("error")} variant="outlined">
            Error
          </Button>
        </Stack>
      </Container>

      <TransactionalModal
        onAccept={closeModal}
        onCancel={closeModal}
        onClose={closeModal}
        open={activeModal === "transaction"}
        title="Publish changes?"
      >
        <Typography>
          Your updates will become visible to everyone with access to this workspace.
        </Typography>
      </TransactionalModal>

      <FormModal
        disableSubmit={false}
        onClose={closeModal}
        onSubmit={event => {
          event.preventDefault();
          closeModal();
        }}
        open={activeModal === "form"}
        title="Edit profile"
      >
        <Stack spacing={2}>
          <TextField autoFocus label="Name" defaultValue="Alex Morgan" fullWidth />
          <TextField label="Email" defaultValue="alex@example.com" fullWidth />
        </Stack>
      </FormModal>

      <ErrorModal
        errors={[
          {
            name: "Profile validation",
            message: "A required field is missing.",
          },
        ]}
        onClose={closeModal}
        open={activeModal === "error"}
        variant="custom"
      />
    </Box>
  );
}