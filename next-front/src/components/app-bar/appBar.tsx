import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function AppBar() {
  return (
    <div>
      <div className="w-full h-12 py-2 px-5 flex flex-row justify-center items-center bg-white drop-shadow-md z-50 fixed">
        <div className="w-3/4 h-full flex items-center">
          <h1 className="text-3xl font-bold">自分.log</h1>
        </div>
        <div className="w-1/4 h-full flex items-center justify-end">
          <button>
            <PersonOutlineIcon fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
}
