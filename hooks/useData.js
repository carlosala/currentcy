import useSWR from "swr"

/**
 * Fetcher.
 *
 * @param {string} url
 * @returns {Promise<Object>}
 */
const fetcher = (url) => fetch(url).then((r) => r.json())

/**
 * UseData.
 *
 * @returns {Object}
 */
const useData = () => {
  const url = "https://currentcy.carlosala.dev/api/latestdata"
  const { data } = useSWR(url, fetcher)
  return { data }
}

export default useData
