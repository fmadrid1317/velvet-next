import cocktails from "@/data/cocktailsList.json"

export default function handler(req, res) {
    res.status(200).json(cocktails)
  }
  