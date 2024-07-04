const ModelOne = ({ color }) => {

    const colorClasses = {
        blue: {
            bg: "bg-[#BFDBFE]",
            mainBg: "bg-[#FFFFFF]",
            footer: "bg-[#BFDBFE]",
            h1: "text-[#5182EF]",
            h2: "text-[#5182EF]",
            nav: "bg-[#60A5FA]",
            text: "text-[#202020]",
            textnav: "text-[#FFFFFF]",
        },
        red: {
            bg: "bg-[#FECACA]",
            text: "text-[#202020]",
            textnav: "text-[#FFFFFF]",
            h1: "text-[#E35151]",
            h2: "text-[#F24444]",
            footer: "bg-[#FECACA]",
            nav: "bg-[#F87171]",
            mainBg: "bg-[#FFFFFF]"
        },
        yellow: {
            bg: "bg-[#F4E8CD]",
            text: "text-[#202020]",
            textnav: "text-[#FFFFFF]",
            h1: "text-[#D5A136]",
            h2: "text-[#EDB308]",
            footer: "bg-[#F4E8CD]",
            nav: "bg-[#CA8A04]",
            mainBg: "bg-[#FFFFFF]"
        },
        dark: {
            bg: "bg-[#3C3C3F]",
            text: "text-[#D4D4D8]",
            textnav: "text-[#FFFFFF]",
            h1: "text-[#F4F4F5]",
            h2: "text-[#E4E4E7]",
            footer: "bg-[#3C3C3F]",
            nav: "bg-[#2F2F31]",
            mainBg: "bg-[#71717A]"
        },
    };

    const classes = colorClasses[color] 

    return (
        <div className={`border rounded p-1 ${classes.border} bg-white`}>
            <div className={`border rounded ${classes.border}`}>
                <div className={`border-b py-2 ${classes.nav}`}>
                    <div className={`flex items-center justify-between max-w-[550px] w-full px-[2rem] py-1 mr-auto ml-auto ${classes.textnav}`}>
                        <p>Home</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className={`${classes.bg}`}>
                    <div className={`max-w-[550px] w-full px-[2rem] py-4 space-y-2 mr-auto ml-auto ${classes.mainBg}`}>
                        <h1 className={`text-4xl font-bold ${classes.h1}`}>Título 1</h1>
                        <h2 className={`text-2xl ${classes.h2}`}>Subtítulo 1</h2>
                        <p className={`${classes.text}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos veniam eveniet autem ex, voluptate accusamus voluptatibus nihil et voluptatem laborum eaque. Magni hic velit commodi nisi, eaque maiores ratione quaerat!</p>
                    </div>
                </div>
                <div className={`${classes.bg}`}>
                    <div className={`max-w-[550px] w-full px-[2rem] py-4 space-y-2 mr-auto ml-auto ${classes.mainBg}`}>
                        <h1 className={`text-4xl font-bold ${classes.h1}`}>Título 2</h1>
                        <h2 className={`text-2xl ${classes.h2}`}>Subtítulo 2</h2>
                        <p className={`${classes.text}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos veniam eveniet autem ex, voluptate accusamus voluptatibus nihil et voluptatem laborum eaque. Magni hic velit commodi nisi, eaque maiores ratione quaerat!</p>
                    </div>
                </div>
                <div className={`${classes.footer} ${classes.text}`}>
                    <div className={`max-w-[550px] w-full px-[2rem] py-2 mr-auto ml-auto flex items-center justify-between text-sm `}>
                        <p>Contact us</p>
                        <p>+34213433232</p>
                        <p>@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelOne;
