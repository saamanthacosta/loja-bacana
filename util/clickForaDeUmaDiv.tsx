import { useEffect } from "react";

const clickForaDeUmaDiv = (fecharItem: () => void, ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const clickForaDaDiv = (e: MouseEvent) => {
      if (ref && ref.current && !ref.current.contains(e.target as Element)) {
        fecharItem();
      }
    };
    document.addEventListener("click", clickForaDaDiv, true);
    return () => {
      document.removeEventListener("click", clickForaDaDiv, true);
    };
  }, [fecharItem, ref]);
};

export default clickForaDeUmaDiv;
