import Topbar from "./scenes/global/topbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, useTheme, Box } from "@mui/material";
import Sidebar from "./scenes/global/sidebar"
import Dashboard from "./scenes/dashboard";
import DomainWiseCompliance from "./scenes/domainWiseCompliance";
import AssessmentBenchmark from "./scenes/assessmentBenchmark";
import System from "./scenes/system";
import ClientManagement from "./scenes/clientManagement";
import EvidanceManagement from "./scenes/evidanceManagement";
import DomainManagement from "./scenes/domainManagement";
import ProcessManagement from "./scenes/processManagement";
import Users from "./scenes/users";
import Pie from "./components/pieChart"
import Signup from "./scenes/signup"
import Login from "./scenes/login";




function App() {

  const theme = useTheme();
  return (

    <div className="app">


      <main className="content">

        <Topbar />




        <Router>
          <Box display="flex">

            <Box >

              <Sidebar />
            </Box>


            <Box m="4px" sx={{ display: "flex", width: "75%", flexDirection: "column" }}>

              <Routes >
                <Route path="/" element={<Dashboard />} />
                <Route path="/domainWiseCompliance" element={<DomainWiseCompliance />} />
                <Route path="/assessmentBenchmark" element={<AssessmentBenchmark />} />
                <Route path="/system" element={<System />} />
                <Route path="/clientManagement" element={<ClientManagement />} />
                <Route path="/evidanceManagement" element={<EvidanceManagement />} />
                <Route path="/domainManagement" element={<DomainManagement />} />
                <Route path="/processManagement" element={<ProcessManagement />} />
                <Route path="/users" element={<Users />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </main>
    </div>

  );
}

export default App;