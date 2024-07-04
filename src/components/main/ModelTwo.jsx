

const ModelTwo = ({ color }) => {

    const colorClasses = {
        blue: {
            bg: "bg-[#FFFFFF]",
            text: "text-[#202020]",
            textnav: "text-[#3B82F6]",
            h1: "text-[#F4F4F5]",
            h2: "text-[#E4E4E7]",
            cardsm: "bg-[#74b2df]",
            cardxl: "bg-[#629BF8]",
            footer: "bg-[#BFDBFE]"
        },
        red: {
            bg: "bg-[#FFFFFF]",
            text: "text-[#202020]",
            textnav: "text-[#EF4444]",
            h1: "text-[#F4F4F5]",
            h2: "text-[#E4E4E7]",
            cardsm: "bg-[#df7474]",
            cardxl: "bg-[#F26969]",
            footer: "bg-[#FECACA]"
        },
        yellow: {
            bg: "bg-[#FFFFFF]",
            text: "text-[#202020]",
            textnav: "text-[#EBB957]",
            h1: "text-[#F4F4F5]",
            h2: "text-[#E4E4E7]",
            cardsm: "bg-[#dfbd74]",
            cardxl: "bg-yellow-600/80",
            footer: "bg-yellow-600/20"
        },
        dark: {
            bg: "bg-[#3C3C3F]",
            text: "text-[#D4D4D8]",
            textnav: "text-[#FFFFFF]",
            h1: "text-[#F4F4F5]",
            h2: "text-[#E4E4E7]",
            cardsm: "bg-[#3F3F46]",
            cardxl: "bg-[#52525B]",
            footer: "bg-[#2F2F31]"
        },
    };

    const classes = colorClasses[color]

    return (
        <div className="border rounded p-1 min-h-[530px] max-h-[550px] bg-white">
            <div className={`${classes.bg} border rounded h-full`}>
                <div className={`py-2 ${classes.nav}`}>
                    <div className={`flex items-center justify-between max-w-[550px] w-full px-[2rem] py-1 mr-auto ml-auto ${classes.textnav} font-semibold`}>
                        <p>Home</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className="">
                    <div className="grid grid-cols-3 max-w-[550px] w-full px-[2rem] py-4 gap-2 mr-auto ml-auto">
                        <div className={`min-w-10 min-h-16 max-h-44 border rounded p-2 space-y-2 text-center ${classes.cardsm}`}>
                            <h1 className={`text-2xl font-bold ${classes.h1}`}>Title</h1>
                            <h2 className={`text-xl ${classes.h2}`}>Subtitle</h2>
                            <p className={`text-sm ${classes.h2} opacity-90`}>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className={`col-span-2 min-w-10 min-h-44  border rounded p-2 space-y-2 text-center ${classes.cardxl}`}>
                            <h1 className={`text-2xl font-bold ${classes.h1}`}>Title</h1>
                            <h2 className={`text-xl ${classes.h2}`}>Subtitle</h2>
                            <p className={`text-sm ${classes.h2} opacity-90`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 max-w-[550px] w-full px-[2rem] py-4 gap-2 mr-auto ml-auto">
                        <div className={`col-span-2 min-w-10 min-h-48  border rounded p-2 space-y-2 text-center ${classes.cardxl}`}>
                            <h1 className={`text-2xl font-bold ${classes.h1}`}>Title</h1>
                            <h2 className={`text-xl ${classes.h2}`}>Subtitle</h2>
                            <p className={`text-sm ${classes.h2} opacity-90`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className={`min-w-10 min-h-16 max-h-48 border rounded p-2 space-y-2 text-center ${classes.cardsm}`}>
                            <h1 className={`text-2xl font-bold ${classes.h1}`}>Title</h1>
                            <h2 className={`text-xl ${classes.h2}`}>Subtitle</h2>
                            <p className={`text-sm ${classes.h2} opacity-90`}>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className={`border-t ${classes.footer}`}>
                    <div className={`max-w-[550px] w-full px-[2rem] py-2  mr-auto ml-auto flex items-center justify-between text-sm ${classes.text}`}>
                        <p>Contact us</p>
                        <p>+34213433232</p>
                        <p>@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModelTwo
