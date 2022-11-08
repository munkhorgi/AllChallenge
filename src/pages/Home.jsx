import Header from "../components/Header";
import Testimoial from "../components/Testimonial";
import Testimoials from "../components/Testimoials";
import Comments from "../components/Contents";
import Footer from "../components/Footer";


export const Home =() => {
    return (
        <>  
            <Header />
            <Testimoial
                Texts={
                "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
                }
                Title="Your Hub for teamwork"
                Image={require("../images/niceOne.png")}
            />
            <Testimoials
                TextsTwo={
                "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
                }
                TitleTwo="Simple task management"
                ImageTwo={require("../images/niceTwo.png")}
            />
            <Testimoial
                Texts={
                "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
                }
                Title="Scheduling that actually works"
                Image={require("../images/niceThree.png")}
            />
            <Comments />
            <Footer />
        </>
    )
}