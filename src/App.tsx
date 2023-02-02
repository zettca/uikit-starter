import { useState } from "react";
import {
  HvButton,
  HvProvider,
  HvTypography,
} from "@hitachivantara/uikit-react-core";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HvProvider uiKitTheme="wicked">
      <HvTypography variant="xlTitle">Vite + UI-Kit React ✨</HvTypography>
      <HvTypography variant="sTitle">
        Edit <code>App.tsx</code> and save to test HMR.
      </HvTypography>
      <br />
      <HvButton variant="outlined" onClick={() => setCount((c) => c + 1)}>
        count is {count}
      </HvButton>
    </HvProvider>
  );
}

export default App;
