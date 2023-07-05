import { FC } from "react";

interface IProps {
  text: string
}

export const TextForLands: FC<IProps> = ({text}) => {
  return (
    <div className="exchange__text">
      {text}
    </div>
  );
};
