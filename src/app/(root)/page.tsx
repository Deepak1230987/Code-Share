import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import InputPanel from "./_components/InputPanel";
import OutputPanel from "./_components/OutputPanel";

export default function Home() {
  return (
    <div className="min-h-screen">
    <div className="mx-auto p-4">
      <Header />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mr-2 ml-2">
      <div className="col-span-1 lg:col-span-2"> {/* Editor Panel on the left */}
        <EditorPanel />
      </div>
      <div className="flex flex-col col-span-1 gap-0.5"> {/* Input and Output Panels on the right */}
        <InputPanel />
        <OutputPanel />
      </div>
    </div>
  </div>
  );
}
