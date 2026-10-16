import { DialogContent, styled } from "@mui/material";
import { FC, ReactElement, ReactNode } from "react";

export interface IContentProps {
  overflowY?: string,
}

export interface ModalContentProps {
  children?: ReactNode | ReactElement,
  contentProps?: IContentProps,
}

export const ModalContent: FC<ModalContentProps> = ({
  children,
  contentProps,
  ...rest
}) => <CustomContentSection contentProps={contentProps} {...rest}>
    {children}
  </CustomContentSection>;

const CustomContentSection = styled(DialogContent, {
  shouldForwardProp: prop => prop !== "contentProps",
})<any>(({ contentProps }) => ({
  overflowY: contentProps?.overflowY ?? "auto",
}));