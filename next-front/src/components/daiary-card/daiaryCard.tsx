"use client";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DiaryData } from "@/types/daiaryData";

type Props = {
  edit: boolean;
  diaryData: DiaryData;
};

export default function DiaryCard(props: Props) {
  const { edit, diaryData } = props;
  return (
    <div className="w-80 h-auto p-2 bg-white drop-shadow-md rounded-md flex flex-col">
      <div className="h-10 flex flex-row">
        <div className="w-2/3 flex items-center">
          <h1 className="text-2xl font-bold">{diaryData.actionName}</h1>
        </div>
        <div className="w-1/3 flex justify-end items-center">
          <p className="text-sm">
            {diaryData.startTime}〜{diaryData.endTime}
          </p>
        </div>
      </div>
      <div className="h-auto">
        <p className="text-xl">{diaryData.actionDetail}</p>
      </div>
      {edit && (
        <div className="h-12 flex flex-row">
          <div className="w-1/2 flex justify-center items-center">
            <button className="bg-white hover:bg-slate-100 text-red-button border border-solid border-red-button font-bold py-2 px-4 rounded-md">
              <DeleteOutlineIcon />
            </button>
          </div>

          <div className="w-1/2 flex justify-center items-center">
            <button className="bg-white hover:bg-slate-100 text-green-button border border-solid border-green-button font-bold py-2 px-4 rounded-md">
              <EditIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
