/** @module Tag */

import { Chip, type ChipProps } from "@mui/material";
import {
  COLOR_GRAY,
  SIZE_SMALL,
  SIZE_MEDIUM,
  VARIANT_FILLED,
  type Color,
  type Size,
  type Variant
} from "../data/colors";
import { useTheme } from "@mui/material/styles";

export type TagProps = {
  children: string;
  className?: string;
  color?: Color;
  variant?: Variant;
  size?: Size;
  onClick?: ChipProps["onClick"];
};

const Tag = (props: TagProps): React.JSX.Element => {
  const {
    className = "",
    children,
    color = COLOR_GRAY,
    variant = VARIANT_FILLED,
    size = SIZE_MEDIUM,
    onClick = undefined
  } = props;
  const theme = useTheme();

  // TODO: atp I think we can either ditch the theme, or we have to have a stricter requirement on theme usage.
  //    or even better, we should reconsider having sizes for our tags. The company type pill to me is no longer a 'tag'
  if (size === SIZE_SMALL) {
    const bg = theme.palette.neutrals?.gray?.main;
    const text = theme.palette.neutrals?.gray?.extraDark;
    return (
      <span
        className={`ac-tag-small ${className}`.trim()}
        style={{
          background: bg,
          color: text,
          fontSize: "0.75rem",
          padding: "0.25rem 0.5rem",
          borderRadius: "0.375rem",
          fontWeight: 500,
          display: "inline-block"
        }}
      >
        {children}
      </span>
    );
  }

  return (
    <Chip
      label={children}
      variant={variant}
      color={color as ChipProps["color"]}
      className={className}
      onClick={onClick}
      size={size}
    />
  );
};

export default Tag;
