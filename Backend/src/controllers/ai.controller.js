import { generateContent } from "../services/ai.service.js";

export const getreview = async(req,res) => {
    const code = req.body.code;
    if(!code){
        return res.status(400).send("Prompt is required");
    }
    const response = await generateContent(code);

    res.send(response);
} 