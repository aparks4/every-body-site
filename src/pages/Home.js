import { loremIpsum } from "react-lorem-ipsum";
import { RegButton } from "../components/RegButton";

export const HomePage = () => {
    return (
        <div className="page home-page">
            <h1>every body</h1>
            <p>{loremIpsum()}</p>
            <RegButton />
        </div>
    )
}