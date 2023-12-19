import { HeroDeets } from "../hooks/useHero";
import TestimonialsList from "./testimonials_list";
export interface PageIntroProps {
  waitAMo: boolean;
  heroics: HeroDeets | null;
}
const PageIntro: React.FC<PageIntroProps> = ({ waitAMo, heroics }) => (
  <>
    {waitAMo && <p>...getting heroics...</p>}
    {heroics && (
      <div
        className="hero-section"
        style={{
          background: `linear-gradient(0deg, rgba(10 10 10 / 90%), rgba(25 119 25 / 60%)), url(${heroics.image})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 20%",
        }}
      >
        <h3>We've been helping humanity traverse the universe for aeons.</h3>
        <p>
          Now it's your turn to marvel at the wonders of the universe! But don't
          just take our word for it; check out these smashing reviews from
          customers just like you!
        </p>
        <TestimonialsList heroics={heroics} />
      </div>
    )}
    ;
  </>
);
export default PageIntro;
