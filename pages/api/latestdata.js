import Cors from "cors"

/**
 * Cors.
 *
 * @param {any} req
 * @param {any} res
 */
const cors = (req, res) =>
  new Promise((resolve, reject) => {
    Cors({ methods: ["GET"] })(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })

/**
 * Latestdata.
 *
 * @param {any} req
 * @param {any} res
 */
const latestdata = async (req, res) => {
  const url = `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.APIKEY}`
  await cors(req, res)
  try {
    const { data } = await fetch(url).then((r) => r.json())
    res.status(200).json(data)
  } catch {
    res.status(500).json({ error: "Failed to fetch data" })
  }
}

export default latestdata
