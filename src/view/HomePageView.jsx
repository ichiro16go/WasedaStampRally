export const Home=()=>{
    return(
        <div>
            {/* <p className="text-2xl">現在</p> */}
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
            <section className="mt-11">
                <h2 className="text-2xl">景品一覧</h2>
                <ul className="w-full overflow-y-scroll max-h-64 bg-gray-500 divide-y divide-black rounded">
                    <li className="h-11 mx-5 flex items-center justify-center relative before:content-['Now'] before:text-sm before:absolute before:left-0">景品サンプル</li>
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
        </div>
    )
}