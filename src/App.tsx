import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import { AuthProvider } from "./contexts/auth-context";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
