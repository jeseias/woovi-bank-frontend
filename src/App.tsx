import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import { AuthProvider } from "./contexts/auth-content/auth-context";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_API_URL!,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
