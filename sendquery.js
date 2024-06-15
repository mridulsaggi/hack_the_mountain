import userquery from "./schema.js";
export const sendquery=async(req,res)=>{
    try{
        const {email,contact,query}=req.body;
        const newquery=userquery({
            email,contact,query
        })
        if(newquery){
            await newquery.save();
            console.log(newquery)
            res.status(201).json({message:"query registered successfully"});
        }
        else{
            console.log(error.message);
            res.json({message:"Invalid query"})
        }
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message:"internal server error :("})
    }  
}