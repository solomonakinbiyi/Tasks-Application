import React, { FC, ReactNode } from "react";

interface IComposeConetxt {
  components?: FC<{ children?: ReactNode }>[];
  children?: ReactNode | undefined;
}

export default function ComposeContext(props: IComposeConetxt) {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, Comp: any) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
}
