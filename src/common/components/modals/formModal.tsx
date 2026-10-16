import { Button } from "@mui/material";
import { ButtonVariants } from "common/constants";
import React, { FC, FormEventHandler, ReactNode, useMemo } from "react";
import { ActionSection } from "./actionSection";
import { BaseModal } from "./baseModal";
import { ModalContent } from "./content";
import { HeaderSection } from "./headerSection";

type ActionBtnCallBack = (e: MouseEvent | React.MouseEvent) => void;

interface FormPropTypes {
  cancelLabel?: string,
  children: ReactNode,
  className?: string,
  contentProps?: {
    overflowY?: string,
  }
  disableSubmit: boolean,
  modalProps?: {
    overflowY?: string,
    width?: string,
  }
  onCancel?: ActionBtnCallBack,
  onClose: ActionBtnCallBack,
  onSubmit: FormEventHandler<HTMLFormElement>,
  open: boolean,
  submitLabel?: string,
  title: string | JSX.Element,
}

export interface IMemoTypes {
  _cancelCallback: ActionBtnCallBack,
  _cancelLabel: string,
  _submitLabel: string,
}

export const FormModal: FC<FormPropTypes> = ({
  cancelLabel,
  children,
  className,
  contentProps,
  disableSubmit,
  modalProps,
  onCancel,
  onClose,
  onSubmit,
  open,
  submitLabel,
  title,
}) => {
  const { _cancelCallback, _cancelLabel, _submitLabel } = useMemo((): IMemoTypes => ({
    _cancelCallback: onCancel ?? onClose,
    _cancelLabel: cancelLabel ?? "Cancel",
    _submitLabel: submitLabel ?? "Save",
  }), [cancelLabel, submitLabel, onCancel, onClose]);

  return (
    <BaseModal
      className={className}
      modalProps={modalProps}
      onClose={onClose}
      open={open}
    >
      <form onSubmit={onSubmit}>
        <HeaderSection label={title} onClose={onClose} />
        <ModalContent contentProps={contentProps}>
          {children}
        </ModalContent>
        <ActionSection>
          <Button variant={ButtonVariants.OUTLINED} color="info" onClick={_cancelCallback}>{_cancelLabel}</Button>
          <Button
            color="primary"
            disabled={disableSubmit}
            type="submit"
            variant={ButtonVariants.CONTAINED}
          >
            {_submitLabel}
          </Button>
        </ActionSection>
      </form>
    </BaseModal>
  );
};