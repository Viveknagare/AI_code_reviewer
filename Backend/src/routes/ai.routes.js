import express from 'express';
import { getreview } from '../controllers/ai.controller.js';

const router = express.Router();

router.post("/get-review",getreview)

export default router;