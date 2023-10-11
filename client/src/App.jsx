import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import DirectMessages from "./pages/DirectMessages";
import Dashboard from "./pages/private/Dashboard";
import Conversation from "./pages/private/Conversation";
import Server from "./pages/Server";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route index element={<Navigate replace to="channel" />} />
        <Route element={<AppLayout />}>
          <Route path="channel" element={<DirectMessages />}>
            <Route index element={<Navigate replace to="@me" />} />
            <Route path="@me" element={<Dashboard />} />
            <Route path="@me/:id" element={<Conversation />} />
          </Route>
          <Route path="server" element={<Server />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
