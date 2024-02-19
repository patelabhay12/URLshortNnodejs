const URL = require("../models/url");
const shortid = require("shortid");



const generateNewShortURl = async (req, res) => {
    const body = req.body;
    if (!body.url) return re.status(400).json({ error: "Bad request url is required..." });

    const shortID = shortid(8);
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: []
    });
    return res.json({ id: shortID });
}


const URLRedirect = async (req, res)=>{

    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        }
    );

    res.redirect(entry.redirectURL);

}
module.exports = { generateNewShortURl,URLRedirect};  