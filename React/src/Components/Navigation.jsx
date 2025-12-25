import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
