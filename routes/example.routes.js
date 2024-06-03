import { Router } from "express";
import { ExampleController } from "../controllers/gastos.controller.js";

const router = Router();

router.get("/", getAllGastos);
router.get("/:", getByIdGasto);
router.post("/", createGasto);
router.put("/", updateGasto);
router.delete("/", removeGasto);

export default router;
