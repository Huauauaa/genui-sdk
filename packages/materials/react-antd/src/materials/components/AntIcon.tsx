import { iconMap } from './icon-map';

export interface AntIconProps {
  /** 图标名称
  name?: string;
  /**
   * 其余属性（className、style、data-* 以及渲染器注入的 css 作用域属性等）
   * 会原样透传给底层图标组件。
   */
  [key: string]: unknown;
}

export function AntIcon({ name = '', ...rest }: AntIconProps) {
  const IconComponent = iconMap[name];

  return IconComponent ? <IconComponent {...rest} /> : null;
}
