import useSWR from "swr"

/**
 * Fetcher.
 *
 * @param {string} url
 * @returns {Promise<Record<string, number>>}
 */
const fetcher = (url) => fetch(url).then((r) => r.json())

/**
 * UseData.
 *
 * @returns {Record<string, number>}
 */
export default function useData() {
  const url = "https://currentcy.carlosala.dev/api/latestdata"
  const { data } = useSWR(url, fetcher)
  return data
}
