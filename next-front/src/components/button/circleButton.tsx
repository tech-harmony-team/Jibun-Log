import { Margin, Padding } from '@mui/icons-material';
import { ButtonProps } from '../../types/buttonType'; 

export const CircleButton: React.FC<ButtonProps> = ({
	label,
	fontsize,
	color,
	backgroundColor,
	Icon,
}) => {

	return (
		<button className='flex flex-col items-center text-black text-sm p-2'>
			<Icon style={{ color: color, borderRadius: '50%', ...(backgroundColor ? { backgroundColor } : {}), padding: "10%", fontSize: fontsize }}/>
			{label}
		</button>
  );
}