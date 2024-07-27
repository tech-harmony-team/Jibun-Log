export type ButtonProps = {
	label: string;
	fontsize: string;
	color: string;
	backgroundColor?: string;
	Icon: React.ElementType;
  onClick?: () => void;
};

// template

// const checkIcon: React.FC<ButtonProps> = () => (
//   <CircleButton
//     label="登録"
//     fontsize="50px"
//     color="#fff"
//     backgroundColor="#1A85D1"
//     Icon={CheckRounded}
//   />
// )

// const addIcon: React.FC<ButtonProps> = () => (
// 	<CircleButton
// 		label="日記を書く"
// 		fontsize="50px"
// 		color="#fff"
// 		backgroundColor="#60D11A"
// 		Icon={AddRounded} />
// )

// const favoriteIcon: React.FC<ButtonProps> = () => (
// 	<CircleButton
// 		label="お気に入り"
// 		fontsize="50px"
// 		color="#fff"
// 		backgroundColor="#F08810"
// 		Icon={FavoriteRounded} />
// )

// const nextIcon: React.FC<ButtonProps> = () => (
// 	<CircleButton
// 		label="次へ"
// 		fontsize="50px"
// 		color="#fff"
// 		backgroundColor="#60D11A"
// 		Icon={ChevronRightRounded} />
// )