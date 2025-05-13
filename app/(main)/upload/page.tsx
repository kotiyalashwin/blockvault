import FileForm from "@/components/fileform";

export default async function Page() {
  return (
    <div>
      <div className="absolute w-full h-screen inset-0 opacity-35 hero-bg Z-0 " />
      <div className=" h-screen relative">
        <div className="flex justify-center h-full items-center">
          <div className="w-full max-w-3xl">
            <FileForm />
          </div>
        </div>
      </div>
    </div>
  );
}
