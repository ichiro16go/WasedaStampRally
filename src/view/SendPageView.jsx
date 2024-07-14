import { LuArrowRightLeft } from "react-icons/lu";
import GiftList from "./components/GiftList";


export const Send=()=>{
    return(
        <div>
            <p className="text-center text-xl">現在のポイント: 50pt</p>
            <div className="flex h-12 items-center justify-center">
                <LuArrowRightLeft className="rotate-90" size={54} />
            </div>
            <p className="text-center text-xl">応募チケット: 5枚</p>
            <GiftList />
            <button className="block mx-auto mt-12 w-32 h-11 bg-gray-500 rounded">
                送信
            </button>
        </div>
    );
}
