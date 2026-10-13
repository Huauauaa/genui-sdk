import * as AntdIcons from '@ant-design/icons';
import type { ComponentType } from 'react';

const iconMap = AntdIcons as unknown as Record<string, ComponentType | undefined>;

export interface AntIconProps {
  name?: string;
}

export function AntIcon({ name }: AntIconProps) {
  const IconComponent = iconMap[name];

  return IconComponent ? <IconComponent /> : null;
}
