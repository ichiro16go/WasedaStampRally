import GiftList from "./components/GiftList"

export const Home=()=>{
    return(
        <div>
            <section>
                <h2 className="text-8xl text-center relative text-blue-600 after:content-['pt'] after:text-6xl after:absolute after:right-0 after:bottom-0 before:content-['現在'] before:text-2xl before:absolute before:left-0 before:top-0">50</h2>
                <p className="text-right mt-3">次のチケットまであと: 10pt</p>
            </section>
            <section className="flex justify-between mt-11 items-end">
                <h2 className="text-2xl">参加者</h2>
                <p className="text-5xl text-blue-600">50</p>
                <p className="text-xl">人</p>
            </section>
                <p className="text-right mt-3">次の景品解放まであと: 10人</p>
            <GiftList />
        </div>
    );
}