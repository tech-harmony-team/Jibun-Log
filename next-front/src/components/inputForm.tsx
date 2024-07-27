import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "./textInput";

const schema = z.object({
	textInput: z.string().min(1, { message: "This field is required" }),
});

type Schema = z.infer<typeof schema>;

export const InputForm = () => {
	const { control, handleSubmit, reset, formState: {errors} } = useForm<Schema>({
		defaultValues: {
			textInput: "",
		},
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<Schema> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput control={control} name="textInput" label="タイトル"  />
			<button type="submit">Submit</button>
		</form>
	);
};