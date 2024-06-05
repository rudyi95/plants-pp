import React, { BaseSyntheticEvent } from "react";

import { ReactComponent as LocationIcon } from "src/assets/header/locationIcon.svg";
import { ReactComponent as MailIcon } from "src/assets/header/mailIcon.svg";
import { ReactComponent as PhoneCallIcon } from "src/assets/header/phoneCallIcon.svg";
import { ReactComponent as CallUsIcon } from "src/assets/header/callUsIcon.svg";
import { ReactComponent as PlantSmallIcon } from "src/assets/hero/plantSmall.svg";

import { IconType } from "src/types/enums";

const icons = {
  [IconType.location]: LocationIcon,
  [IconType.mail]: MailIcon,
  [IconType.phoneCall]: PhoneCallIcon,
  [IconType.callUs]: CallUsIcon,
  [IconType.plantSmall]: PlantSmallIcon,
};

interface IconProps {
  className?: string;
  onClick?: (e: BaseSyntheticEvent) => void;
  id?: string;
}

export function getIcon(type: IconType): React.FC<IconProps> {
  return icons[type] as React.FC<IconProps>;
}
