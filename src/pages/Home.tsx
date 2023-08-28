import LinkButton from "../componets/LinkButton.tsx";

function HomePage() {
    return (
        <main className="w-full min-h-screen bg-gray-50">
            <div className="container mx-auto px-8 lg:px-4 min-h-screen flex flex-col justify-center items-center">

                <h1 className="text-3xl xl:text-4xl font-bold text-center text-gray-600 mb-20">Univerzalna sportska škola</h1>

                <LinkButton title="Pravila privatnosti hr" to="/privacy-croatian"/>
                <LinkButton title="Pravila privatnosti en" to="/privacy-english"/>
                <LinkButton title="Pravila poslovanja hr" to="/terms-croatian"/>
                <LinkButton title="Pravila poslovanja en" to="/terms-english"/>
            </div>
        </main>
    )
}

export default HomePage