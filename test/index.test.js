import test from "node:test";
import assert from "node:assert/strict";
import { stripAnsi, hasAnsi } from "../src/index.js";
test("strips colors",()=>assert.equal(stripAnsi("\u001b[31mred\u001b[0m"),"red"));
test("detects ANSI",()=>{assert.equal(hasAnsi("\u001b[1mx\u001b[0m"),true);assert.equal(hasAnsi("x"),false);});
