import { reactive } from "vue";

// le proprietà dell'oggetto reactive sono proprietà reattive
export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  cardList: [],
});
