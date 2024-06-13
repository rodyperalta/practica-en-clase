"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deportistaRouter = void 0;
const express_1 = require("express");
const deportistaController_1 = require("../Controllers/deportistaController");
const router = (0, express_1.Router)();
exports.deportistaRouter = router;
router.get('/', deportistaController_1.getAllDeportistas);
router.post('/', deportistaController_1.createDeportista);
