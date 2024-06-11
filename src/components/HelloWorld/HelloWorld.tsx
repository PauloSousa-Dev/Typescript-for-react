import { FC, ReactElement } from "react";

export function HelloWorld({
  message,
}: {
  message: string;
}): ReactElement | null {
  return <div>A message: {message}</div>;
}

export const Message: FC<{ message: string }> = ({ children, message }) => {
  return <div>A message: {message}</div>;
};

function RenderComponent({ Comp }: { Comp: ComponentType }) {
    return (
      <div>
        <Comp />
      </div>
    );
  }
  
  const App = () => {
    return <RenderComponent Comp={<div>Hello!</div>}>
  }