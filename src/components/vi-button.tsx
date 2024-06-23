import { PropsWithChildren } from "react";
import { Button, ButtonProps } from "./ui/button";

interface Props {
  isLoading?: boolean;
}

export const ViButton = ({
  isLoading,
  children,
  ...rest
}: PropsWithChildren<ButtonProps & Props>) => {
  return (
    <Button {...rest}>
      {isLoading && <p>Loading...</p>}
      {}
      {!isLoading && children}
    </Button>
  );
};
