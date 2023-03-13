import cocktails from "@/data/cocktailsList.json"

export default function handler(req, res) {
    const cocktailName = req.query;
    console.log("cocktail:", String(Object.values(cocktailName)))

    const match = cocktails.find(
        (cocktail) =>{
             return String(cocktail.title).toLowerCase() == String(Object.values(cocktailName)).toLocaleLowerCase() //need to figure out the lower case situation
        }
    );
    console.log("match result", match)

    if(!match){
        res.status(404).json({
            error: 'Cocktail not found'
        });
        return;
    }

    res.status(200).json(match || {})
  }
  