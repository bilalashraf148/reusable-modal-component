import CloseIcon from "@mui/icons-material/Close";
import { DialogTitle } from "@mui/material";
import { FC, ReactElement, ReactNode } from "react";

export interface IHeader {
  children?: ReactNode | JSX.Element | ReactElement,
  label?: String | JSX.Element,
  onClose: (e: MouseEvent | React.MouseEvent<SVGSVGElement, MouseEvent>) => void,
  showCrossIcon?: boolean,
}

export const HeaderSection: FC<IHeader> = ({
  children,
  label,
  onClose,
  showCrossIcon,
  ...rest
}: IHeader) => <DialogTitle {...rest}>
    {
      children
      ?? <>
        {label}
        {showCrossIcon && <CloseIcon
          sx={{
            position: "absolute",
            top: 15,
            right: 10,
          }}
          onClick={onClose}
        />
        }
      </>
    }
  </DialogTitle>;