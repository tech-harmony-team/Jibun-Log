import TextField from "@mui/material/TextField";
import { FieldWrapper, FieldWrapperProps } from "./fieldWrapper";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

export type TextInputProps<T extends FieldValues> = UseControllerProps<T> &
  Pick<FieldWrapperProps, "label"> & {
    style?: React.CSSProperties;
		id:string,
    multiline?: boolean;
    rows?: number;
    fullWidth?: boolean;
		margin?: string;
  };

export const TextInput = <T extends FieldValues>({
  label,
	id,
  style,
  multiline,
  rows,
  fullWidth,
	margin,
  ...props
}: TextInputProps<T>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <FieldWrapper label={label} errorMessage={error?.message}>
      <TextField
        {...field}
				// idが機能していない
				id={id}
        style={style}
        multiline={multiline}
        rows={rows}
        fullWidth={fullWidth}
        margin={margin ? "none" : margin=="normal" ? "none" : "dense"}
      />
    </FieldWrapper>
  );
};