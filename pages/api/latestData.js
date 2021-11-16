const latestData = async (req, res) => {
  const url = `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.APIKEY}`
  try {
    const { data } = await fetch(url).then((r) => r.json())
    res.status(200).json(data)
  } catch {
    res.status(500).json({ error: "Failed to fetch data" })
  }
}

export default latestData
