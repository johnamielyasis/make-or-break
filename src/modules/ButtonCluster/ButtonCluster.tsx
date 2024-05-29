import { Button, Typography } from "@/components";

interface ButtonProps {
  title: string;
  href?: string;
  function?: Function;
}

interface ButtonClusterProps {
  buttons: ButtonProps[];
  type?: string;
  isStyled?: boolean;
  styledVariant?: boolean;
}
export const ButtonCluster = ({ isStyled, ...props }: ButtonClusterProps) => {
  return (
    <>
      {isStyled ? (
        <div className="flex flex-col items-center">
          {props.buttons.map((b, i) => (
            <Button variant="black" text={b.title} key={i} />
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
