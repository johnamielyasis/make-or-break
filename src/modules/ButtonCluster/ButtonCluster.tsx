import { Typography } from "@/components";

interface ButtonProps {
  title: string;
  href?: string;
}

interface ButtonClusterProps {
  buttons: ButtonProps[];
  type?: string;
}
export const ButtonCluster = ({ ...props }: ButtonClusterProps) => {
  return (
    <div className="flex flex-col items-end">
      {props.buttons.map((b, i) => (
        <div className="my-2" key={i}>
          <Typography className="uppercase">{b.title}</Typography>
        </div>
      ))}
    </div>
  );
};
