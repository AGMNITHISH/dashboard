import { ChangeEvent } from "react";

export interface inputwithIcon {
  placeholder: string;
  name: string;
  value?: string | null | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
