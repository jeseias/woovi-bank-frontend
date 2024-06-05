interface Props {
  prop: string;
  value: string;
}

export const PropValue = ({ prop, value }: Props) => {
  return (
    <div className="flex items-center justify-between w-full max-w-[300px]">
      <p className="text-sm">{prop}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
};
