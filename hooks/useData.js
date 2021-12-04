import useSWR from "swr"

/**
 * Fetcher.
 *
 * @param {string} url
 * @returns {Promise<Object<string, number>>}
 */
const fetcher = (url) => fetch(url).then((r) => r.json())

/**
 * UseData.
 *
 * @returns {Object<string, number>}
 */
export default function useData() {
  const url = "https://currentcy.carlosala.dev/api/latestdata"
  const { data } = useSWR(url, fetcher)
  return data
}
