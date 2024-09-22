import Title from "./Title";

const OurClient = () => {
    const partnerLogos = [
        {
            id: 1,
            name: 'Ogilvy',
            logoUrl: 'https://unbundl.com/cdn/shop/files/Frame-5330-2.webp?v=1713952273',
            websiteUrl: 'https://ogilvy.com',
        },
        {
            id: 2,
            name: 'Wunderman Thompson',
            logoUrl: 'https://unbundl.com/cdn/shop/files/Frame-5353.webp?v=1713953081',
            websiteUrl: 'https://www.wundermanthompson.com',
        },
        {
            id: 3,
            name: 'BBDO',
            logoUrl: 'https://unbundl.com/cdn/shop/files/Frame-5345-1.webp?v=1713953081',
            websiteUrl: 'https://bbdo.com',
        },
        {
            id: 4,
            name: 'Dentsu',
            logoUrl: 'https://unbundl.com/cdn/shop/files/Frame-5357.webp?v=1713953081',
            websiteUrl: 'https://www.dentsu.com',
        },
        {
            id: 5,
            name: 'Leo Burnett',
            logoUrl: 'https://unbundl.com/cdn/shop/files/Frame-5349.webp?v=1713953081',
            websiteUrl: 'https://leoburnett.com',
        },
        {
            id: 6,
            name: 'TBWA',
            logoUrl: 'https://unbundl.com/cdn/shop/files/Frame-5343-1.webp?v=1713953080',
            websiteUrl: 'https://tbwa.com',
        },
        {
            id: 7,
            name: 'Grey',
            logoUrl: 'https://unbundl.com/cdn/shop/files/Frame-5356.webp?v=1713953080',
            websiteUrl: 'https://grey.com',
        },
        {
            id: 8,
            name: 'Saatchi & Saatchi',
            logoUrl: 'https://unbundl.com/cdn/shop/files/Frame-5341-1.webp?v=1713953081',
            websiteUrl: 'https://saatchi.com',
        },
    ];



    return (
        <div className="bg-[#F3F4F6] pb-20 mt-10">
            <Title title={"Our Clients"} />
            <div className="w-full text-5xl py-8  inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
                <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
                    {
                        partnerLogos.map(logo => <img data-aos="zoom-out" key={logo.id} className="w-24 ml-10 mix-blend-multiply" src={logo.logoUrl} />)
                    }
                </ul>
                <ul
                    className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
                    aria-hidden="true"
                >
                    {
                        partnerLogos.map(logo => <img data-aos="zoom-out" key={logo.id} className="w-24 ml-10 mix-blend-multiply" src={logo.logoUrl} />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default OurClient;