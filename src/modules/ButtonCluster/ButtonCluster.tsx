import { Button, Typography } from "@/components";

interface ButtonProps {
  title: string;
  href?: string;
  onClick?: () => void;
}

interface ButtonClusterProps {
  isStyled?: boolean;
  buttons: ButtonProps[];
  type?: string;
  styledVariant?: boolean;
}

export const ButtonCluster = ({ ...props }: ButtonClusterProps) => {
  return (
    <>
      {props.isStyled ? (
        <div className="flex flex-col items-center">
          {props.buttons.map((b, i) => (
            <span key={i} className="w-full my-1 text-center">
              <Button variant="styled" text={b.title} onClick={b.onClick} />
            </span>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-end">
          {props.buttons.map((b, i) => (
            <div className="my-2" key={i}>
              <Typography className="uppercase">{b.title}</Typography>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
