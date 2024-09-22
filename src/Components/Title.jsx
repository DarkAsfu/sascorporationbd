const Title = ({ title, color }) => {
    return (
        <div>
            <h1 className="text-center mb-6 mt-10 text-3xl  md:text-5xl font-bold">{title}</h1>
            <div
                className="w-48 mx-auto inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-[#0073E6] to-transparent opacity-75"
            ></div>
        </div>
    )
}

export default Title;