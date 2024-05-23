import { ChangeEvent } from "react";
import { IconType } from "react-icons";

export interface inputwithIcon {
  placeholder: string;
  name: string;
  value?: string | null | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface metricsCard {
  name: string;
  value: number;
  icon: any;
  percenatageValue: number;
  lastUpdated: string;
  status: string;
  iconClassName: string;
}
