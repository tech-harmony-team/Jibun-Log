import { ReactNode } from "react";

type Props = {
  type: "h1" | "h2";
  textAlignment: "center" | "left" | "right";
  children: ReactNode;
};

export default function PageHeader(props: Props) {
  const { type, textAlignment, children } = props;

  // typeによって、フォントサイズを変更
  const headerType = type === "h1" ? "text-4xl font-bold" : "text-2xl";

  // textAlignmentによって、テキストの位置を変更
  const alignmentType =
    textAlignment === "center"
      ? "text-center"
      : textAlignment === "right"
      ? "text-right"
      : "text-left";

  const style = `${headerType} ${alignmentType}`;

  if (type === "h1") {
    return <h1 className={style}>{children}</h1>;
  }
  return <h2 className={style}>{children}</h2>;
}
