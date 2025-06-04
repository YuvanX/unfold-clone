export const Partner = () => {
    return <div className="min-h-screen text-black bg-white rounded-[40px] mx-20">
        <div className="flex items-center px-20 py-10">
            <div className="flex flex-col h-[800px]  justify-between">
                <div className="capitalize text-9xl font-fk-display font-medium">friends & partners</div>
                <div className="flex gap-x-20">
                    <div>
                        <img src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e04ac26af00b1fba5f9e5e_startup%20star.svg" alt="startup" />
                        <div className="capitalize text-lg text-center mt-5 font-fk-display">startup</div>
                    </div>
                    <div>
                        <img src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e04ac247ab58939bb5d371_established%20star.svg" alt="established" />
                        <div className="capitalize text-lg text-center mt-5 font-fk-display">established</div>
                    </div>
                    <div>
                        <img src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e04ac21693d180a60f6426_enterprise%20star.svg" alt="enterprise" />
                        <div className="capitalize text-lg text-center mt-5 font-fk-display">enterprise</div>
                    </div>
                </div>
            </div>
            <div>
                image
            </div>
        </div>
    </div>
}