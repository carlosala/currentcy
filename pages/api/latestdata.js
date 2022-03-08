import Cors from "cors"

/**
 * Cors.
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
function cors(req, res) {
  return new Promise((resolve, reject) => {
    Cors({ methods: ["GET"] })(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

/**
 * Latestdata.
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
async function latestdata(req, res) {
  const url = `https://api.currencyapi.com/v3/latest?apikey=${process.env.APIKEY}`
  await cors(req, res)
  try {
    const { data } = await fetch(url).then((r) => r.json())
    res.status(200).json(data)
  } catch {
    res.status(500).json({ error: "Failed to fetch data" })
  }
}

export default latestdata
