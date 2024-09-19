import { Button, Modal, Stack, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

type RequireAuthModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function RequireAuthModal({
  open,
  setOpen,
}: RequireAuthModalProps) {
  const close = () => setOpen(false);
  const { t } = useTranslation();

  return (
    <Modal opened={open} onClose={close} withCloseButton={false} centered>
      <Stack>
        <Text fw={400} size="xl">
          {t("requireAuth.text")}
        </Text>
        <Button key="back" onClick={close}>
          {t("requireAuth.return")}
        </Button>
      </Stack>
    </Modal>
  );
}
