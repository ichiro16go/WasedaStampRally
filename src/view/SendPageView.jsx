import { LuArrowRightLeft } from "react-icons/lu";

export const Send = () => {
  return (
    <div>
      <p className="text-center text-xl">現在のポイント: 50pt</p>
      <div className="flex h-12 items-center justify-center">
        <LuArrowRightLeft className="rotate-90" size={54} />
      </div>
      <p className="text-center text-xl">応募チケット: 5枚</p>
      {/* 以下のsectionはHomePageと共通なのでまとめる必要あり */}
      <section className="mt-11">
        <h2 className="text-2xl">景品一覧</h2>
        <ul className="w-full overflow-y-scroll max-h-64 bg-gray-500 divide-y divide-black rounded">
          <li className="h-11 mx-5 flex items-center justify-center relative before:content-['Now'] before:text-sm before:absolute before:left-0">
            景品サンプル
          </li>
          <li className="h-11 px-5 flex items-center justify-between">
            <p>景品サンプル</p>
            <p>10人</p>
          </li>
          <li className="h-11 px-5 flex items-center justify-between">
            <p>景品サンプル</p>
            <p>10人</p>
          </li>
          <li className="h-11 px-5 flex items-center justify-between">
            <p>景品サンプル</p>
            <p>10人</p>
          </li>
          <li className="h-11 px-5 flex items-center justify-between">
            <p>景品サンプル</p>
            <p>10人</p>
          </li>
          <li className="h-11 px-5 flex items-center justify-between">
            <p>景品サンプル</p>
            <p>10人</p>
          </li>
          <li className="h-11 px-5 flex items-center justify-between">
            <p>景品サンプル</p>
            <p>10人</p>
          </li>
          <li className="h-11 px-5 flex items-center justify-between">
            <p>景品サンプル</p>
            <p>10人</p>
          </li>
          <li className="h-11 px-5 flex items-center justify-between">
            <p>景品サンプル</p>
            <p>10人</p>
          </li>
          <li className="h-11 px-5 flex items-center justify-between">
            <p>景品サンプル</p>
            <p>10人</p>
          </li>
          <li className="h-11 px-5 flex items-center justify-between">
            <p>景品サンプル</p>
            <p>10人</p>
          </li>
          <li className="h-11 px-5 flex items-center justify-between">
            <p>景品サンプル</p>
            <p>10人</p>
          </li>
        </ul>
      </section>
      <button className="block mx-auto mt-12 w-32 h-11 bg-gray-500 rounded">
        送信
      </button>
    </div>
  );
};
