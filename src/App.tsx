import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import { AuthProvider } from "./contexts/auth-context";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "./lib/environment";

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </RelayEnvironmentProvider>
  );
}

export default App;
