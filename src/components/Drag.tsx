import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  CSSProperties,
} from "react";

interface dragProps {
  id: number;
  children: any;
  width?: number;
  height?: number;
  position: {
    x: number;
    y: number;
  };
  limit: {
    x?: number;
    y?: number;
  };
}

const Drag = (props: dragProps) => {
  const { children, id, limit, width, height, position } = props;
  const [state, setState] = useState({
    isDragging: false,
    origin: { x: 0, y: 0 },
    translation: { x: position.x, y: position.y },
  });

  const handleMouseDown = useCallback(
    ({ clientX, clientY }) => {
      if (!width && !height) {
        return;
      }
      setState((state) => ({
        ...state,
        isDragging: true,
        origin: { x: clientX, y: clientY },
      }));
    },
    [width, height]
  );

  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      const translation = {
        x: clientX - state.origin.x + state.translation.x,
        y: clientY - state.origin.y + state.translation.y,
      };
      if (translation.x <= 0 && translation.y <= 0) {
        translation.x = 0;
        translation.y = 0;
      } else if (translation.x < 0) {
        translation.x = 0;
      } else if (translation.y < 0) {
        translation.y = 0;
      }

      if (limit.x && limit.y && width && height) {
        if (
          translation.x >= limit.x - width &&
          translation.y >= limit.y - height
        ) {
          translation.x = limit.x - width;
          translation.y = limit.y - height;
        } else if (translation.x >= limit.x - width) {
          translation.x = limit.x - width;
        } else if (translation.y >= limit.y - height) {
          translation.y = limit.y - height;
        }
      }

      setState((state) => ({
        ...state,
        translation,
      }));
    },
    [state.origin, limit.x, limit.y, width, height]
  );

  const handleMouseUp = useCallback(() => {
    setState((state) => ({
      ...state,
      isDragging: false,
    }));
  }, []);

  useEffect(() => {
    if (state.isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      setState((state) => ({
        ...state,
        translation: { x: state.translation.x, y: state.translation.y },
      }));
    }
  }, [state.isDragging, handleMouseMove, handleMouseUp]);

  const styles = useMemo(
    () =>
      ({
        position: "absolute",
        left: state.translation.x + "px",
        top: state.translation.y + "px",
        zIndex: state.isDragging ? 2 : "",
      } as CSSProperties),
    [state.isDragging, state.translation]
  );
  return (
    <div style={styles} onMouseDown={handleMouseDown} key={id}>
      {children}
    </div>
  );
};

export default Drag;
