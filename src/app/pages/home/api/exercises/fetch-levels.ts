import i18n from "@/i18n";
import { JSON_HEADER } from "@/lib/constants/api.const";
import axios from "axios";

const fetchLevels = async () => {
  const res = await axios.get("https://fitness.elevateegy.com/api/v1/levels", {
    headers: {
      ...JSON_HEADER,
      "Accept-Language": i18n.language,
    },
  });
  return res.data;
};

export default fetchLevels;
