import Cors from "cors"

function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}

const cors = initMiddleware(Cors({ methods: ["GET"] }))

const latestData = async (req, res) => {
  const url = `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.APIKEY}`
  await cors(req, res)
  try {
    const { data } = await fetch(url).then((r) => r.json())
    res.status(200).json(data)
  } catch {
    res.status(500).json({ error: "Failed to fetch data" })
  }
}

export default latestData
