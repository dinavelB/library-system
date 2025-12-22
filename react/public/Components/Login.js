import { useState } from "react";
import "../index.css";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Login() {
  return /*#__PURE__*/_jsx("section", {
    className: "container",
    children: /*#__PURE__*/_jsxs("section", {
      className: "createacc-form",
      children: [/*#__PURE__*/_jsx("div", {
        children: /*#__PURE__*/_jsx("p", {
          children: "Admin"
        })
      }), /*#__PURE__*/_jsx("h1", {
        children: "Create Account"
      }), /*#__PURE__*/_jsx("label", {
        htmlFor: "",
        children: "Username"
      }), /*#__PURE__*/_jsx("input", {
        type: "text",
        placeholder: "Enter your username"
      }), /*#__PURE__*/_jsx("label", {
        htmlFor: "",
        children: "Email"
      }), /*#__PURE__*/_jsx("input", {
        type: "email",
        placeholder: "Enter your email"
      }), /*#__PURE__*/_jsx("label", {
        htmlFor: "",
        children: "Password"
      }), /*#__PURE__*/_jsx("input", {
        type: "password",
        placeholder: "Enter your password"
      }), /*#__PURE__*/_jsx("a", {
        href: "http://",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Already have an account? Login"
      }), /*#__PURE__*/_jsx("button", {
        children: "Create"
      })]
    })
  });
}