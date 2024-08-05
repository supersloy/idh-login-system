import { Button, Modal } from "antd";
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
    <Modal
      open={open}
      onOk={close}
      onCancel={close}
      footer={[
        <Button key="back" onClick={close}>
          {t("requireAuth.return")}
        </Button>,
      ]}
      title={t("requireAuth.text")}
    >
      {/* {t("requireAuth.text")} */}
    </Modal>
  );
}
