import useSWR from "swr"

/** @typedef {{ code: string; value: number }} Currency */

/**
 * Fetcher.
 *
 * @param {string} url
 * @returns {Promise<Record<string, Currency>>}
 */
const fetcher = (url) => fetch(url).then((r) => r.json())

/**
 * UseData.
 *
 * @returns {Record<string, Currency>}
 */
export default function useData() {
  const url = "https://currentcy.carlosala.dev/api/latestdata"
  const { data } = useSWR(url, fetcher)
  if (data) console.log(data)
  return data
}
