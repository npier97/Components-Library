import { Box } from "../Layout";
import { Text } from "../Text";

interface BrandProps {
  logo: string | React.ReactNode;
  brand?: string;
  href?: string;
}

export const Brand = ({ logo, brand, href }: BrandProps) => {
  if (!logo && !brand) return null;

  return (
    <a href={href} aria-label="Go to the homepage">
      <Box className="pr-6 flex gap-2 items-center">
        {logo}
        {brand && <Text>{brand}</Text>}
      </Box>
    </a>
  );
};
