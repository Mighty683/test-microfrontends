import { memo } from "react";

export interface FancyNameProps {
  name: string
};

export const FancyName = memo(({name}: FancyNameProps) => <p>{name}</p>);