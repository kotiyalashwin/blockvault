import FileForm from "@/components/fileform";
import { PreSignedURL } from "@/lib/actions/presignedurl";

export default async function Page() {
  // const url = await PreSignedURL();
  // console.log(url);
  return (
    <div>
      <FileForm />
    </div>
  );
}
