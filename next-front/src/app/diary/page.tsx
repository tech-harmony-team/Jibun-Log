import PageHeader from "@/components/typography/pageHeader";

export default function DiaryPage() {
  return (
    <div className="w-4/5 max-w-600 h-full mx-auto pt-14 bg-stone-50">
      <PageHeader type="h1" textAlignment="left">
        日記
      </PageHeader>
      <h2 className=" text-4xl text-center">7/25 (木)</h2>
      <div className="h-4/5 py-5 flex flex-col items-center">
        <div>日記1</div>
        <div>日記2</div>
        <div>日記3</div>
      </div>
    </div>
  );
}
