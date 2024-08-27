// componente template (ensinar o davi)
type LandingPageProps = {
    exampleProp?: string
}

const LandingPage = ({ exampleProp }: LandingPageProps) => {
    const text = exampleProp ?? 'default text'

    return <div>{text}</div>
}

export default LandingPage
