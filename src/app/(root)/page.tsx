import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto p-4">
        <Header />
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 mr-2 ml-2 ">
        <EditorPanel />

        <OutputPanel />
      </div>
    </div>
  );
}
