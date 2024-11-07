import { ReactNode } from "react";

const CardsGrid = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {children}
    </div>
  );
};

export default CardsGrid;
