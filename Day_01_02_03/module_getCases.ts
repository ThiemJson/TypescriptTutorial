import axios from "axios";
const AxiosInstance = axios.create();
// function getCasestaFromMonth(
//   month: string,
//   day: string
// ): Promise<number | Error> {
//   return AxiosInstance.get(
//     `https://api.covid19api.com/country/vietnam/status/confirmed?from=2020-${month}-01T00:00:00Z&to=2020-${month}-${day}T00:00:00Z`
//   )
//     .then((res) => res.data)
//     .then((dataJSON): number => {
//       return dataJSON[parseInt(day) - 1]["Cases"] - dataJSON[0]["Cases"];
//     })
//     .catch(
//       (err: Error): Error => {
//         console.log(err);
//         return err;
//       }
//     );
// }

async function getCasestaFromMonth(month: string, day: string) {
  try {
    const response = await AxiosInstance.get(
      `https://api.covid19api.com/country/vietnam/status/confirmed?from=2020-${month}-01T00:00:00Z&to=2020-${month}-${day}T00:00:00Z`
    );
    const dataJSON = response.data;
    return dataJSON[parseInt(day) - 1]["Cases"] - dataJSON[0]["Cases"];
  } catch {
    console.log("got err");
  }
}
export { getCasestaFromMonth };
