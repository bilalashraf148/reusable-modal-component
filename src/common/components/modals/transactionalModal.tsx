import { Button } from "@mui/material";
import { ButtonVariants } from "common/constants";
import React, { FC, ReactNode, useMemo } from "react";
import { ActionSection } from "./actionSection";
import { BaseModal } from "./baseModal";
import { ModalContent } from "./content";
import { HeaderSection } from "./headerSection";

type ActionBtnCallBack = (e: MouseEvent | React.MouseEvent) => void;

interface PropTypes {
  acceptLabel?: string,
  cancelLabel?: string,
  children: ReactNode,
  onAccept: ActionBtnCallBack,
  onCancel: ActionBtnCallBack,
  onClose: ActionBtnCallBack,
  open: boolean,
  title: string | JSX.Element,
  variant?: "standard" | "danger",
}

interface MemoTypes {
  acceptBtnColor: "primary" | "error",
  acceptBtnText: string,
  cancelBtnText: string,
}

export const TransactionalModal: FC<PropTypes> = ({
  acceptLabel,
  cancelLabel,
  children,
  onAccept,
  onCancel,
  onClose,
  open,
  title,
  variant = "standard",
}) => {
  const { acceptBtnColor, acceptBtnText, cancelBtnText } = useMemo((): MemoTypes => ({
    acceptBtnColor: variant === "danger" ? "error" : "primary",
    acceptBtnText: acceptLabel ?? "Yes",
    cancelBtnText: cancelLabel ?? "No",
  }), [variant, acceptLabel, cancelLabel]);

  return (
    <BaseModal
      onClose={onClose}
      open={open}
    >
      <HeaderSection label={title} onClose={onClose} />
      <ModalContent>
        {children}
      </ModalContent>
      <ActionSection>
        <Button variant={ButtonVariants.OUTLINED} onClick={onCancel} color="info">{cancelBtnText}</Button>
        <Button
          color={acceptBtnColor}
          onClick={onAccept}
          variant={ButtonVariants.CONTAINED}
        >
          {acceptBtnText}
        </Button>
      </ActionSection>
    </BaseModal>
  );
};