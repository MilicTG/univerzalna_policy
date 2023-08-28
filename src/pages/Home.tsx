import LinkButton from "../componets/LinkButton.tsx";

function HomePage() {
    return (
        <main className="w-full min-h-screen bg-gray-50">
            <div className="container mx-auto px-8 lg:px-4 min-h-screen flex flex-col justify-center items-center">

                <h1 className="text-3xl xl:text-4xl font-bold text-center text-gray-600 mb-14">Univerzalna sportska
                    škola<br/> Tomislavgrad</h1>

                <LinkButton title="Pravila privatnosti" to="/privacy-croatian"/>
                <LinkButton title="Uvijeti korištenja" to="/terms-croatian"/>
                <LinkButton title="Privacy policy" to="/privacy-english"/>
                <LinkButton title="Terms of agreement" to="/terms-english"/>
            </div>
        </main>
    )
}

export default HomePage