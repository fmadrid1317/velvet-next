import cocktails from "@/data/cocktailsList.json"

export default function handler(req, res) {
    const cocktailName = req.query;

    const match = cocktails.find(
        (cocktail) =>{
             return String(cocktail.title).toLowerCase() == String(Object.values(cocktailName)).toLocaleLowerCase() 
        }
    );

    if(!match){
        res.status(404).json({
            error: 'Cocktail not found'
        });
        return;
    }

    res.status(200).json(match || {})
  }
  