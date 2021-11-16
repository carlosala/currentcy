import useSWR from "swr"

const fetcher = (url) => fetch(url).then((r) => r.json())

const useData = () => {
  const url = "https://currentcy.carlosala.dev/api/latestData"
  const { data } = useSWR(url, fetcher)
  return {
    data,
  }
}

export default useData
