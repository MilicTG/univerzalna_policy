import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home.tsx";
import PrivacyCroatian from "./pages/PrivacyCroatian.tsx";
import PrivacyEnglish from "./pages/PrivacyEnglish.tsx";
import TermsCroatian from "./pages/TermsCroatian.tsx";
import TermsEnglish from "./pages/TermsEnglish.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/privacy-croatian" element={<PrivacyCroatian/>}/>
            <Route path="/privacy-english" element={<PrivacyEnglish/>}/>
            <Route path="terms-croatian/" element={<TermsCroatian/>}/>
            <Route path="/terms-english" element={<TermsEnglish/>}/>
        </Routes>
    )
}


export default App
