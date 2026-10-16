import { DialogActions } from "@mui/material";
import { FC, ReactNode } from "react";

export interface IAction {
  children?: ReactNode | JSX.Element
}

export const ActionSection: FC<IAction> = ({
  children,
  ...rest
}: IAction) => <DialogActions {...rest}>
    {children}
  </DialogActions>;