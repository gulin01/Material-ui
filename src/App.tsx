import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { MuiTypography } from "./componants/MuiTypography";
// import { MuiButton } from "./componants/MuiButton";
// import { MuiTextField } from "./componants/MuiTextField";
// import { MuiSelect } from "./componants/MuiSelect";
// import { MuiTable } from "./componants/MuiTable";
// import { MuiPicker } from "./componants/MuiPicker";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiTable /> */}
        {/* <MuiPicker /> */}
      </div>
    </LocalizationProvider>
  );
}

export default App;
