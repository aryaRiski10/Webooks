
const BeforeFooter = () => {

    return (
        <div className="py-24 px-4 bg-indigo-500 text-white">
            <div className="w-full max-w-6xl mx-auto text-center">
                <div className="flex md:flex-row flex-wrap sm:items-center max-md:justify-center gap-8">
                    <div className="books-available flex flex-col items-center gap-2">
                        <h3 className="lg:text-5xl text-3xl font-semibold">2000+</h3>
                        <span className="text-lg">Books Available</span>
                    </div>
                    <div className="active-members flex flex-col items-center gap-2">
                        <h3 className="lg:text-5xl text-3xl font-semibold">5000+</h3>
                        <span className="text-lg">Active Members</span>
                    </div>
                    <div className="genres flex flex-col items-center gap-2">
                        <h3 className="lg:text-5xl text-3xl font-semibold">50+</h3>
                        <span className="text-lg">Genres</span>
                    </div>
                    <div className="access-time flex flex-col items-center gap-2">
                        <h3 className="lg:text-5xl text-3xl font-semibold">24/7</h3>
                        <span className="text-lg">Access Time</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeforeFooter