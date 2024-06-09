import React, { BaseSyntheticEvent } from "react";

import { ReactComponent as LocationIcon } from "src/assets/header/locationIcon.svg";
import { ReactComponent as MailIcon } from "src/assets/header/mailIcon.svg";
import { ReactComponent as PhoneCallIcon } from "src/assets/header/phoneCallIcon.svg";
import { ReactComponent as CallUsIcon } from "src/assets/header/callUsIcon.svg";
import { ReactComponent as PlantSmallIcon } from "src/assets/hero/plantSmall.svg";
import { ReactComponent as BranchCuttingIcon } from "src/assets/services/branchCuttingIcon.svg";
import { ReactComponent as FlowerScapingIcon } from "src/assets/services/flowerScapingIcon.svg";
import { ReactComponent as GardenDesignIcon } from "src/assets/services/gardenDesignIcon.svg";
import { ReactComponent as GrassCuttingIcon } from "src/assets/services/grassCuttingIcon.svg";
import { ReactComponent as IrrigationIcon } from "src/assets/services/irrigationIcon.svg";
import { ReactComponent as PlantGrowingIcon } from "src/assets/services/plantGrowingIcon.svg";
import { ReactComponent as TreePlantingIcon } from "src/assets/services/treePlantingIcon.svg";
import { ReactComponent as WeedsControlIcon } from "src/assets/services/weedsControlIcon.svg";

import { IconType } from "src/types/enums";

const icons = {
  [IconType.location]: LocationIcon,
  [IconType.mail]: MailIcon,
  [IconType.phoneCall]: PhoneCallIcon,
  [IconType.callUs]: CallUsIcon,
  [IconType.plantSmall]: PlantSmallIcon,
  [IconType.branchCutting]: BranchCuttingIcon,
  [IconType.flowerScaping]: FlowerScapingIcon,
  [IconType.gardenDesign]: GardenDesignIcon,
  [IconType.grassCutting]: GrassCuttingIcon,
  [IconType.irrigation]: IrrigationIcon,
  [IconType.plantGrowing]: PlantGrowingIcon,
  [IconType.treePlanting]: TreePlantingIcon,
  [IconType.weedsControl]: WeedsControlIcon,
};

interface IconProps {
  className?: string;
  onClick?: (e: BaseSyntheticEvent) => void;
  id?: string;
}

export function getIcon(type: IconType): React.FC<IconProps> {
  return icons[type] as React.FC<IconProps>;
}
