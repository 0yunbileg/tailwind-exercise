import { FaPowerOff } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <aside className="w-80 bg-white rounded-xl p-4 m-5 flex flex-col gap-5">
            <div className="flex items-center gap-2">
                <div className="bg-[url('/images/profile.jpg')] bg-cover bg-center w-15 h-15 rounded-xl"></div>
                <div>
                    <p className="font-bold">Oyunbileg Battulga</p>
                    <p className="text-sm text-gray-500">Session ends in 9 min 5s</p>
                </div>
                <div className="bg-[#007E01] flex items-center justify-center w-12 h-12 rounded-xl">
                    <FaPowerOff className="text-white w-5 h-5" />
                </div>
            </div>

            <div>
                <p>Banking</p>
                <div>
                    { }
                </div>
            </div>

            <div>
                <p>Services</p>
                <div>
                    { }
                </div>
            </div>

            <div>
                <p>Other</p>
                <div>
                    { }
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;