import ErrorIcon from "@mui/icons-material/Error";
import { Box, Button, Typography } from "@mui/material";
import { ButtonVariants } from "common/constants";
import React, { FC, Fragment, useMemo } from "react";
import { ActionSection } from "./actionSection";
import { BaseModal } from "./baseModal";
import { ModalContent } from "./content";
import { HeaderSection } from "./headerSection";

type ActionBtnCallBack = (e: MouseEvent | React.MouseEvent) => void;

interface Errors {
  cpn?: string;
  extensions?: {
    exception: any
  }
  message?: string | JSX.Element;
  name?: string;
}

interface PropTypes {
  confirmLabel?: string,
  errors: Errors[] | undefined,
  onClose: ActionBtnCallBack,
  onConfirm?: ActionBtnCallBack,
  open: boolean,
  title?: string | JSX.Element,
  variant?: string,
}

interface MemoTypes {
  _confirmLabel: string,
  _title: string | JSX.Element,
}

export const ErrorModal: FC<PropTypes> = ({
  confirmLabel,
  errors,
  onClose,
  onConfirm,
  open,
  title,
  variant,
}) => {
  const isCustomVariant: boolean = variant === "custom";
  const { _title, _confirmLabel } = useMemo((): MemoTypes => ({
    _confirmLabel: confirmLabel ?? (isCustomVariant ? "Got it" : "OK"),
    _title: title
      ?? (isCustomVariant ? "Errors Found" : "We found the following error(s)"),
  }), [title, confirmLabel, isCustomVariant]);

  const header: JSX.Element = useMemo(() =>
    <Fragment>
      <Box
        sx={{
          display: "flex",
          alignItem: "center",
        }}
      >
        {isCustomVariant && <ErrorIcon color="error" sx={{ marginRight: "0.625rem" }} />}
        <Typography>{_title}</Typography>
      </Box>
      {
        !isCustomVariant
          ? <Box
            sx={{
              marginTop: "0.625rem",
            }}
          >
            <Typography>Please address them before continuing</Typography>
          </Box> : null
      }
    </Fragment>, [_title, isCustomVariant]);

  const body: React.ReactNode = useMemo(() => errors?.map((item, i) => {
    let { fieldToErrors } = item.extensions?.exception ?? {};
    if (fieldToErrors) {
      fieldToErrors = Object.keys(fieldToErrors).flatMap(key => fieldToErrors[key].map((message: string) =>
        `${key}: ${message}`));
    }
    return (
      <Fragment key={i}>
        {item.name && (
          <Typography>
            {`${item.cpn} | ${item.name} `}
            {item.message}
          </Typography>
        )}

        {fieldToErrors?.map((message: string, index: number) => (
          <Typography key={index}>
            {message}
          </Typography>
        ))}

        {!item.name && !fieldToErrors && <Typography>{item.message}</Typography>}
      </Fragment>
    );
  }), [errors]);

  return <BaseModal
    onClose={onClose}
    open={open}
  >
    <HeaderSection
      label={header}
      onClose={onClose}
    />
    <ModalContent>
      {body}
    </ModalContent>
    <ActionSection>
      <Button variant={ButtonVariants.CONTAINED} color="error" onClick={onConfirm ?? onClose}>
        {_confirmLabel}
      </Button>
    </ActionSection>
  </BaseModal>;
};