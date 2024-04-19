
interface contentObj {
    name: string,
    url: string
}

function FooterSection({ heading, content }: { heading: string, content: contentObj[] }) {
    return (
        <div className="section my-[3rem]">
            <h1 className='font-["Neue Montreals"] pb-[.5rem]'>{heading} :</h1>
            {content.map((item) => (<a className="block underline font-light font-['Neue Montreals']" href={item.url} target="_blank">{item.name}</a>))}


        </div>
    )
}

export default FooterSection