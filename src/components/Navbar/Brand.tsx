import { Box } from "../Layout";

interface BrandProps {
  logo: string | React.ReactNode;
  brand?: string;
}

export const Brand = ({ logo, brand }: BrandProps) => {
  if (!logo && !brand) return null;

  return (
    <Box className="pr-6 flex gap-2">
      {logo && <Box>{logo}</Box>}
      {brand && <Box>{brand}</Box>}
    </Box>
  );
};
