import test from "node:test"
import { Hello } from "./hello"
var hello = new Hello()
hello.hello()
var testButton:any = document.getElementById("test")
testButton.onclick = function()
{
    alert("test")
}