import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

type Props = {
  edit: boolean;
};

export default function DiaryCard(props: Props) {
  const { edit } = props;
  return (
    <div className="w-80 h-80 p-2 bg-white drop-shadow-md rounded-md flex flex-col">
      <div className="h-1/5 flex flex-row">
        <div className="w-2/3 flex items-center">
          <h1 className="text-2xl font-bold">タイトルが長い時はどうなるか？</h1>
        </div>
        <div className="w-1/3 flex justify-end items-center">
          <p className="text-sm">10:00~12:00</p>
        </div>
      </div>
      <div className="h-3/5">
        <p className="text-xl">
          日記の内容が入ります。日記の内容が入ります。日記の内容が入ります。日記の内容が入ります。日記の内容が入ります。日記の内容が入ります。
        </p>
      </div>
      {edit && (
        <div className="h-1/5 flex flex-row">
          <div className="w-1/2 flex justify-center items-center">
            <button className="bg-white hover:bg-slate-100 bg-red-button text-red-button border border-solid border-red-button font-bold py-2 px-4 rounded-md">
              <DeleteOutlineIcon />
            </button>
          </div>

          <div className="w-1/2 flex justify-center items-center">
            <button className="bg-white hover:bg-slate-100 bg-green-button text-green-button border border-solid border-green-button font-bold py-2 px-4 rounded-md">
              <EditIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
