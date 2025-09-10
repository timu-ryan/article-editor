import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import examplePng from '@/assets/png-example.png';
import exampleJpg from '@/assets/jpg-example.jpg';
import ExampleSvg from '@/assets/svg-example.svg';
export var App = function () {
    var _a = useState(0), counter = _a[0], setCounter = _a[1];
    function handleClick() {
        setCounter(function (counter) { return counter + 1; });
    }
    return (_jsxs(_Fragment, { children: [_jsxs("h1", { children: ["PLATFORM: ", __PLATFORM__] }), _jsxs("div", { children: [_jsx("img", { width: 200, src: examplePng, alt: 'example image' }), _jsx("img", { width: 200, src: exampleJpg, alt: 'example image' }), _jsx(ExampleSvg, { style: { color: 'green' }, width: 200, height: 200 })] }), _jsx(Link, { to: "/about", children: "about" }), _jsx(Link, { to: "/shop", children: "shop" }), _jsx("div", { children: "Hello world" }), _jsx("div", { children: counter }), _jsx("button", { className: classes.button, onClick: handleClick, children: "add 1" }), _jsx(Outlet, {})] }));
};
