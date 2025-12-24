import "../index.css";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Login() {
  return /*#__PURE__*/_jsx("section", {
    className: "container",
    children: /*#__PURE__*/_jsxs("section", {
      className: "login-form",
      children: [/*#__PURE__*/_jsx("h1", {
        children: "Login"
      }), /*#__PURE__*/_jsx("label", {
        htmlFor: "",
        children: "Username"
      }), /*#__PURE__*/_jsx("input", {
        type: "text",
        placeholder: "Enter your username",
        name: "username"
      }), /*#__PURE__*/_jsx("label", {
        htmlFor: "",
        children: "Password"
      }), /*#__PURE__*/_jsx("input", {
        type: "password",
        placeholder: "Enter your password",
        name: "password"
      }), /*#__PURE__*/_jsx("a", {
        href: "http://",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Don't have an Account? Create Account"
      }), /*#__PURE__*/_jsx("button", {
        children: "Login"
      })]
    })
  });
}