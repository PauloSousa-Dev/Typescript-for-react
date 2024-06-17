import {
  CSSProperties,
  ComponentPropsWithoutRef,
  Dispatch,
  FC,
  ReactElement,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type VariantColors = "primary" | "secondary";
const Button = ({
  variantColor,
  style,
  ...props
}: {
  variantColor?: VariantColors;
} & ComponentPropsWithoutRef<"button">) => {
  const innerStyle = {
    ...style,
    color: "white",
    backgroundColor:
      variantColor === "primary" ? "rgb(26,100,255)" : "rgb(170,170,170)",
  };
  return <button style={innerStyle} {...props} />;
};

// Basic Props
const Counter = ({ count }: { count: number }) => {
  return <h1>Count: {count}</h1>;
};
const CounterButtons = ({
  setCount,
}: {
  setCount: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div>
      <Button
        variantColor="primary"
        onClick={() => setCount((count) => count - 1)}
      >
        -
      </Button>
      <Button onClick={() => setCount((count) => count + 1)}>+</Button>
    </div>
  );
};

// Children Prop & Style Prop
const Tooltip = ({
  children,
  contents,
  style,
}: {
  contents: ReactNode;
  style?: CSSProperties;
  children: ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          ...style,
          display: hovered ? "block" : "none",
          position: "absolute",
          top: "100%",
        }}
      >
        {contents}
      </div>
      {children}
    </div>
  );
};

// Render Props
const MousePosition = ({
  children,
}: {
  children: ({ x, y }: { x: number; y: number }) => ReactElement;
}) => {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(event: MouseEvent) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
    document.addEventListener("mousemove", onMove);
    return () => {
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return children(mousePosition);
};

// Don't change anything below this point
// Any of the red squiggles down here will
// go away once you fix the issues above.
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>See the instructions in the code editor.</div>
      <Tooltip contents="Counter Tooltip">
        <Counter count={count} />
      </Tooltip>
      <CounterButtons setCount={setCount} />
      <MousePosition>
        {({ x, y }) => (
          <Tooltip
            style={{
              border: "solid 1px rgba(255,255,255,0.2)",
              padding: "6px",
              borderRadius: "3px",
            }}
            contents={
              <span style={{ color: "red" }}>Mouse Position Tooltip</span>
            }
          >
            <h2>
              Mouse Position: {x}, {y}
            </h2>
          </Tooltip>
        )}
      </MousePosition>
    </div>
  );
}
