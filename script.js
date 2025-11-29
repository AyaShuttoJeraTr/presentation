'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//お土産リスト
const souvenirList = [
  {
    name: "ほっけジャーキー",
    maker: "帆立屋しんや",
    price: "540円",
    comment: "お酒のあてにぴったり。北海道物産展でも見かける。",
    url: "https://hotate-shop.shinya.ne.jp/view/item/000000000056"
  },
  {
    name: "昆布だしめんたいこ",
    maker: "北海道　椒房庵",
    price: "1,242円 ～ 5,670円",
    comment: "めんたいこと昆布を一緒にたべるとさらに美味しい。家庭用と贈答用がある。",
    url: "https://www.kubara.jp/shobouan/mentaiko/konbudashi/4100200/"
  },
  {
    name: "白い恋人",
    maker: "石屋製菓",
    price: "777円 ～ 5,184円",
    comment: "定番のお土産。パッケージに描かれているのは利尻山。",
    url: "https://shop.ishiya.co.jp/collections/shiroi-koibito"
  },
  {
    name: "鮭ぶし丸",
    maker: "柳月",
    price: "600円",
    comment: "ピリ辛のおせんべい。1袋2枚入り。",
    url: "https://www.ryugetsu.co.jp/i/02058"
  },
  {
    name: "スノーボール",
    maker: "SNOWS",
    price: "1,296円 ～ 1,728円",
    comment: "冬季限定。12/9(火)まで大丸東京店にポップアップストアがオープンしている。",
    url: "https://snows-winter.com/snowball-kuro/"
  },
  {
    name: "酪農ミルクプリン",
    maker: "札幌農学校",
    price: "540円",
    comment: "濃厚でなめらかなプリン。新千歳空港でも買えます！",
    url: "https://sapporoagriculturalcollege.com/item/milk_pudding/"
  },
  {
    name: "ひら天",
    maker: "かま栄",
    price: "237円 ～ 583円",
    comment: "ほんのり甘味のあるかまぼこ。真空パックと揚げたてがある。ぜひ揚げたてを食べてほしい。",
    url: "https://www.kamaei.co.jp/shop/products/detail/68"
  }
]

const btn = document.getElementById("showRandom");

btn.addEventListener("click", () => {
  const mySouvenir = getRandomSouvenir(souvenirList);
  document.getElementById("name").textContent = `${mySouvenir.name}`;
  document.getElementById("price").textContent = `${mySouvenir.price}`;
  document.getElementById("comment").textContent = `${mySouvenir.comment}`;
  document.getElementById("url").href = `${mySouvenir.url}`;
  document.getElementById("result").style.display = "table";
}
);

/**
 * @param {Array} souvenirList 北海道のお土産リスト、オブジェクトの配列
 * @returns {Object} おみやげオブジェクトの中から１つランダムに選んだもの
*/
function getRandomSouvenir(souvenirs) {
  const arraySouvenirs = [];
  for (const key in souvenirs) {
    const value = souvenirs[key];
    arraySouvenirs.push(value);
  }
  const index = Math.floor(Math.random() * arraySouvenirs.length);
  console.log(arraySouvenirs[index].name);
  return arraySouvenirs[index];
}
