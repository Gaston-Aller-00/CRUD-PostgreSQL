import express from "express";

const router = express.Router();

//middleware jwt
const authenticationToken = () => {};

router.post("/", authenticationToken, () => {});
router.get("/", authenticationToken, () => {});
router.get("/:id", authenticationToken, () => {});
router.put("/:id", authenticationToken, () => {});
router.delete("/:id", authenticationToken, () => {});
export default router;
