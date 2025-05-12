export default function FileForm({ presigned }: { presigned: string | null }) {
  return (
    // <>
    <div className="container">
      <form
        action={async () => {
          "use server";

          console.log("presigned is : ", presigned);
        }}
      >
        {/* <input type="file" name="file" /> */}
        <button type="submit">Upload</button>
      </form>
    </div>
    // </>
  );
}
