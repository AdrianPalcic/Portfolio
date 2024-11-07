import Page from "./Page/Page"
import { useEffect } from "react";
function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Page />
    </>
  )
}

export default App
