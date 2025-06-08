export const Jaw = () => {
    return <div className="h-screen">
        <div className="mt-20 p-24 bg-white text-black rounded-[40px] min-h-[80vh]">
            <img src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665114658293e25fc21ed174_jamm-logo.svg" alt="jaw" width={350}/>
            <div className="flex justify-between items-end">
                <div className="text-7xl font-fk-display font-medium max-w-sm mt-10 leading-20">
                    Unfold's subscription service
                </div>
                <div className="flex gap-x-32 font-fk-display">
                    <div className="flex flex-col">
                        <div className="capitalize mt-2 text-2xl">branding</div>
                        <div className="capitalize mt-2 text-2xl">print</div>
                        <div className="capitalize mt-2 text-2xl">stratery</div>
                        <div className="capitalize mt-2 text-2xl">logos</div>
                        <div className="capitalize mt-2 text-2xl">consulting</div>
                    </div>
                      <div className="flex flex-col">
                        <div className="capitalize mt-2 text-2xl">webdesign</div>
                        <div className="capitalize mt-2 text-2xl">illustration</div>
                        <div className="capitalize mt-2 text-2xl">copywritring</div>
                        <div className="capitalize mt-2 text-2xl">development</div>
                        <div className="uppercase mt-2 text-2xl">ui/ux</div>
                    </div>
                      <div className="flex flex-col">
                        <div className="capitalize mt-2 text-2xl">Product</div>
                        <div className="capitalize mt-2 text-2xl">apps</div>
                        <div className="capitalize mt-2 text-2xl">icons</div>
                        <div className="capitalize mt-2 text-2xl">design systems</div>
                        <div className="capitalize mt-2 text-2xl">prototyping</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}