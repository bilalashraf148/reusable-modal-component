import { Dialog, styled } from "@mui/material";
import { FC, ReactElement, ReactNode } from "react";

export interface IModalProps {
  overflowY?: string,
  width?: string,
}

export interface IBaseModalTypes {
  children?: ReactNode | JSX.Element | ReactElement,
  className?: string,
  modalProps?: IModalProps,
  onClose: (e: MouseEvent | React.MouseEvent<SVGSVGElement, MouseEvent>) => void,
  open: boolean,
}

const Modal: FC<IBaseModalTypes> = ({
  children,
  onClose,
  open,
  ...others
}) => (
  <Dialog
    onClose={onClose}
    open={open}
    {...others}
  >
    {children}
  </Dialog>
);

export const BaseModal = styled(Modal, {
  shouldForwardProp: prop => prop !== "modalProps",
})(({ modalProps, theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: theme.duro.dialogModal.backgroundColor,
    backgroundImage: "none",
    borderRadius: "0.5rem",
    boxShadow: "none",
    margin: "2rem",
    maxWidth: modalProps?.width ?? "24rem",
    overflowY: modalProps?.overflowY ?? "auto",
    padding: "1rem",
    width: "100%",
  },
  "& .MuiBackdrop-root": {
    background: theme.duro.dialogModal.backdropColor,
  },
}));