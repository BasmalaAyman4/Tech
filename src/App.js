
import NavbarMenu from './Global/Navbar/NavbarMenu';
import Router from './Router/Router';
import { AuthProvider } from "./Context/AuthContext";
function App() {
  return (
    <>
    <NavbarMenu />
    <Router />
    </>
  );
}

function AppWithStore() {
  return (<AuthProvider>
    <App />
  </AuthProvider>);
}

export default AppWithStore;
