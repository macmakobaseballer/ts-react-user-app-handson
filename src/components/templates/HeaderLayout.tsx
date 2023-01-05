import { memo, ReactNode, FC } from "react";

import { Header } from "../organizm/layout/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
