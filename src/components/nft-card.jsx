import CardImage from "../assets/images/image-equilibrium.jpg";
import Avatar from "../assets/images/image-avatar.png";
import {ReactComponent as EtherIcon} from "../assets/images/icon-ethereum.svg";
import {ReactComponent as ClockIcon} from "../assets/images/icon-clock.svg";
import {ReactComponent as ViewIcon} from "../assets/images/icon-view.svg";

export default function NftCard() {
    return (
        <div className="flex flex-col h-[38rem] w-[23rem] bg-[#14253d] rounded-2xl p-6 pb-0 text-[#8bacda] gap-5">
            <div className="group relative h-[20rem] hover:cursor-pointer">
                <img className="rounded-xl"
                    src={CardImage}
                    alt="Nft preview" />
                <div className="invisible absolute inset-0 flex items-center justify-center bg-opacity-0 bg-cyan-300 rounded-xl group-hover: group-hover:bg-opacity-40 group-hover:visible transition-all duration-300">
                    <ViewIcon className=" opacity-0 group-hover:opacity-70 duration-300"/>
                </div>

            </div>
            
            <h1 className="text-white font-semibold text-2xl hoverCyan">Equilibrium #3429</h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <div className="flex flex-row justify-between">
                <p className="items-center inline-flex gap-2 text-cyan-300"><EtherIcon/>0.0041 ETH</p>
                <p className="items-center inline-flex gap-2"><ClockIcon/>3 days left</p>
            </div>
            <div className="h-[0.1rem] w-full bg-[#2f415b] rounded-full"></div>
            <div className="flex flex-row gap-5 items-center">
                <img className="h-9 w-9 border-[0.025rem] border-white rounded-full" src={Avatar} alt="Avatar" />
                <p>Creation of <span className="text-white hoverCyan">Jules Wyvern</span></p>
            </div>
        </div>
    );
}