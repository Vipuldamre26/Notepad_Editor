import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/editor";
import "./App.css";
import Notepad from "./screen/Notepad";

function App() {
  return (
    <div className="App">
      {/* <Notepad /> */}
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </div>
  );
}

export default App;
