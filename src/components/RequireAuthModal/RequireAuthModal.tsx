import { Button, Modal } from "@mantine/core";
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
    <Modal opened={open} onClose={close} title={t("requireAuth.text")}>
      <Button key="back" onClick={close}>
        {t("requireAuth.return")}
      </Button>
      {/* {t("requireAuth.text")} */}
    </Modal>
  );
}
